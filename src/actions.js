export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const INCREMENT = "INCREMENT";
export const CHANGED = "CHANGED";

export const removeItem = id => {
    return { type: REMOVE, payload: { id } };
};

export const addItem = () => {
    return { type: ADD };
};