import { FormEvent } from "react";

interface Props {
  text: string;
  onClick?: (e: FormEvent<HTMLButtonElement>) => any,
  disabled?: boolean;
}

export default function Button({ text, onClick, disabled }: Props) {
  return (
    <button className={"btn btn-primary " + (disabled && "disabled")} onClick={onClick}>
      {text}
    </button>
  );
}

