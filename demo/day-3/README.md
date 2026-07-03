# 🍽️ Day 3 – Meal Tracker (React Native)

## 📌 Overview

Today, I built a simple **Meal Tracker** application using **React Native** and **TypeScript**. The application allows users to:

- Add a meal
- Select a meal type (Breakfast, Lunch, Dinner)
- Display meals in a list
- Delete meals
- Show an empty state when no meals exist

While building this project, I focused on understanding **React state management**, **JavaScript array methods**, **spread operator behavior**, **FlatList**, and how React updates UI based on state changes.

---

# 🚀 Features Implemented

- ✅ Add a new meal
- ✅ Input validation
- ✅ Trim whitespace before saving
- ✅ Select meal type
- ✅ Render meals using FlatList
- ✅ Delete meals
- ✅ Empty list UI
- ✅ Component-based architecture
- ✅ TypeScript type safety

---

# 📂 Project Structure

- Header Component
- InputField Component
- MealTypeOption Component
- PrimaryButton Component
- MealItem Component
- Main Screen (Index)

Each UI element was separated into reusable components instead of placing everything inside a single file.

---

# 🧠 Concepts Learned

---

## 1. SafeAreaView

### What it is

`SafeAreaView` ensures that the application's content is displayed within the device's safe area.

### Why we use it

Modern phones contain:

- Camera notch
- Dynamic Island
- Status bar
- Rounded corners
- Gesture navigation bar

Without `SafeAreaView`, UI elements may overlap these system areas.

```tsx
<SafeAreaView style={styles.container}>
```

---

## 2. TypeScript Union Types

Instead of allowing any string, meal type is restricted.

```ts
type Meal = {
  id: string;
  name: string;
  type: "Breakfast" | "Lunch" | "Dinner";
};
```

Only these three values are allowed.

---

## 3. useState with Generic Types

```ts
const [meals, setMeals] = useState<Meal[]>([]);
```

Meaning:

- meals is an array
- Every item inside the array must follow the Meal type

---

## 4. Input Validation

Before adding a meal:

```ts
if (!mealName.trim() || mealType === "") {
    return;
}
```

Validation ensures:

- Meal name is not empty
- Meal name isn't only spaces
- Meal type is selected

---

## 5. JavaScript trim()

`trim()` removes whitespace from the beginning and end of a string.

Example:

```ts
"   Pizza   ".trim()
```

Result

```text
Pizza
```

If the input contains only spaces:

```ts
"      ".trim()
```

Result

```text
""
```

This prevents users from adding empty values.

---

## 6. Creating New Objects

Each meal is created as an object.

```ts
const newMeal = {
    id: Date.now().toString(),
    name: mealName.trim(),
    type: mealType,
};
```

Every meal receives a unique id.

---

# ⭐ Spread Operator (...)

One of the most important concepts learned today.

## Existing meals

```ts
[
    meal1,
    meal2
]
```

Adding a new meal:

```ts
return [...prevMeals, newMeal];
```

Result

```ts
[
    meal1,
    meal2,
    newMeal
]
```

The spread operator expands all elements of the previous array and creates a brand new array.

---

## Understanding prevMeals vs ...prevMeals

### prevMeals

Returns the entire array.

```ts
prevMeals
```

Example

```ts
[
    meal1,
    meal2
]
```

---

### ...prevMeals

Returns every element individually.

```ts
...prevMeals
```

Equivalent to:

```ts
meal1,
meal2
```

It expands the array.

---

## Why Spread Operator Matters

Without spread:

```ts
return [prevMeals, newMeal];
```

Result

```ts
[
    [
        meal1,
        meal2
    ],
    newMeal
]
```

The first element becomes another array.

This creates a nested array.

---

Correct approach:

```ts
return [...prevMeals, newMeal];
```

Result

```ts
[
    meal1,
    meal2,
    newMeal
]
```

The structure remains correct.

---

## Practical Experiment

To understand this concept better, I experimented with the data structure.

Example:

```ts
setStructure([prevMeals, newMeal]);
```

I also used `console.log()` to inspect how the array structure changes when using and not using the spread operator.

This helped me understand why the spread operator is necessary when updating array state.

---

# React Functional State Updates

Instead of writing:

```ts
setMeals(newArray);
```

I learned to use

```ts
setMeals((prevMeals) => {
    return [...prevMeals, newMeal];
});
```

Benefits:

- Always receives the latest state
- Prevents stale state issues
- Recommended when the next state depends on the previous state

---

# Deleting Items with filter()

Deleting meals:

```ts
const deleteMeal = (id: string) => {
    setMeals((prevMeals) => {
        return prevMeals.filter(
            (meal) => meal.id !== id
        );
    });
};
```

---

## Understanding filter()

`filter()` loops through every item in the array.

For every meal:

```ts
meal.id !== id
```

If result is:

- true → keep the meal
- false → exclude the meal

Example

Before

```text
Pizza
Burger
Pasta
```

Delete Burger

After

```text
Pizza
Pasta
```

Important:

`filter()` does **not modify** the original array.

It creates a brand new filtered array.

---

# FlatList

Instead of manually rendering every meal,

```tsx
<MealItem />
<MealItem />
<MealItem />
```

FlatList automatically renders every object inside the array.

```tsx
<FlatList
    data={meals}
    renderItem={({ item }) => (
        <MealItem
            name={item.name}
            type={item.type}
        />
    )}
/>
```

---

## renderItem

`renderItem` tells FlatList how each object should be displayed.

For every meal:

```ts
item
```

represents one object.

Example

```ts
{
    id: "1",
    name: "Pizza",
    type: "Lunch"
}
```

It renders

```tsx
<MealItem
    name="Pizza"
    type="Lunch"
/>
```

---

## keyExtractor

Every rendered item requires a unique key.

```tsx
keyExtractor={(item) => item.id}
```

React uses these keys to efficiently update the UI.

---

## ListEmptyComponent

When the array becomes empty:

```ts
[]
```

FlatList automatically renders

```tsx
<View>
    No meals yet
</View>
```

instead of rendering list items.

---

# Component-Based Development

Instead of writing everything inside one screen, I separated the application into reusable components.

Benefits:

- Cleaner code
- Better organization
- Easier maintenance
- Better reusability

---

# Debugging Techniques Used

During development I frequently used:

```ts
console.log()
```

to inspect:

- Previous state
- Updated state
- Array structure
- Spread operator behavior
- React state updates

This helped me understand how React manages data internally.

---

# Key Learnings

- SafeAreaView
- Component-based architecture
- TypeScript types
- Union types
- useState with generics
- Input validation
- trim()
- Creating typed objects
- Functional state updates
- Spread operator (...)
- Difference between `prevMeals` and `...prevMeals`
- Array structure
- Why nested arrays occur without spread
- filter()
- Immutable state updates
- FlatList
- renderItem
- keyExtractor
- ListEmptyComponent
- Debugging using console.log()

---

# Reflection

Today was less about building UI and more about understanding how data flows inside a React application.

The biggest takeaway was learning how React state should be updated immutably using the spread operator and array methods like `filter()`. I also gained a much deeper understanding of how `FlatList` renders data efficiently and why maintaining the correct array structure is essential for predictable React behavior.

Overall, this project strengthened my understanding of React state management, JavaScript array operations, and writing reusable, maintainable React Native components.