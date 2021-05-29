from flasgger import swag_from
from flask import Blueprint, jsonify, request, current_app
from flask_restful import abort, Api, Resource
import json
import os
from dotenv import load_dotenv

HOC = Blueprint("Counter", __name__)
api = Api(HOC)


class Counter(Resource):
    count = 0

    @swag_from("docs/hmi_online_checker.yml", validation=False)
    def get(self):
        return Counter.count
    def post(self):
        Counter.count += 1
        return Counter.count


api.add_resource(Counter, "/count/")
