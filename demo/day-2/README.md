# 📅 Learning Summary

## React Native Components

Today I learned how to create reusable React Native components by separating the UI into smaller pieces:

* `Header` – Displays the page title and subtitle.
* `Card` – A reusable container that provides consistent styling (padding, border radius, shadow).
* `InputField` – A reusable wrapper around `TextInput`.
* `PrimaryButton` – A reusable button component built with `Pressable`.

This approach keeps the code cleaner, easier to maintain, and promotes reusability.

---

## Props

I learned that **props** are used to pass data and functions from a parent component to a child component.

Examples:

* `title`
* `placeholder`
* `value`
* `keyboardType`
* `onPress`
* `onChangeText`

Every component receives the props it needs and uses them to render dynamic content.

---

## The `children` Prop

I learned that `children` is a special React prop.

Example:

```tsx
<Card>
  <Text>Hello</Text>
</Card>
```

React automatically converts this to something similar to:

```tsx
<Card children={<Text>Hello</Text>} />
```

Inside the `Card` component:

```tsx
<View style={styles.card}>
  {children}
</View>
```

Whatever is placed between `<Card>...</Card>` becomes the `children` prop.

This allows the `Card` component to wrap any UI instead of being limited to specific content.

---

## `ReactNode`

I learned that `ReactNode` is the type used for `children`.

```tsx
children: ReactNode;
```

`ReactNode` represents anything React can render, including:

* JSX elements
* Text
* Numbers
* Fragments (`<>...</>`)
* Arrays of elements
* `null`

Using `ReactNode` makes components much more flexible.

---

## TypeScript Function Types

I learned how function types are written in TypeScript.

### Button

```tsx
onPress: () => void;
```

Meaning:

* accepts **no parameters**
* returns **nothing**

---

### TextInput

```tsx
onChangeText: (text: string) => void;
```

Meaning:

* accepts one parameter called `text`
* `text` is a string
* returns nothing

---

## Controlled Components

I learned that `TextInput` should usually be a **controlled component**.

```tsx
<InputField
    value={name}
    onChangeText={setName}
/>
```

The input value always comes from React state.

The UI and state remain synchronized.

---

## How `onChangeText` Works

This was the biggest concept I learned today.

When I write:

```tsx
onChangeText={setName}
```

I am **not calling** `setName`.

Instead, I am passing the function to React Native.

Whenever the user types, React Native automatically calls it.

Example:

User types:

```
A
```

React Native internally does something similar to:

```tsx
setName("A");
```

Then React:

1. Updates the state.
2. Marks the component for re-rendering.
3. Runs the component again.
4. Provides the updated state.

So after typing `"A"`:

```tsx
const [name, setName] = useState("");
```

does **not** become an empty string again.

React remembers the previous state and provides:

```tsx
name === "A"
```

During the next render:

```tsx
<InputField
    value={name}
/>
```

becomes

```tsx
<InputField
    value="A"
/>
```

which updates the UI.

The complete flow is:

```
User types
      ↓
onChangeText fires
      ↓
setName("A")
      ↓
React updates state
      ↓
Component re-renders
      ↓
name becomes "A"
      ↓
value={name}
      ↓
TextInput displays "A"
```

This helped me understand that **React state drives the UI**, not the other way around.

---

## Why We Pass `setName`

I also learned why this works:

```tsx
onChangeText={setName}
```

because `setName` already has the correct function signature:

```tsx
(text: string) => void
```

which matches what `TextInput` expects.

---

## Important Takeaways

* Build reusable components instead of repeating UI.
* Props allow parent components to communicate with child components.
* `children` is a special prop used to wrap any content.
* `ReactNode` represents anything React can render.
* `value` makes a `TextInput` controlled.
* `onChangeText` updates React state on every keystroke.
* Calling `setState` (`setName`, `setEmail`, etc.) updates the state and automatically triggers a re-render.
* React remembers state between renders using `useState`.
* The UI is always rendered from the latest state.