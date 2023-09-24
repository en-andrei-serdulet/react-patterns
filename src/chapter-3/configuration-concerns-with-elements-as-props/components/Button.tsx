import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
}

const Button = ({ icon }: Props) => {
  return <button>Submit {icon}</button>;
};

export default Button;
