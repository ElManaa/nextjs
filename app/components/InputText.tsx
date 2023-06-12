import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import React, { ChangeEvent, FocusEvent, useState } from "react";
import styles from "@/styles/components/InputText.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle} from "@fortawesome/free-solid-svg-icons";

interface IProps {
    label : string;
    id : string;
    icon?: IconProp;
    type: string;
    name : string;
    placeholder: string;
    isRequired: boolean;
    validator : validatorFn;
    value : any;
    setValue : React.Dispatch<any>
    formError: React.Dispatch<boolean> 
}

function InputText({ label, id, name, icon, type, placeholder, isRequired , validator , value , setValue, formError } : IProps) {

  const [inputValue,setInputValue] = useState(value[name])
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<false|string>(false);


  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    setIsValid(false);
    setErrorMessage(false);
    formError(false);
    setInputValue(e.target.value) 
  }

  const handleBlur = async (e : FocusEvent<HTMLInputElement>) => {
    const valuex = e.target.value
    const {valid, message}  =  await validator(valuex)
    if (valid) {
      setIsValid(true); 
      setValue((prevState:any) => ({
        ...prevState,
        [name]: inputValue,
      })); 
    }else {
      if (message)
      setErrorMessage(message);
      formError(true);
    } 
  }

 
  return (
    <div className={styles.inputSection}>
      <label htmlFor={id}>
        {label} {isRequired && <span>*</span>}{" "}
      </label>
      <input
        id={id}
        className={`${styles.textField} ${isValid && styles.valid} ${errorMessage && styles.error}`}
        type={type}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        required={isRequired}
        onChange={handleChange}
        onBlur={handleBlur}

      />
      {errorMessage && (
        <p className={styles.errorField}>
          <span>
            <FontAwesomeIcon icon={faInfoCircle} />
          </span>
          {errorMessage}
        </p>
      )}
    </div>
  );
}
 
InputText.defaultProps = {
  label: "LABEL",  
  type: "text",
  value: "",  
  placeholder: "Placeholder",
  isRequired: false,
};

export default InputText;
