const style = {
  background: "aquamarine",
  margin: "1px",
  border: "2px solid",
  fontSize: "24px",
  cursor: "pointer",
  outline: "none"
}

function Square({ value, onClick }) {
  return <button style={style} onClick={onClick}> {value} </button>;
}

export default Square;
