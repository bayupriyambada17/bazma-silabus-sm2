const { getById, todoQuestion } = require('./todos');

const todoId = async () => {
  const id = await todoQuestion("Masukan id todo: ");
  getById(id);
};

todoId();
