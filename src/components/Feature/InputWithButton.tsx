import { useState } from "react";
import { isPropertySignature } from "typescript";
import Button from "../UI/Button";
import Input from "../UI/Input";

type InputWithButtonProps = {
  label: string;
  btnName: string;
  handleClick: (value: number) => void;
};

const InputWithButton = (props: InputWithButtonProps) => {
  const [enteredValue, setEnteredValue] = useState("");
  return (
    <div>
      <label>{props.label}</label>
      <Input
        value={String(enteredValue)}
        handleChange={(event) => {
          setEnteredValue(event.target.value);
        }}
      ></Input>
      <Button
        name={props.btnName}
        handleClick={() => {
          // depositMoney(Number(enteredValue));
          props.handleClick(Number(enteredValue));
          setEnteredValue("");
        }}
      ></Button>
    </div>
  );
};

export default InputWithButton;
