import React, { createContext, Dispatch, useReducer, useContext } from "react";

export type Modal = {
  addModal: boolean;
};

const ModalStateContext = createContext<Modal | undefined>(undefined);

type Action = { type: "TOGGLE_ADDMODAL" };

type ModalDispatch = Dispatch<Action>;

const ModalDispatchContext = createContext<ModalDispatch | undefined>(
  undefined
);

function modalReducer(state: Modal, action: Action): Modal {
  switch (action.type) {
    case "TOGGLE_ADDMODAL":
      return {
        ...state,
        addModal: !state.addModal
      };
    default:
      return state;
  }
}

export function ModalContextProVider({
  children
}: {
  children: React.ReactNode;
}) {
  const [modals, dispatch] = useReducer(modalReducer, {
    addModal: false
  });
  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalStateContext.Provider value={modals}>
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
}

export function useModalState() {
  const state = useContext(ModalStateContext);
  if (!state) throw new Error("ModalProvider not found!");
  return state;
}

export function useModalDispatch() {
  const dispatch = useContext(ModalDispatchContext);
  if (!dispatch) throw new Error("ModalProvider not found");
  return dispatch;
}
