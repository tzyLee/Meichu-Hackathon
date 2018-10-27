
import os
import json

root_dir = '../data'
air_types = ['CO2', 'CO', 'HCHO', 'TVOC', 'Bacteria', 'Fungi', 'PM10', 'PM2.5', 'O3']
air_data = {air: None for air in air_types}

for air in air_types:
    with open(os.path.join(root_dir, '{}.json'.format(air))) as json_file:
        d = json.load(json_file)
        air_data[air] = d
        
def get_data(idx):
    data = {}
    for air in air_types:
        data[air] = air_data[air][str(idx)]
    return data