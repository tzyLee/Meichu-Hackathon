
import os
import json

locations = list(range(1, 6))
root_dir = '../data'
air_types = ['CO2', 'CO', 'HCHO', 'TVOC', 'Bacteria', 'Fungi', 'PM10', 'PM2.5', 'O3']
air_data = [{air: None for air in air_types} for _ in range(5)]

for loc in locations:
    loc_dir = os.path.join(root_dir, str(loc))
    for air in air_types:
        with open(os.path.join(loc_dir, '{}.json'.format(air))) as json_file:
            d = json.load(json_file)
            air_data[loc - 1][air] = d

def get_data(loc, idx):
    data = {}
    for air in air_types:
        data[air] = air_data[loc][air][str(idx)]
    return data