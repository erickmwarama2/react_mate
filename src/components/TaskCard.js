export const TaskCard = ({ id, name, handleDelete }) => {
  return (
    <li key={id}>
      <span>
        {id} - {name}
      </span>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};
