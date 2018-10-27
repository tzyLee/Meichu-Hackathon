import os
import time
import threading
from flask import Flask, render_template

from backend import scrape
from updateThread import global_data, fetch_data


public = os.path.abspath('src/')
app = Flask(__name__, template_folder = public, static_folder = public, static_url_path= '')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    thread = threading.Thread(target = fetch_data)
    thread.start()
    app.run(debug = True, use_reloader = False)