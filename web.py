#!/usr/bin/env python3
from flask import Flask, render_template, request, make_response
from functools import wraps
import json
import os
import sys
import socket


path = os.path.realpath(os.path.dirname(sys.argv[0]))

#------------------------------
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')



@app.route('/get_data', methods=['GET', 'POST'])
def control():
        data = {
             'param1' : "Value1",
             'param2' : "Value2"
        }
        return data

@app.route('/post_data', methods=['GET', 'POST'])
def handle_bom():
    test = request.form.get('value1')
    print(test)
    return test
    



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)
