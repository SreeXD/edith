import os
import pickle
import numpy as np
from flask import Flask, request, send_from_directory

with open('model/House_predictor.pickle','rb') as f1, open('model/loc_in.pkl', 'rb') as f2:
    model = pickle.load(f1)
    loc_in = pickle.load(f2)

app=Flask(__name__, static_folder='./client/build', static_url_path='')

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/predict', methods=['GET'])
def predict():
    loc = request.args['location']
    area = float(request.args['area'])
    bhk = int(request.args['bedrooms'])
    bath = int(request.args['bathrooms'])

    num_locs = len(loc_in.keys())
    loc_enc = [0 for i in range(num_locs)] 
    loc_enc[loc_in[loc]] = 1

    x = [area, bhk, bath]
    x.extend(loc_enc)
    y = model.predict([x])

    return {
        'prediction': y[0]
    }