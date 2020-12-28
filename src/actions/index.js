const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addToDo = (message) => ({
  type: ADD_TODO,
  message,
  id: Math.random(),
});

export const deleteToDo = (id) => ({
  type: DELETE_TODO,
  id,
});
