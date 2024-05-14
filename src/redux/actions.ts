import { 
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
 } from './actionTypes';

type AddActionType = typeof ADD_TODO;
type EditActionType = typeof EDIT_TODO;
type RemoveActionType = typeof REMOVE_TODO;
type MarkCompletedActionType = typeof MARK_COMPLETED;
type MarkIncompleteActionType = typeof MARK_INCOMPLETE;
type FilterTodosActionType = typeof FILTER_TODOS;
type MarkAllCompletedActionType = typeof MARK_ALL_COMPLETED;
type UpdateSearchTermActionType = typeof UPDATE_SEARCH_TERM;


interface AddTodoAction {
  type: AddActionType;
  payload: {
    text: string;
  };
  [id: string]: any;
}

interface EditTodoAction {
  type: EditActionType;
  payload: {
    text: string;
  };
  [id: string]: any;
}

interface RemoveTodoAction {
  type: RemoveActionType;
  payload: {
    id: string;
  };
  [id: string]: any;
}
interface MarkCompletedAction {
  type: MarkCompletedActionType;
  payload: {
    id: string;
  };
  [id: string]: any;
}

interface MarkIncompleteAction {
  type: MarkIncompleteActionType;
  payload: {
    id: string;
  };
  [id: string]: any;
}

interface FilterTodosAction {
  type: FilterTodosActionType;
  payload: {
    filter: string;
  };
  [id: string]: any;
}

interface MarkAllCompletedAction {
  type: MarkAllCompletedActionType;
  [id: string]: any;
}

interface UpdateSearchTermAction {
  type: UpdateSearchTermActionType;
  payload: {
    searchTerm: string;
  };
  [id: string]: any;
}


export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { text },
});
 
export const editTodo = (index: number, newText: string) => ({
  type: EDIT_TODO,
  payload: { index, newText },
});

 export const removeTodo = (id: string): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: { id },
});


export const markCompleted = (id: string): MarkCompletedAction => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id: string): MarkIncompleteAction => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTodos = (filter: string): FilterTodosAction => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = (): MarkAllCompletedAction => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm: string): UpdateSearchTermAction => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
