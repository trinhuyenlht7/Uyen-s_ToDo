const ListToDo = (props) => {
  const { todoList, DeleteTodo } = props;

  const handleOnClickDelete = (id) => {
    DeleteTodo(id);
  };

  return (
    <div className="todo-list">
      {todoList.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <button onClick={() => handleOnClickDelete(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ListToDo;
