import Label from "../Label/Label";
import Input from "./Input";


const InputLabel = ({className, label, name, type, placeholder, src, width, height, alt}: any) => {
  return (
    <div className="w-full flex flex-col">
      <Label className={className} htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} src={src} width={width} height={height} alt={alt} />
    </div>
  );
};

export default InputLabel;