from flask import Flask, request, url_for, redirect, render_template, session

app = Flask(__name__)
app.secret_key = 'EHEHEHE'
app.config['SESSION_COOKIE_SAMESITE'] = "None"

@app.route("/", methods=['GET','POST'])
def index():
    if request.method == 'POST':
        return redirect(url_for('consent_page'))
    return render_template('index.html')


@app.route('/help')
def help_page():
    return render_template('help.html')

@app.route('/consent')
def consent_page():
    # session['name'] = request.form['name']
    data = []
    if 'name' in session:
        data = session['name']
        print(data)
        return render_template('consent.html', data=data)
    return render_template('consent.html')


@app.route('/noconsent')
def noconsent_page():
    return render_template('noconsent.html')

@app.route('/yesconsent')
def yesconsent_page():
    return render_template('yesconsent.html')

@app.route('/about')
def about_page():
    return render_template('about.html')

@app.route('/bigfive', methods=['GET', 'POST'])
def bigfive_page():
    if request.method == 'POST':
        return redirect(url_for('how_page'))

    return render_template('bigfive.html')

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

            return redirect(url_for('thankyou'))
        # return 'Sucesss', 200

    return render_template('missions.html')

@app.route('/thankyou')
def thankyou_page():
    return render_template('thankyou.html')


if __name__ == '__main__':
    app.debug = True
    app.run(host="0.0.0.0")