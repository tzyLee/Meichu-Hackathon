from flask import Flask, render_template
import os

public = os.path.abspath('public/')
app = Flask(__name__, template_folder = public, static_folder = public, static_url_path= '')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port = 3000)