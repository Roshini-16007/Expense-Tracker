# 💜 Expense Tracker

A full-stack web application for tracking and managing personal expenses.

## 📌 Project Overview

Expense Tracker allows users to add, view, edit, and delete their expenses. It also calculates the total amount spent and displays the number of expenses.

## 🎯 Objectives

- Track daily expenses easily
- Manage expense details
- Perform CRUD operations
- Calculate total spending
- Provide a simple and responsive user interface

## 🛠️ Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Django
- Django REST Framework

### Database
- SQLite

### Testing & Tools
- Postman
- Git
- GitHub

## ✨ Features

- ➕ Add new expenses
- 📋 View all expenses
- ✏️ Edit expenses
- 🗑️ Delete expenses
- 💰 Calculate total spending
- 🧾 Display expense count
- 📱 Responsive design

## 🔄 CRUD Operations

| Operation | Method | API Endpoint |
|---|---|---|
| Create | POST | `/api/expenses/` |
| Read | GET | `/api/expenses/` |
| Update | PUT | `/api/expenses/{id}/` |
| Delete | DELETE | `/api/expenses/{id}/` |

## 📁 Project Structure

```text
Expense-Tracker/
│
├── backend/
│   ├── config/
│   ├── expenses/
│   └── manage.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md