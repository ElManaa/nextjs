import { ReactNode, useState } from "react";
import CardPage from "@/app/components/CardPage";
import Button from "@/app/components/Button";
import styles from "./verification.module.scss";
import Link from "next/link";
import ProgressBar from "@/app/components/ProgressBar";
import InputText from "@/app/components/InputText";
import InputCode from "@/app/components/InputCode";

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
        <ProgressBar totalSteps={3} currentStep={1} />
      </div>
    );
  };

  const renderBody = (): ReactNode => {
    return (
      <div className={styles.body}>
       
        <InputCode numberCount={4} />
        <div className={styles.subcontent}>
          <p>
            Didn't Receive the code ? <Link href="#">Resend code</Link>
          </p>
        </div>
      </div>
    );
  };

  const renderFooter = (): ReactNode => {
    return (
      <div className={styles.veriffooter + " row "}>
        <div className="col">
          <Button label="Back"></Button>
        </div>
        <div className="col ">
          <Button label="Continue" variation="primary"></Button>
        </div>
      </div>
    );
  };



  return (
    <div className={styles.container}>
      <CardPage
        title="Verify Code"
        subTitle="Check your email, We have sent you the code !"
        renderHeader={renderHeader}
        renderBody={renderBody}
        renderFooter={renderFooter}
      ></CardPage>
    </div>
  );
}

export default verificationSignUp;
