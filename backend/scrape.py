
import os
import json

locations = list(range(1, 6))
root_dir = './data'
air_types = ['CO2', 'CO', 'HCHO', 'TVOC', 'Bacteria', 'Fungi', 'PM10', 'PM2.5', 'O3']
air_data = [{air: None for air in air_types} for _ in range(5)]

for loc in locations:
    loc_dir = os.path.join(root_dir, str(loc))
    for air in air_types:
        with open(os.path.join(loc_dir, '{}.json'.format(air))) as json_file:
            d = json.load(json_file)
            air_data[loc - 1][air] = d

def get_data(idx):
    total_data = {}
    ave_data = {}
    for loc in locations:
        data = {}
        for air in air_types:
            data[air] = air_data[loc - 1][air][str(idx)]
            ave_data.setdefault(air, {'value': 0, 'threshold': data[air]['threshold']})
            ave_data[air]['value'] += data[air]['value']
        total_data[loc] = data
    for key in ave_data:
        ave_data[key]['value'] /= len(locations)
    total_data['ave'] = ave_data
    return total_data