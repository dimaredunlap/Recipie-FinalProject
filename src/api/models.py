
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean,Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    recipe = db.relationship('Recipes', backref="User", lazy="true")
    favorite_meal = db.relationship("Favorite_meal", backref="User", lazy="true")
    ingridient_list = db.relationship("Ingredient_list", backref="Recipes", lazy="true")


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        } 

class Recipes(db.model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), unique=True, nullable=False)
    number_of_servings = db.Column(db.Intiger, nullable=False)
    ingredients = db.Column(Text, nullable=False)
    directions = db.Column(Text, nullable=False)
    credit = db.Column(Intiger, ForeignKey('user.id'))
    favorite_meal = db.relationship("Favorite_meal", backref="Recipes", lazy="true")
    ingridient_list = db.relationship("Ingredient_list", backref="Recipes", lazy="true")
    

    def serialize(self):
        user = User.query.get(self.user_id)
        return{
            "id": self.id,
            "tittle": self.tittle,
            "number_of_serving": self.number_of_servings,
            "ingredients": self.ingredients,
            "directions": self.ingredients,
            "credit": self.credit
        }

class Favorite_meal(self):
    id= db.Column(Intiger, primary_key=True)
    user = db.Column(Intiger, ForeignKey('user.id'))
    recipe = db.Column(String, ForeignKey("recipes.title"))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def serialize(self):
        user = User.query.get(self.user_id)
        return {
            "id": self.id,
            "user": self.user,
            "recipe": self.recipe,
            "is_active": self.is_active
        }

class ingredient_list(self):
    id = db.Column(Intiger, primary_key=True)
    ingridients = db.Column(Text, ForeignKey("recipes.ingredients"))

    def serialize(self):
        return{
            "ingredient": self.ingridients
        }
