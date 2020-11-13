import { ADD, REMOVE, INCREMENT, CHANGED } from "./actions";

const newState = {
  list: [],
  key: 0,
  addComponent: {
    title: "",
    content: "",
  },
};

const reducer = (state = newState, action) => {
  switch (action.type) {
    case ADD:
      const newState = { ...state };
      newState.list.push({ ...newState.addComponent, id: -1 });
      newState.addComponent = {
        title: "",
        content: "",
      };
      return newState;
    case REMOVE:
      return {
        ...state,
        list: state.list.filter((x) => x.id !== action.payload.id),
      };
    case INCREMENT:
      return {
        ...state,
        key: state.key + 1,
      };
    case CHANGED:
      switch (action.payload.target) {
        case "title":
          return {
            ...state,
            addComponent: {
              ...state.addComponent,
              title: action.payload.event.target.value,
            },
          };
        case "content":
          return {
            ...state,
            addComponent: {
              ...state.addComponent,
              content: action.payload.event.target.value,
            },
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default reducer;
