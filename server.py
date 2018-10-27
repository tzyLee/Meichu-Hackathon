from flask import Flask, render_template
import os
import json
import backend

public = os.path.abspath('src/')
app = Flask(__name__, template_folder = public, static_folder = public, static_url_path= '')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def send_data():
    return '..............' + str(debug)
    # print(json.dumps({'a': 1, 'b': 2, 'c': 3}))
    # return json.dumps({'a': 1, 'b': 2, 'c': 3})

if __name__ == '__main__':
    app.run(debug = True)
    