# React Background Switcher App

This is a basic React project that allows users to switch the background color of a container using a button interface. Clicking on any button changes the theme (background color) of the container.

## Features

- Simple UI with buttons to switch between different colors.
- Dynamically updates the background color of the container.
- Demonstrates the use of React state with `useState` for managing theme changes.
- Reusable `Button` component for each color button.

## Project Structure

```
.
├── src
│   ├── App.js          # Main component where the theme is managed
│   ├── Button.js       # Reusable Button component
│   └── index.js        # Entry point of the React app
└── README.md           # Project documentation
```

## Components

1. **App Component:** The root component that manages the theme (background color) using React's `useState` hook. It renders the color buttons and updates the container's background color.

2. **Button Component:** This component receives the color and the action to set the theme as props. When clicked, it triggers the theme change.

## Usage

1. Clone the repository.
2. Install dependencies:
```
npm install
```
3. Run the project:
```
npm run dev
```

## Dependencies

- React
- React DOM
