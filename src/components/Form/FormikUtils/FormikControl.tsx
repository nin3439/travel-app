import React from 'react';
import { Input } from './input';
interface Iprops {
  placeholder?: string;
  control: string;
  name: string;
  type: string;
  className: string;
  onChange?: (e: KeyboardEvent) => void;
}
export const FormikControl: React.FC<Iprops> = (props) => {
  const { control, ...rest } = props;
  return <Input {...rest} />;
};
