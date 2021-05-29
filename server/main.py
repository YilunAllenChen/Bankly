from flask import Flask
from flask_cors import CORS
from flasgger import Swagger
import os
from dotenv import load_dotenv

from server_modules.counter import CTR

load_dotenv()

# RDS_URL = os.environ["STARTPROTO_RDS_URL"]




app = Flask(__name__)
swagger = Swagger(app)





@app.route("/")
def running():
    return "HI"

app.register_blueprint(CTR)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# NOTE: after the sever is running
if __name__ == "__main__":
    print("visit http://localhost:5000/apidocs to access API documentations")
    app.run(host="0.0.0.0", port=5000, debug=True)
