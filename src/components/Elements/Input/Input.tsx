import Image from "next/image";

const Input = ({type, name, placeholder, src, width, height, alt}: any) => {
  return (
    <div className="w-full h-12 px-2.5 gap-2 flex items-center border rounded-lg">
      <input className="w-full bg-transparent border-none outline-none" type={type} name={name} placeholder={placeholder} />
      <Image src={src} width={width} height={height} alt={alt}/>
    </div>
  );
};

export default Input;
