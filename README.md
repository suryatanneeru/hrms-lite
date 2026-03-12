# HRMS Lite

HRMS Lite is a simple web-based Human Resource Management System built for managing employees and tracking daily attendance.

## Tech Stack

Backend

* Python
* FastAPI
* SQLAlchemy
* SQLite

Frontend

* React
* Axios

## Features

* Add employee
* View employee list
* Delete employee
* Mark attendance
* View attendance records

## Running the Backend

Go to backend folder

cd backend

Install dependencies

pip install fastapi uvicorn sqlalchemy

Run server

uvicorn app.main:app --reload --port 8001

Backend runs on

http://127.0.0.1:8001

API Docs

http://127.0.0.1:8001/docs

## Running the Frontend

Go to frontend folder

cd frontend

Install packages

npm install

Start React app

npm start

Frontend runs on

http://localhost:3000
