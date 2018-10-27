import os
import json
import numpy as np

root_dir = './data'
air_types = ['CO2', 'CO', 'HCHO', 'TVOC', 'Bacteria', 'Fungi', 'PM10', 'PM2.5', 'O3']

air_mu = {'CO2': 1000, 'CO': 9, 'HCHO': 0.08, 'TVOC': 0.56, 'Bacteria': 1500,
           'Fungi': 1000, 'PM10': 75, 'PM2.5': 35, 'O3': 0.06}

bias_scale = 0.1
var = 0.01

# One cycle
def gen_air_data(air_type, n, k, cycles):
    mu = air_mu[air_type]
    
    normal_data = np.array([np.random.normal(1, var) * mu for _ in range(k * n)])
    filter_on  = np.linspace(normal_data[-1], mu * (1-bias_scale), n) + np.random.normal(0, var, n) * mu
    good_data = np.array([np.random.normal(1, var) * air_mu[air_type] * (1 - bias_scale) for _ in range(k * n)])
    filter_off = np.linspace(good_data[0], mu, n) + np.random.normal(0, var, n) * mu
    
    air_cycle = np.concatenate((normal_data, filter_on, good_data, filter_off))
    return np.concatenate([air_cycle for _ in range(cycles)])

def to_json(air_type, air_data, n, k):
    json_data = {i : {'type' : air_type, 
                  'value': air_data[i], 
                  'threshold': air_mu[air_type],
                  'quality': 'good' if air_data[i] < air_mu[air_type] else 'bad', 
                  'filter': 'on' if k * n <= i % (n * (2*k+2)) < (k+1) * n else 'off'} for i in range(len(air_data))}
    return json_data

for air in air_types:
    data = gen_air_data(air, 100, 2, 10)
    json_obj = to_json(air, data, 2, 10)
    with open(os.path.join(root_dir, '{}.json'.format(air)), 'w') as json_file:
        json.dump(json_obj, json_file)

