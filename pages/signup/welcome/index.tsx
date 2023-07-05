import { ReactNode, useState } from "react";
import CardPage from "@/app/components/CardPage";
import Button from "@/app/components/Button";
import styles from "./welcome.module.scss";
import Link from "next/link";
import ProgressBar from "@/app/components/ProgressBar"; 

function WelcomeSignup() {
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
        <ProgressBar totalSteps={3} currentStep={3} />
      </div>
    );
  };

  const renderBody = (): ReactNode => {
    return (
      <>
         
      </>
    );
  };

  const renderFooter = (): ReactNode => {
    return (
      <div className={styles.veriffooter + " row "}>
      
        <div className="col ">
         <Link href="/dashboard"> <Button label="Start" variation="primary"></Button></Link>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <CardPage
        title="You're All Good 🎉 !"
        subTitle="Welcome A board, Start Sending/Receiving Private Messages with your idols"
        renderHeader={renderHeader}
        renderBody={renderBody}
        renderFooter={renderFooter}
      ></CardPage>
    </div>
  );
}

export default WelcomeSignup;
