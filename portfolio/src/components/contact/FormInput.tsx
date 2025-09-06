import React from "react";

interface FormInputProps {
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
  />
);

export default FormInput;
