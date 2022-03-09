import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  type: string;
  value: number;
  id: string;
  placeholder: string;
  onChange: any;
  setValue: any;
};

const Input = (props: Props) => {
  let value: string = props.value?.toString();
  const changeUP = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.id === "alturaInput") {
      let regex = new RegExp("([0-9]{1})([0-9]{2})", "g");

      value = event.target.value.replace(regex, "$1.$2");
      props.setValue(Number(value).toFixed(2));
    }
  };

  return (
    <div className="inputArea">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={value || ""}
        onChange={props.onChange}
        placeholder={props.placeholder}
        min="0"
        onBlur={changeUP}
      />
    </div>
  );
};

export default Input;
