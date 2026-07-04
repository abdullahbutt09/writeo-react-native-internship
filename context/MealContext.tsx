import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export interface Meal {
  id: string;
  name: string;
  type: "Breakfast" | "Lunch" | "Dinner";
  notes?: string;
}

interface MealContextType {
  meals: Meal[];
  addMeal: (meal: Omit<Meal, "id">) => void;
  deleteMeal: (id: string) => void;
}

const MealContext = createContext<MealContextType | undefined>(undefined);

export const MealProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [meals, setMeals] = useState<Meal[]>([
    {
      id: "1",
      name: "Pizza",
      type: "Dinner",
      notes: "Extra Cheese",
    },
    {
      id: "2",
      name: "Burger",
      type: "Lunch",
      notes: "Chicken Burger",
    },
    {
      id: "3",
      name: "Omelette",
      type: "Breakfast",
      notes: "2 Eggs",
    },
  ]);

  const addMeal = (meal: Omit<Meal, "id">) => {
    const newMeal: Meal = {
      id: Date.now().toString(),
      ...meal,
    };

    setMeals((prev) => [...prev, newMeal]);
  };


  const deleteMeal = (id: string) => {
    setMeals((prev) => prev.filter((meal) => meal.id !== id));
  };

  return (
    <MealContext.Provider
      value={{
        meals,
        addMeal,
        deleteMeal,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMeals = () => {
  const context = useContext(MealContext);

  if (!context) {
    throw new Error("useMeals must be used inside MealProvider");
  }

  return context;
};