import styled from "./input.module.css"

function Input(props) {
  return (
    <div className={styled.inputWrapper}>
      <label>{props.label}</label>
      <input name={props.name} onChange={props.handleChange} type={props.type}  placeholder={props.placeholder}/>
    </div>
  );
}

export default Input;
