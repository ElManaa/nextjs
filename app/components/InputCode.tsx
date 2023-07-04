import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import styles from "@/styles/components/InputCode.module.scss";

interface Props {
  numberCount: number;
}

const InputCode: React.FC<Props> = (props) => {
  const [verificationCode, setVerificationCode] = useState<string[]>(Array(props.numberCount).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(props.numberCount).fill(null));

  useEffect(() => {
    inputRefs.current[0]?.focus(); // Focus on the first input initially
  }, []);

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedCode = [...verificationCode];

    if (value.length === 1) {
      updatedCode[index] = value.charAt(0);
    } else {
      updatedCode[index] = '';
    }

    setVerificationCode(updatedCode);

    if (value.length > 0 && index < props.numberCount - 1) {
      inputRefs.current[index + 1]?.focus(); // Focus on the next input
    }
  };

  return (
    <div className={styles.container}>
      {Array.from({ length: props.numberCount }, (_, index) => (
        <input
          key={index}
          type="text"
          value={verificationCode[index]}
          maxLength={1}
          onChange={(event) => handleChange(index, event)}
          ref={(input) => {
            inputRefs.current[index] = input; // Store the input reference in the array
          }}
        />
      ))}
    </div>
  );
};

export default InputCode;