import time
import json
from backend import scrape, score, power

delay = 1
global_data = {'air_data' : None, 
               'score' : None, 
               'power' : None,
               'idx' : 0,
               'average': 0}

def fetch_data():
    global global_data
    while True:
        global_data['air_data'] = scrape.get_data(global_data['idx'])
        global_data['score'] = score.compute_score(global_data['air_data'])
        global_data['power'] = power.compute_saving(power.extract_scores(global_data['score']))
        global_data['idx'] += 1

        global_data['average'] = global_data['score']['ave']
        del global_data['score']['ave']
        global_data['score'] = [score for score in global_data['score'].values()]
        time.sleep(delay)
    