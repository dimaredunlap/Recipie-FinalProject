"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

#user routes
@api.route('/user', methods=['POST'])
def post_user():
    user_dictionary = request.json
    user = User()
    user.firstname = user_dictionary['firstname']
    user.lastname = user_dictionary['lastname']
    user.username = user_dictionary['username']
    user.email = user_dictionary['email']
    user.password = user_dictionary['password']
    db.session.add(user)
    db.session.commit()
    user_list= [user.serialize() for user in User.query.all()]
    return user_list

# @api.route('/user/:id', methods=['GET'])
    
    
#receive a json payload
#convert it to dictionary(key value pairs)
#instantiate a user from it
#save user in database
#return a response