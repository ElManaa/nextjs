import React from "react";
import styles from "@/styles/components/Button.module.scss";

type Props = {
  label: string;
  variation?: "primary" | "secondary" | false;
  clickAction?: Function;
};

const Button = ({ label, variation = false, clickAction }: Props) => {
  const handleClick = () => {
    if (clickAction) {
      clickAction();
    }
  };

  return (
    <button
      className={`${styles.buttonMain} ${variation && styles[variation]}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
