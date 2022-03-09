import React from "react";

const useForm = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
  };

  const [value, setValue] = React.useState<any>(undefined);

  return { value, setValue, onChange };
};

export default useForm;
