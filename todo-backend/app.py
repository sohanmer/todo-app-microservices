from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, origins='*')

todo_data = []

@app.route("/create-task", methods=["POST", "OPTONS"])
def create_task():
    task = request.get_json(force=True)
    todo_data.append({
        "title": task['title'],
        "description": task['description']
        })
    return jsonify({"message": "Task created successfully"}), 201

@app.route("/get-tasks", methods=['GET', 'OPTONS'])
def get_tasks():
    print(todo_data)
    return todo_data


if __name__ == "__main__":
    # Please do not set debug=True in production
    app.run(host="0.0.0.0", port=2000)