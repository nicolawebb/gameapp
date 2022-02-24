from flask import Flask, request, url_for, redirect, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/help')
def help_page():
    return render_template('help.html')

@app.route('/consent')
def consent_page():
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
        print(request.get_json())  # parse as JSON
        return redirect(url_for('about_page'))
        # return 'Sucesss', 200

    return render_template('missions.html')
