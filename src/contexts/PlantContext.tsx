import React, { createContext, Dispatch, useReducer, useContext } from "react";

export type Plant = {
  id: number;
  name: string;
  waterDay: number;
  isWait: boolean;
};

type PlantState = Plant[];

const PlantStateContext = createContext<PlantState | undefined>(undefined);

type Action =
  | { type: "CREATE"; name: string; waterDay: number }
  | { type: "REMOVE"; id: number }
  | { type: "WATERING"; id: number };

type PlantDispatch = Dispatch<Action>;
const PlantDispatchContext = createContext<PlantDispatch | undefined>(
  undefined
);

function plantReducer(state: PlantState, action: Action): PlantState {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(0, ...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        name: action.name,
        waterDay: action.waterDay,
        isWait: false
      });
    case "REMOVE":
      return state.filter(plant => plant.id !== action.id);
    case "WATERING":
      return state;
    default:
      return state;
  }
}

export function PlantContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [plants, dispatch] = useReducer(plantReducer, [
    {
      id: 1,
      name: "장미꽃",
      waterDay: 3,
      isWait: false
    },
    {
      id: 2,
      name: "선인장",
      waterDay: 14,
      isWait: false
    }
  ]);

  return (
    <PlantDispatchContext.Provider value={dispatch}>
      <PlantStateContext.Provider value={plants}>
        {children}
      </PlantStateContext.Provider>
    </PlantDispatchContext.Provider>
  );
}

export function usePlantState() {
  const state = useContext(PlantStateContext);
  if (!state) throw new Error("PlantProvider not found!");
  return state;
}

export function usePlantDispatch() {
  const dispatch = useContext(PlantDispatchContext);
  if (!dispatch) throw new Error("PlantProvider not found");
  return dispatch;
}
