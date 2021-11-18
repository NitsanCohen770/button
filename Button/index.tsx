import * as React from "react";

export interface ButtonProps {
  label: string;
}

export default function ({ label }: ButtonProps) {
  return <button>{label}</button>;
}
