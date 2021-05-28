from flasgger import swag_from
from flask import Blueprint, jsonify, request, current_app
from flask_restful import abort, Api, Resource
import json
import os
from dotenv import load_dotenv

HOC = Blueprint("HMIOnlineChecker", __name__)
api = Api(HOC)



class HMIOnlineChecker(Resource):
    @swag_from("docs/hmi_online_checker.yml", validation=True)
    def post(self):
        return "Hi"


api.add_resource(HMIOnlineChecker, "/hmi_online_check/")
