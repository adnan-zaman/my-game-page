export function TextField(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e, props.index)}
      ></input>
    </>
  );
}
