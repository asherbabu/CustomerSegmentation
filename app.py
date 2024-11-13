from flask import Flask, render_template, request, flash
from werkzeug.utils import secure_filename
import mysql.connector

UPLOAD_FOLDER = 'Uploads'

ALLOWED_EXTENSIONS = {'webp', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__, template_folder='Templates', static_folder='Static')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SECRET_KEY'] = "something complex"

mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "tiger",
    database = ""
 )

my_cursor = mydb.cursor()

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/team')
def team():
    return render_template("team.html")

if __name__ == '__main__':
    app.run(debug=True, port=5000)