# Day 1 Summary

## Project: Welcome Screen App

### Overview

Today, I built a simple Expo React Native application as part of my React Native internship.

The application consists of a welcome screen where users can enter their name into a text input field. After pressing the **Continue** button, the app displays a personalized welcome message.

### Features Implemented

- Welcome screen UI
- Name input using `TextInput`
- Continue button using `Pressable`
- State management with `useState`
- Conditional rendering of the greeting message
- Input validation (minimum 5 characters)
- Responsive UI styled with `StyleSheet`

### Concepts Learned

- Creating functional components
- Managing state with `useState`
- Handling user input with `TextInput`
- Using `Pressable` for button interactions
- Conditional rendering in React Native
- Building layouts using `View`, `Text`, and `StyleSheet`

### Problem Solved

While implementing the project, I wanted to clear the input field after the user pressed the **Continue** button. Initially, I used only the `username` state for both the input field and the greeting message. However, clearing the input using `setUsername("")` also removed the name from the greeting because both were using the same state.

To solve this, I introduced a third state (`isSubmit`) to store the submitted username. This allowed me to clear the input field while still displaying the greeting with the submitted name. This experience helped me understand the importance of separating temporary input state from submitted/display state in React.

### Outcome

This project helped me understand the fundamentals of React Native, including state management, event handling, controlled components, conditional rendering, input validation, and basic UI design using Expo. It also gave me practical experience in debugging state-related issues and designing a cleaner state management approach.