import os
import json
import time
import threading
from flask import Flask, render_template
from backend import scrape
from updateThread import global_data, fetch_data


public = os.path.abspath('public/')
app = Flask(__name__, template_folder = public, static_folder = public, static_url_path= '')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def send_data():
    return json.dumps(global_data)

if __name__ == '__main__':
    thread = threading.Thread(target = fetch_data)
    thread.start()
    app.run(debug = True, port = 3000, use_reloader = False)
