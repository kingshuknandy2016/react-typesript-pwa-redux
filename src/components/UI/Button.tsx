type ButtonProps = {
  name: string;
  handleClick: () => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

export default Button;
