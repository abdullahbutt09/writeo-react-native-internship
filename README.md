# 🍽️ Mini Meal Tracker

A React Native application developed during **Week 1 of my React Native Internship Onboarding at WriteO**.

The purpose of this project was to progressively learn React Native fundamentals by building a small mobile application over five days. Each day introduced new concepts that were applied to the same project, allowing the application to evolve from basic UI components into a complete multi-screen meal tracking app.

---

## 📖 About the Internship

This project was completed as part of the **WriteO React Native Internship Onboarding Program**.

During the first week, the focus was not on working with the main WriteO codebase but on learning the React Native ecosystem, understanding mobile application development, and implementing features through daily practical tasks.

The onboarding covered:

- React Native fundamentals
- Expo
- Mobile UI development
- Component architecture
- State management
- Navigation
- TypeScript
- Project organization
- Writing clean and reusable code

---

# 🚀 Final Application

The completed application allows users to:

- 🏠 Navigate through multiple screens
- ➕ Add new meals
- 🍳 Select meal types (Breakfast, Lunch, Dinner)
- 📝 Add optional meal notes
- 📋 View all meals
- 📄 Open a detailed meal page
- 🗑️ Delete meals
- 📱 Experience a clean mobile-friendly interface

---

# 📅 Internship Progress

## ✅ Day 1 — React Native Setup & Fundamentals

### Learning

- Introduction to React Native
- Understanding Expo
- Difference between React and React Native
- Core React Native components
- Running an Expo application

### Implemented

Created my first Expo application containing:

- Welcome screen
- Text input
- Button
- Dynamic welcome message using user input

---

## ✅ Day 2 — Components & Styling

### Learning

- Reusable Components
- Props
- StyleSheet
- Folder Structure
- Mobile UI Design

### Implemented

Created reusable UI components:

- Header
- Card
- InputField
- PrimaryButton

Built a simple profile screen using reusable components while learning component composition and prop passing.

---

## ✅ Day 3 — State, Forms & Lists

### Learning

- useState
- Form handling
- FlatList
- Rendering dynamic lists
- Empty states
- Add & Delete interactions

### Implemented

Developed the Meal List screen where users can:

- Add meals
- Select meal type
- Display meals using FlatList
- Delete meals
- Display an empty state when no meals exist

This was my first experience managing application state using React hooks.

---

## ✅ Day 4 — Navigation & App Flow

### Learning

- Expo Router
- File-based Routing
- Dynamic Routes
- Route Parameters
- Screen Navigation

### Implemented

Created a multi-screen application consisting of:

- Home Screen
- Meal List Screen
- Meal Detail Screen

Implemented navigation flow:

```
Home
   │
   ▼
Meal List
   │
Select Meal
   ▼
Meal Detail
```

Used **Expo Router** to navigate between screens and pass meal IDs to the detail screen.

---

## ✅ Day 5 — Mini Meal Tracker

### Learning

- React Context API
- Global State Management
- Custom Hooks
- Shared State
- Better Project Organization

### Implemented

Completed the Mini Meal Tracker application by adding:

- React Context API
- Global meal state
- Shared data across all screens
- Optional meal notes
- Dynamic meal detail screen
- Delete functionality
- Reusable application architecture

---

# 🛠 Technologies Used

- React Native
- Expo
- Expo Router
- TypeScript
- React Context API
- React Hooks
- React Native Safe Area Context
- Expo Vector Icons

---

# 📂 Project Structure

```
app/
│
├── _layout.tsx
├── index.tsx
├── meals.tsx
│
└── meal/
    └── [id].tsx

components/
│
├── Header.tsx
├── InputField.tsx
├── MealItem.tsx
├── MealTypeOption.tsx
└── PrimaryButton.tsx

context/
└── MealContext.tsx
```

---

# 📱 Navigation Flow

```
Home Screen
      │
      ▼
Meal List
      │
Select Meal
      ▼
Meal Detail
      │
Back
      ▼
Meal List
```

---

# 🧠 Concepts Practiced

## React Native

- Functional Components
- JSX
- StyleSheet
- SafeAreaView
- FlatList
- Pressable
- Component Reusability

### React Hooks

- useState
- useContext
- Custom Hooks

### Navigation

- Expo Router
- File-Based Routing
- Dynamic Routes
- Route Parameters
- `router.push()`
- `router.back()`
- `useLocalSearchParams()`

### State Management

- React Context API
- Context Provider
- Shared Global State
- Custom Context Hook

### TypeScript

- Interfaces
- Union Types
- Optional Properties
- Generic Types
- Utility Types (`Omit`)
- Typed Props

### JavaScript

- Spread Operator
- Array Methods
- `find()`
- `filter()`
- Destructuring
- Arrow Functions

---

# 💡 Key Takeaways

This onboarding project helped me understand how a React Native application is structured and how multiple concepts work together to build a complete mobile application.

Some of the most valuable topics I learned include:

- Building reusable UI components
- Managing local and global state
- Organizing scalable project folders
- Navigating between multiple screens
- Passing data using dynamic routes
- Sharing data across the application with Context API
- Writing type-safe React Native code using TypeScript

---

# 🎯 Internship Outcome

By the end of Week 1, I successfully transformed a simple React Native application into a complete **Mini Meal Tracker**, applying everything learned throughout the onboarding process.

This project strengthened my understanding of modern React Native development and provided hands-on experience with building structured, reusable, and scalable mobile applications.

---

## 👨‍💻 Author

**Abdullah**

React & React Native Developer

Completed as part of the **WriteO React Native Internship – Week 1 Onboarding**.