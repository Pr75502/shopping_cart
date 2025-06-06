# 🛒 React Shopping Cart App

A lightweight, scalable shopping cart application built using **React**, **Context API**, and **useReducer** for global state management. Cart data is persisted with `localStorage`, and the UI is styled using **Tailwind CSS**.

---

## 🧠 Core Concepts & React Hooks

This project focuses on managing global state using the **Context API** and `useReducer` pattern — a great alternative to Redux for smaller to medium apps.

| Hook / API         | Usage Description |
|--------------------|-------------------|
| `createContext`    | Creates a global cart context to share state between components |
| `useReducer`       | Handles cart actions (add, remove, update) with a reducer pattern |
| `useContext`       | Accesses cart state and dispatch globally |
| `useEffect`        | Syncs cart state with `localStorage` on every update |
| `useState`         | (If used in other parts) Handles component-level state |

---

## ✨ Features

- 🛍️ Add items to the cart
- ❌ Remove items from cart
- 🔁 Persistent cart with `localStorage`
- 🧠 Custom `CartContext` + `CartReducer` setup
- ⚡ Fast and responsive UI using Tailwind CSS
- 🧩 Modular file structure

---

## 🛠️ Tech Stack

| Technology     | Purpose                            |
|----------------|------------------------------------|
| **React**      | UI Library                         |
| **Context API**| Global state management            |
| **useReducer** | Custom reducer logic               |
| **localStorage**| Persist cart data across refresh  |
| **Tailwind CSS**| Fast styling                      |
| **JavaScript** | App logic and hooks                |

---

## 📁 Project Structure

