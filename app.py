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

# import os

# from flask import Flask
# # from flask_sqlalchemy import SQLAlchemy

# # db = SQLAlchemy()

# def create_app(test_config=None):
#     # create and configure the app
#     # app = Flask(__name__, instance_relative_config=True)
#     app = Flask(__name__)
#     # app.config['SECRET_KEY'] = 'secret-key-goes-here'
#     # app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'

#     if test_config is None:
#         # load the instance config, if it exists, when not testing
#         app.config.from_pyfile('config.py', silent=True)
#     else:
#         # load the test config if passed in
#         app.config.from_mapping(test_config)

#     # ensure the instance folder exists
#     try:
#         os.makedirs(app.instance_path)
#     except OSError:
#         pass

#     # a simple page that says hello
#     @app.route('/hello')
#     def hello():
#         return 'Hello, World!'

#     return app
