import React from 'react';
import styles from "@/styles/components/ProgressBar.module.scss";

interface Props {
  totalSteps: number;
  currentStep: number;
}

const ProgressBar: React.FC<Props> = ({ totalSteps, currentStep }) => {
  return (
    <div className={styles.progressBar}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={index < currentStep ? styles.progressBarItemFilled : styles.progressBarItem}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
