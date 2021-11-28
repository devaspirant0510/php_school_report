import React, {useState,useCallback} from "react";

type ReturnTypes = [string|number, (e: React.ChangeEvent<HTMLInputElement>) => void]
const InputHooks = (initialValue = "") :ReturnTypes=> {
    const [input, setInput] = useState<string>(initialValue);
    const onChangeInput = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    },[]);
    return [input,onChangeInput];
}
export default InputHooks;