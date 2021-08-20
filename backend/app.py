from flask import Flask

app = Flask(__name__)

@app.route("/")
def main():
    return {"payload" : "helloworld"}

if __name__ == "__main__":
    print("hello world")