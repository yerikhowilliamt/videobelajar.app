import Image from "next/image";
import Label from "../Label/Label";
import Input from "./Input";


const InputPhonenumber = ({name, classname, label, type}: any) => {
  return (
    <div className="md:w-full w-[280px]">
      <Label htmlFor={name} classname={classname}>{label}</Label>
      <div className="w-full flex md:gap-6 gap-3 ">
        <div className="md:w-36 w-[122px] flex items-center border rounded-lg">
          <div className="md:w-11 w-11 h-full px-2.5 md:px-2.5 bg-base items-center flex justify-center ">
            <Image src="/icons/Flag Icon.png" alt="Flag Icon" width={24} height={24}/>
          </div>
          <div className="md:w-28 w-[78px] flex justify-center border-none outline-none items-center">
            <select name="intlPhoneCodes" id="intlPhonecodes">
              <option value="Indonesia">+62</option>
              <option value="Malaysia">+60</option>
              <option value="Singapore">+65</option>
              <option value="Philippines">+63</option>
              <option value="Timor Leste">+670</option>
            </select>
          </div>
        </div>
        <Input name={name} type={type} />
      </div>
    </div>
  );
};

export default InputPhonenumber;