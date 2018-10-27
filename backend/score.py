import numpy as np

loc = list(range(1, 6))
air_types = ['CO2', 'CO', 'HCHO', 'TVOC', 'Bacteria', 'Fungi', 'PM10', 'PM2.5', 'O3']
air_score = {'CO2': [0, 500, 1000, 1500, 2000] , 'CO': [0.0, 4.4, 9, 12.4, 15.4], 'HCHO': [0.0, 0.04, 0.08, 0.12, 0.16], 
			'TVOC': [0, 0.28, 0.56, 0.84, 1.12], 'Bacteria': [0, 750, 1500, 2250, 3000], 'Fungi': [0, 500, 1000, 1500, 2000],
			'PM10': [0.0, 45, 75, 254, 354], 'PM2.5': [0.0, 15.4, 35, 54.4, 150.4], 'O3': [0.0, 0.034, 0.06, 0.085, 0.105]}

def AQI_score(x):
    for i in range(9):
        if x[i] >= air_score[air_types[i]][4]:
            x[i] = 0
        elif x[i] >= air_score[air_types[i]][3] and x[i] < air_score[air_types[i]][4]:
            x[i] = (x[i] - air_score[air_types[i]][3]) * 25 / (air_score[air_types[i]][3] - air_score[air_types[i]][4]) + 25
        elif x[i] >= air_score[air_types[i]][2] and x[i] < air_score[air_types[i]][3]:
            x[i] = (x[i] - air_score[air_types[i]][2]) * 25 / (air_score[air_types[i]][2] - air_score[air_types[i]][3]) + 50
        elif x[i] >= air_score[air_types[i]][1] and x[i] < air_score[air_types[i]][2]:
            x[i] = (x[i] - air_score[air_types[i]][1]) * 25 / (air_score[air_types[i]][1] - air_score[air_types[i]][2]) + 75
        elif x[i] >= air_score[air_types[i]][0] and x[i] < air_score[air_types[i]][1]:
            x[i] = (x[i] - air_score[air_types[i]][0]) * 25 / (air_score[air_types[i]][0] - air_score[air_types[i]][1]) + 100
    x = (x - 50) * 7 + 45
    x[x > 99] = 99
    score = np.mean(x)
    return score

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

def compute_score(data):
    scores = {}
    score_sum = 0
    for i in loc:
        scores[i] = AQI_score(json_to_arr(data[i]))
        score_sum += scores[i]
    scores['ave'] = score_sum / len(loc)
    return scores
