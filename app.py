from flask import Flask, request, url_for, redirect, render_template, session, jsonify
import os
import logging
import traceback
from werkzeug.exceptions import HTTPException
import json
import io, csv
import datetime
from numpy import random


app = Flask(__name__)
app.secret_key = os.urandom(24)
# app.config["SESSION_TYPE"] = "filesystem"
# app.config['SESSION_COOKIE_SAMESITE'] = "Lax"
# app.config['SESSION_COOKIE_SECURE'] = "True"
# app.config['REMEMBER_COOKIE_SECURE'] = "True"


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login_page():
    if request.method == 'POST':
        return redirect(url_for('consent_page'))
    return render_template('login.html')

@app.route('/logingo', methods=['POST'])
def loginresult():
    if request.method == "POST":
        num = random.randint(100,1000)
        session['helmet'] = request.form['helmet']
        session['name'] = request.form['name']
        session['age'] = request.form['age']
        session['country'] = request.form['country']
        session['gender'] = request.form['gender']

        data = []
        p_id = num
        helmet = session['helmet']
        name = session['name']
        age = session['age']
        country = session['country']
        gender = session['gender']
        data.extend([str(p_id), helmet, name, age, country, gender])
        print(p_id)
        session["p_id2"] = p_id

        csv_path = r"/home/n23-webb/gameapp/data/logs.csv"
        with open(csv_path, 'a') as f:
            f.write(",".join(data))
            f.write("\n")

        return redirect(url_for('consent_page'))
    return redirect(url_for('consent_page'))


@app.route('/help')
def help_page():
    return render_template('help.html')

@app.route('/consent')
def consent_page():
    return render_template('consent.html')

@app.route('/noconsent')
def noconsent_page():
    return render_template('noconsent.html')

@app.route('/yesconsent', methods=['GET', 'POST'])
def yesconsent_page():
    return render_template('yesconsent.html')

@app.route('/bigfive', methods=['GET', 'POST'])
def bigfive_page():
    # print(session['omfgwork'])
    if request.method == 'POST':
        return redirect(url_for('how_page'))
    return render_template('bigfive.html')

@app.route('/big_five', methods=['GET', 'POST'])
def big_five_results():
    result = request.form.to_dict(flat=False)
    print(result)
    bah = []
    session['result'] = result
    for i in result:
        # print(result[i])
        bah.extend(result[i])
    p_id = session.get("p_id2")
    bah.insert(0,str(p_id))
    # data.extend([str(p_id), result])
    print(bah)

    csv_path = r"/home/n23-webb/gameapp/data/big5.csv"
    with open(csv_path, 'a') as f:
        f.write(",".join(bah))
        f.write("\n")

    return redirect(url_for('how_page'))


@app.route('/how', methods=['GET', 'POST'])
def how_page():
    return render_template('howtoplay.html')

@app.route('/missions', methods=['GET', 'POST'])
def missions_page():
    if request.method == 'POST':
        content = request.json.get('game')
        print(content)
        if content == 'over':
            timer_over = True   
            return redirect(url_for('thankyou_page'))
        # return 'Sucesss', 200

    return render_template('missions.html')

@app.route('/thankyou')
def thankyou_page():
    return render_template('thankyou.html')


if __name__ == '__main__':
    app.debug = False
    # app.run(host="0.0.0.0")
    app.run()