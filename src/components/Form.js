export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) {
  function handleChange(e) {
    // console.log(e.target.value)
    if (e.target.value !== "") {
      setInputText(e.target.value);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        id: Math.random() * 1000,
        completed: false,
      },
    ]);
    setInputText("");
  }

  function handleSelect(e) {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input
        type="text"
        className="input"
        onChange={handleChange}
        value={inputText}
      />
      <button onClick={handleClick} className="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="13px"
          width="20px"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </button>
      <select onChange={handleSelect} name="todo" id="todo" className="select">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </form>
  );
}
