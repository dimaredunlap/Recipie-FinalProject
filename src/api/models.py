
import os
import sys
from sqlalchemy import Column, ForeignKey, String, Boolean,Text, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    
    id = Column(Integer, primary_key=True)
    username = Column(String(30), unique=True,nullable=False)
    password = Column(String(20), nullable=False)
    email = Column(String, unique=True)
    
    def serialize(self):
        return{
            "id": self.id,
            "username": self.username,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "email": self.email
        }
        
class Recipe(db.Model):
    
    id = Column(Integer, primary_key=True)
    user = relationship(User)
    user_id = Column(Integer, ForeignKey('user.id'))
    title = Column(String, nullable=False, unique=True)
    description = Column(String, nullable=False)
    servings = Column(String, nullable=False, unique=True)
    prep_time = Column(Integer, nullable=False)
    cook_time = Column(Integer, nullable=False)
    total_time = Column(Integer, nullable=False)
    ingredients = Column(String, nullable=False, unique=True)
    directions = Column(String, nullable=False, unique=True)
    category = Column(String, nullable=False, unique=True)
    credit = Column(String)
    
    def serialize(self):
        return{
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "servings": self.servings,
            "prep_time": self.prep_time,
            "cook_time": self.cook_time,
            "total_time": self.total_time,
            "ingredients": self.ingredients,
            "directions": self.directions,
            "category": self.category,
            "credit": self.credit,
            "user_id": self.user_id,
        }
        
class Favorite(db.Model):
    
    id = Column(Integer, primary_key=True)
    user = relationship(User)
    user_id = Column(Integer, ForeignKey('user.id'))
    recipe = relationship(Recipe)
    recipe_id = Column(Integer, ForeignKey('recipe.id'))
    recipe_name = Column(String)
    
    def serialize(self):
        return{
            "id": self.id,
            "recipe_name": self.recipe_name,
            "recipe-id": self.recipe_id
        }
        
class ShoppingList(db.Model):
    
    id = Column(Integer, primary_key=True)
    user = relationship(User)
    user_id = Column(Integer, ForeignKey('user.id'))
    item = Column(String)

    def serialize(self):
        return{
            "id": self.id,
            "item": self.item,
            
        }
