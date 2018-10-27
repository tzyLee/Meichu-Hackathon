# -*- coding: utf-8 -*-
"""
Created on Sat Oct 27 08:56:42 2018

@author: USER
"""

import numpy as np
import copy
import matplotlib.pyplot as plt
import json

air_types = ['CO2', 'CO', 'HCHO', 'TVOC', 'Bacteria', 'Fungi', 'PM10', 'PM2.5', 'O3']

air_mu = {'CO2': 1000, 'CO': 9, 'HCHO': 0.08, 'TVOC': 0.56, 'Bacteria': 1500,
           'Fungi': 1000, 'PM10': 75, 'PM2.5': 35, 'O3': 0.06}
bias_scale = 0.1

var = 0.01
air_var = {'CO2': 0.1 , 'CO': 0.1, 'HCHO': 0.1, 'TVOC': 0.1, 'Bacteria': 0.1,
           'Fungi': 0.1, 'PM10': 0.1, 'PM2.5': 0.1, 'O3': 0.1}

air_score = {'CO2': [0, 500, 1000, 1500, 2000] , 'CO': [0.0, 4.4, 9, 12.4, 15.4], 'HCHO': [0.0, 0.04, 0.08, 0.12, 0.16], 
			'TVOC': [0, 0.28, 0.56, 0.84, 1.12], 'Bacteria': [0, 750, 1500, 2250, 3000], 'Fungi': [0, 500, 1000, 1500, 2000],
			'PM10': [0.0, 45, 75, 254, 354], 'PM2.5': [0.0, 15.4, 35, 54.4, 150.4], 'O3': [0.0, 0.034, 0.06, 0.085, 0.105]}

def scale(data, l, h, s, score):
	x = copy.copy(data)
	idx = np.where((x >= l) & (x < h))
	x[(x >= l) & (x < h)] = ( (x[(x >= l) & (x < h)]-l) * 25 / (l-h)) + s
	np.put(score, idx, x[idx])

def AQI_score(x, type):
	data = copy.copy(x)
	score = copy.copy(x)
	score[score >= air_score[type][4]] = 0
	scale(data, air_score[type][3], air_score[type][4], 25, score)
	scale(data, air_score[type][2], air_score[type][3], 50, score)
	scale(data, air_score[type][1], air_score[type][2], 75, score)
	scale(data, air_score[type][0], air_score[type][1], 100, score)
	score = (score-50) * 7 + 45
	score[score > 99] = 99
	return score

# One cycle
def gen_air_data(air_type, n, k):
    mu = air_mu[air_type]
    
    normal_data = np.array([np.random.normal(1, var) * mu for _ in range(k * n)])
    filter_on  = np.linspace(normal_data[-1], mu * (1-bias_scale), n) + np.random.normal(0, var, n) * mu
    good_data = np.array([np.random.normal(1, var) * air_mu[air_type] * (1 - bias_scale) for _ in range(k * n)])
    filter_off = np.linspace(good_data[0], mu, n) + np.random.normal(0, var, n) * mu
    
    air_cycle = np.concatenate((normal_data, filter_on, good_data, filter_off))
    return air_cycle

def to_json(air_type, air_data, n, k):
    json_data = [json.dumps({'type' : air_type, 
                  'value': air_data[i], 
                  'quality': 'good' if air_data[i] < air_mu[air_type] else 'bad', 
                  'filter': 'on' if k * n <= i % (n * (2*k+2)) < (k+1) * n else 'off'}) for i in range(len(air_data))]
    return json_data
    
def plot_air_data(air_type, n, k, cycles):
    y = np.concatenate([gen_air_data(air_type, n, k) for _ in range(cycles)])
    score = AQI_score(y, air_type)
    threshold = [air_mu[air_type] for _ in range(len(y))]
    x = list(range(1, len(y) + 1))
    #plt.plot(x, y)
    #plt.plot(x, threshold)
    #plt.plot(score)
    #plt.show()
    return to_json(air_type, y, n, k), score

def final_score(n, k, cycles):
	score = np.zeros(((n * cycles * (2*k+2)), ))
	for i in air_types:
		x = plot_air_data(i, 100, 2, 2)[1]
		score += x
	score /= 9
	plt.plot(score)
	plt.show()

# Added 
def json_to_arr(json_obj):
    
    """
    Args:
        json_obj: a json object of length n = 9.
    Returns:
        A 1 * 9 numpy array containing the measured values.
    """
    
    n = len(json_obj)
    data = np.zeros(n)
    for i in range(n):
        data[i] = json_obj[air_types[i]]['value']
    return data