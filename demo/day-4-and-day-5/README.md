# 📅 Day 4 and Day 5 - Navigation & App Flow (React Native + Expo Router)

Today I learned how navigation works in React Native using **Expo Router** and how to share data between multiple screens using **React Context API**.

---

# 📚 Topics Covered

- Expo Router
- File Based Routing
- Dynamic Routes
- Route Parameters
- Navigation
- React Context API
- Custom Hooks
- Shared State
- Object Spread Operator
- TypeScript Interfaces
- Omit Utility Type

---

# 🗂 Project Structure

```
app/
│
├── _layout.tsx
├── index.tsx          // Home Screen
├── meals.tsx          // Meal List Screen
│
└── meal/
    └── [id].tsx       // Meal Detail Screen

context/
└── MealContext.tsx

components/
├── Header.tsx
├── MealItem.tsx
├── InputField.tsx
├── PrimaryButton.tsx
└── MealTypeOption.tsx
```

---

# 🏠 Screen Flow

```
Home

      │

      ▼

Meal List

      │

Tap Meal

      ▼

Meal Detail

      │

Back

      ▼

Meal List
```

---

# 🚀 Expo Router

Expo Router automatically creates routes from files inside the `app` folder.

Example:

```
app/index.tsx
```

becomes

```
/
```

Example

```
app/meals.tsx
```

becomes

```
/meals
```

Example

```
app/profile.tsx
```

becomes

```
/profile
```

This is called **File Based Routing**.

---

# 📂 Dynamic Routes

A file like

```
app/meal/[id].tsx
```

is called a **Dynamic Route**.

Instead of creating

```
pizza.tsx
burger.tsx
omelette.tsx
```

one screen can handle every meal.

Example URLs

```
/meal/1

/meal/2

/meal/10
```

The value inside `[id]` changes automatically.

---

# 🧭 useRouter()

```
const router = useRouter();
```

`useRouter()` returns a router object used for navigation.

Common methods

## Navigate

```tsx
router.push("/meals");
```

Moves to another screen.

---

## Go Back

```tsx
router.back();
```

Returns to the previous screen.

---

## Navigate with Parameters

```tsx
router.push({
    pathname: "/meal/[id]",
    params: {
        id: item.id,
    },
});
```

If

```tsx
item.id = "2";
```

The final route becomes

```
/meal/2
```

---

# 🔍 Reading Route Parameters

Inside

```
meal/[id].tsx
```

```tsx
const { id } = useLocalSearchParams();
```

If the current URL is

```
/meal/2
```

then

```tsx
id === "2";
```

---

# 🍔 Finding the Selected Meal

```tsx
const meal = meals.find((m) => m.id === id);
```

Example

```tsx
[
  {
    id: "1",
    name: "Pizza",
  },
  {
    id: "2",
    name: "Burger",
  }
]
```

If

```
id = "2"
```

Result

```tsx
{
    id:"2",
    name:"Burger"
}
```

---

# 🌍 React Context API

Context API allows multiple components to share the same data without passing props manually.

Instead of

```
Home

↓

Meals

↓

Meal Detail
```

passing props again and again,

Context provides a shared storage.

```
Meal Context

├── meals
├── addMeal()
└── deleteMeal()
```

Every screen can access it.

---

# 🏗 createContext()

```tsx
const MealContext = createContext<
MealContextType | undefined
>(undefined);
```

Creates a Context.

Initially

```
MealContext

↓

undefined
```

Later, the Provider fills it with data.

---

# 📦 Provider

```
<MealProvider>

    <Stack />

</MealProvider>
```

The Provider shares data with every child component.

Think of it like

```
Provider

↓

Home

Meals

Meal Detail
```

All screens can access the same data.

---

# 👶 children

Everything inside a component becomes `children`.

Example

```tsx
<Card>

    <Text>Hello</Text>

</Card>
```

React converts it into

```tsx
<Card
    children={
        <Text>Hello</Text>
    }
/>
```

In this project

```tsx
<MealProvider>

    <Stack />

</MealProvider>
```

means

```tsx
children = <Stack />
```

---

# ⚡ useState()

The shared meal state is stored inside the Provider.

```tsx
const [meals, setMeals] = useState<Meal[]>([]);
```

Since it is inside the Provider,

every screen can use the same meals.

---

# ➕ Adding Meals

```tsx
addMeal({
    name: "Pizza",
    type: "Dinner",
    notes: "Extra Cheese",
});
```

The Provider automatically generates an id.

```tsx
const newMeal = {
    id: Date.now().toString(),
    ...meal,
};
```

Result

```tsx
{
    id:"123456",
    name:"Pizza",
    type:"Dinner",
    notes:"Extra Cheese"
}
```

---

# 🌟 Spread Operator

The spread operator copies properties.

Example

```tsx
const user = {
    name:"Abdullah",
    age:21,
};

const copy = {
    city:"Lahore",
    ...user,
};
```

Result

```tsx
{
    city:"Lahore",
    name:"Abdullah",
    age:21
}
```

---

# ❌ Deleting Meals

```tsx
setMeals((prev) =>
    prev.filter((meal) => meal.id !== id)
);
```

Creates a new array without the selected meal.

---

# 🎯 Omit Utility Type

```tsx
Omit<Meal, "id">
```

Removes the `id` property.

Original

```tsx
{
    id:string;
    name:string;
    type:string;
    notes?:string;
}
```

After Omit

```tsx
{
    name:string;
    type:string;
    notes?:string;
}
```

The Provider creates the id automatically.

---

# 🎣 Custom Hook

```tsx
const { meals, addMeal, deleteMeal } = useMeals();
```

Instead of writing

```tsx
const context = useContext(MealContext);
```

everywhere,

I created a reusable custom hook.

---

# 🛡 Safety Check

```tsx
if (!context) {
    throw new Error(
        "useMeals must be used inside MealProvider"
    );
}
```

This prevents using the Context outside the Provider.

---

# 🔄 Complete App Flow

```
App Starts

        │

        ▼

MealProvider

        │

Creates Shared State

        │

Shares

Meals

Add Meal

Delete Meal

        │

        ▼

Home Screen

        │

router.push("/meals")

        ▼

Meals Screen

        │

Tap Meal

        ▼

router.push("/meal/[id]")

        │

        ▼

Meal Detail

        │

router.back()

        ▼

Meals
```

---

# 🧠 Key Takeaways

- Learned how Expo Router works.
- Understood File Based Routing.
- Learned Dynamic Routes using `[id].tsx`.
- Navigated between multiple screens.
- Passed route parameters.
- Read parameters using `useLocalSearchParams()`.
- Used React Context API for shared state.
- Created a reusable Custom Hook.
- Understood `children` and Provider.
- Used `useState` inside Context.
- Learned the Object Spread Operator.
- Learned TypeScript Interfaces.
- Learned the `Omit<>` Utility Type.
- Built a complete 3-screen application using shared state and navigation.

---

# ✅ Day 4 and Day 5 Completed!

Successfully built a multi-screen Meal Tracker application using **Expo Router**, **React Context API**, and **TypeScript**, while maintaining shared state across screens and implementing dynamic navigation.