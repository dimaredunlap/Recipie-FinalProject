"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Recipe, Favorite, ShoppingList
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

#error handling: by id handle empty id, by post missing content

#user routes
#Get user 

@api.route('/user', methods=['GET'])
def get_all_user():
    user = User.query.all()
    all_users = list(map(lambda x: x.serialize(), user))
    return jsonify(all_users), 200
    
@api.route('/user/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.filter_by(id=id).first()
    return jsonify(user.serialize()), 200 


#Post user

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
    return jsonify(user_list)

#Delete user

@api.route('/user/<int:id>', methods=['PUT'])
def delete_user(id):
    remove_user = User.query.filter_by(id=id).first()
    print("You sure you want to delete user #:" + str(id))
    db.session.delete(remove_user)
    db.session.commit()
    return jsonify(remove_user.serialize()), 200

#Recipie routes
#Get recipe 

@api.route('/recipe', methods=['GET'])
def get_all_recipes():
    recipe = Recipe.query.all()
    all_recipes = list(map(lambda x: x.serialize(), recipe))
    return jsonify(all_recipes), 200
    
@api.route('/recipe/<int:id>', methods=['GET'])
def get_recipe(id):
    recipe = Recipe.query.filter_by(id=id).first()
    return jsonify(recipe.serialize()), 200 

#Recipe post requests
#need to add extra form stuff
@api.route('/recipe', methods=['POST'])
def post_recipe():
    recipe_dictionary = request.json
    recipe = Recipe()
    recipe.title = recipe_dictionary['title']
    recipe.servings = recipe_dictionary['servings']
    recipe.ingredients = recipe_dictionary['ingredients']
    recipe.directions = recipe_dictionary['directions']
    db.session.add(recipe)
    db.session.commit()
    recipe_list= [recipe.serialize() for recipe in Recipe.query.all()]
    return jsonify(recipe_list)

#Delete recipe

@api.route('/recipe/<int:id>', methods=['PUT'])
def delete_recipe(id):
    remove_recipe = Recipe.query.filter_by(id=id).first()
    print("You sure you want to delete recipe #:" + id)
    db.session.delete(remove_recipe)
    db.session.commit()
    return jsonify(remove_recipe.serialize()), 200

#Favorite Routes
#Get Favorite

@api.route('/favorites', methods=['GET'])
def get_all_favorites():
    favorite = Favorite.query.all()
    all_favorites = list(map(lambda x: x.serialize(), favorite))
    return jsonify(all_favorites), 200
    
@api.route('/favorite/<int:id>', methods=['GET'])
def get_favorite(id):
    favorite = Favorite.query.filter_by(id=id).first()
    return jsonify(favorite.serialize()), 200 

#Post Favorite 

@api.route('/user/favorite', methods=['POST'])
def create_favorite():
    favorite = request.get_json()
    new_favorite = Favorite(user_id=favorite['user_id'], recipe_id=favorite['recipe_id'], recipe_name=favorite['recipe_name'])
    db.session.add(new_favorite)
    db.session.commit()
    return jsonify(new_favorite.serialize()), 200

#Delete favorite recipe
@api.route('/favorite/recipe/<int:id>', methods=['PUT'])
def delete_favorite(id):
    remove_favorite = favorite.query.filter_by(id=id).first()
    print("You sure you want to delete favorite recipe #:" + id)
    db.session.delete(remove_favorite)
    db.session.commit()
    return jsonify(remove_favorite.serialize()), 200

#ShoppingList
#get the list 
@api.route('/list', methods=['GET'])
def get_all_list():
    shoppinglist = ShoppingList.query.all()
    all_list = list(map(lambda x: x.serialize(), shoppinglist))
    return jsonify(all_list), 200
    
@api.route('/list/<int:id>', methods=['GET'])
def get_list(id):
    shoppinglist = ShoppingList.query.filter_by(id=id).first()
    return jsonify(shoppinglist.serialize()), 200 

#Post list 

@api.route('/user/list', methods=['POST'])
def create_list():
    shoppinglist = request.get_json()
    new_list = ShoppingList(user_id=shoppinglist['user_id'], recipe_id=shoppinglist['recipe_id'], recipe_name=shoppinglist['recipe_name'])
    db.session.add(new_list)
    db.session.commit()
    return jsonify(new_list.serialize()), 200

#Delete list recipe
@api.route('/list/<int:id>', methods=['PUT'])
def delete_list(id):
    remove_list = ShoppingList.query.filter_by(id=id).first()
    print("You sure you want to delete list recipe #:" + id)
    db.session.delete(remove_list)
    db.session.commit()
    return jsonify(remove_list.serialize()), 200










    