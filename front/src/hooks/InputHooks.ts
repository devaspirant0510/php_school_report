import React, {useState,useCallback} from "react";

type ReturnTypes = [any, (e: React.ChangeEvent<HTMLInputElement>) => void]
const InputHooks = (initialValue:any|null = null) :ReturnTypes=> {
    const [input, setInput] = useState<any>(initialValue);
    const onChangeInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
        console.log(input)
    };
    return [input,onChangeInput];
}
export default InputHooks;