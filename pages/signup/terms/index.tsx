import { ReactNode, useState } from "react";
import CardPage from "@/app/components/CardPage";
import Button from "@/app/components/Button";
import styles from "./terms.module.scss";
import Link from "next/link";
import ProgressBar from "@/app/components/ProgressBar"; 

function verificationSignUp() {
  const usernameValidator = async (value: any) => {
    return { valid: true, message: "" };
  };

  const [formData, setFormData] = useState({
    username: "",
  });

  const [error, setError] = useState(false);

  const renderHeader = (): ReactNode => {
    return (
      <div className={styles.header}>
        <ProgressBar totalSteps={3} currentStep={2} />
      </div>
    );
  };

  const renderBody = (): ReactNode => {
    return (
      <>
        <div className={styles.body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus
            lorem, aliquam dictum hendrerit a, posuere ac elit. Donec fermentum,
            dolor fringilla lacinia blandit, odio eros malesuada libero, at
            auctor velit justo a dui. Pellentesque vel velit eros. Aenean vel
            dui ex. Pellentesque egestas diam urna, at rutrum odio luctus ac.
            Fusce in ultrices nunc. Sed odio nulla, maximus at purus vel,

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus
            lorem, aliquam dictum hendrerit a, posuere ac elit. Donec fermentum,
            dolor fringilla lacinia blandit, odio eros malesuada libero, at
            auctor velit justo a dui. Pellentesque vel velit eros. Aenean vel
            dui ex. Pellentesque egestas diam urna, at rutrum odio luctus ac.
            Fusce in ultrices nunc. Sed odio nulla, maximus at purus vel,
        
          </p>
        </div>
        <div className={`${styles.body} mt-4`}>
          <div className={styles.inputSection}>
          <label className={styles.checkbox}> 
              <input type="checkbox" /> I Agree to Terms & Conditions
              <span className={styles.checkmark}></span>
            </label> 
          </div>
          <div className={styles.inputSection}>
            <label className={styles.checkbox}> 
              <input type="checkbox" /> I Agree to Privacy Policy
              <span className={styles.checkmark}></span>
            </label> 
          </div>
        </div>
      </>
    );
  };

  const renderFooter = (): ReactNode => {
    return (
      <div className={styles.veriffooter + " row "}>
      
        <div className="col ">
         <Link href="/signup/welcome"> <Button label="Accepter" variation="primary"></Button> </Link>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <CardPage
        title="Terms & Conditions"
        layout="custom2"
        renderHeader={renderHeader}
        renderBody={renderBody}
        renderFooter={renderFooter}
      ></CardPage>
    </div>
  );
}

export default verificationSignUp;
