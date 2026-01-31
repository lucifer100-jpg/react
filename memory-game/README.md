# 🧠 Memory Card Game (React)

A simple and interactive Memory Card Matching Game built using React.
The goal of the game is to flip cards and find matching pairs with the least number of moves.

## 📌 Features

Flip cards to reveal symbols

Match pairs to score points

Move counter to track attempts

Score tracking

Reset / New Game option

Win message when all cards are matched

Responsive design (works on desktop & mobile)

## 🛠️ Technologies Used

React (Functional Components)

React Hooks

useState

useEffect

JavaScript (ES6)

CSS (Flexbox & Grid)

## 📂 Project Structure
src/
│── components/
│   ├── Card.jsx
│   ├── GameHeader.jsx
│   └── WinMessage.jsx
│
│── App.jsx
│── main.jsx
│── index.css
│
└── README.md

## ▶️ How to Run the Project
Prerequisites

Node.js installed on your system

Steps

Open terminal in the project folder

Install dependencies:

npm install


Start the development server:

npm start


Open your browser and go to:

http://localhost:3000

## 🎮 How the Game Works

Cards are shuffled randomly at the start of the game.

Player clicks on a card to flip it.

Two flipped cards are compared:

If they match → they stay visible and score increases.

If they don’t match → they flip back after a short delay.

Each pair attempt increases the move counter.

The game ends when all cards are matched.

## 🧩 Key Concepts Used

State management using useState

Side effects using useEffect to initialize the game

Conditional rendering for:

Card flipping

Matched cards

Win message

CSS Grid for card layout

Reusable components for clean code structure

## 🚀 Possible Improvements (Future Scope)

Add timer

Add difficulty levels

Add flip animations

Store best score using localStorage

Add sound effects

## 👨‍💻 Author

Saksham Koirala
Memory Card Game – React Project
