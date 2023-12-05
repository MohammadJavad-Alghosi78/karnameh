import { ChangeEvent, HTMLAttributes } from "react";
import { TextArea } from "./styled";

interface ITextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  rows?: number;
  cols?: number;
}

const TextAreaCp = (props: ITextAreaProps) => {
  const { value, onChange, rows, cols, ...rest } = props;
  return (
    <TextArea
      name={rest.name}
      id={rest.id}
      rows={rows ?? 5}
      cols={cols ?? 5}
      placeholder={rest.placeholder}
    />
  );
};

export default TextAreaCp;
