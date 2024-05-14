import {
    ADD_TODO,
    EDIT_TODO,
    REMOVE_TODO,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
  } from './actionTypes';
  

  interface Todo {
    text: string;
    completed: boolean;

  }
  
  interface State {
    todos: Todo[];
    filter: string;
    searchTerm: string;
  }
  
  interface Action {
    type: string;
    payload: any;
  }
  

  const initialState: State = { todos: [], filter: 'ALL', searchTerm: '' };
  

  const todoReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, { text: action.payload.text, completed: false }],
        };

        case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload.index ? { ...todo, text: action.payload.newText } : todo
        ),
      };


      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo, index) => index !== action.payload.id),
        };
  
      case MARK_COMPLETED:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: true } : todo
          ),
        };
  
      case MARK_INCOMPLETE:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: false } : todo
          ),
        };
  
      case FILTER_TODOS:
        return {
          ...state,
          filter: action.payload.filter,
        };
  
      case UPDATE_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.payload.searchTerm,
        };
  
      case MARK_ALL_COMPLETED:
        return {
          ...state,
          todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;
  