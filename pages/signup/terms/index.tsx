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
      <>
        <div className={styles.body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus
            lorem, aliquam dictum hendrerit a, posuere ac elit. Donec fermentum,
            dolor fringilla lacinia blandit, odio eros malesuada libero, at
            auctor velit justo a dui. Pellentesque vel velit eros. Aenean vel
            dui ex. Pellentesque egestas diam urna, at rutrum odio luctus ac.
            Fusce in ultrices nunc. Sed odio nulla, maximus at purus vel,
            euismod blandit diam. Maecenas tempus sem sit amet lectus dignissim,
            eget interdum ligula vestibulum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas eleifend ipsum sit amet enim
            congue, vitae convallis nisi condimentum. Nulla ullamcorper blandit
            nisi placerat viverra. Mauris tortor nibh, convallis vehicula augue
            quis, accumsan cursus velit. Nam sed augue lectus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Donec lacus lorem, aliquam
            dictum hendrerit a, posuere ac elit. Donec fermentum, dolor
            fringilla lacinia blandit, odio eros malesuada libero, at auctor
            velit justo a dui. Pellentesque vel velit eros. Aenean vel dui ex.
            Pellentesque egestas diam urna, at rutrum odio luctus ac. Fusce in
            ultrices nunc. Sed odio nulla, maximus at purus vel, euismod blandit
            diam. Maecenas tempus sem sit amet lectus dignissim, eget interdum
            ligula vestibulum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas eleifend ipsum sit amet enim congue, vitae
            convallis nisi condimentum. Nulla ullamcorper blandit nisi placerat
            viverra. Mauris tortor nibh, convallis vehicula augue quis, accumsan
            cursus velit. Nam sed augue lectus.
          </p>
        </div>
        <div className={styles.body}>
          <div className={styles.inputSection}>
            <input type="checkbox" /> I agree to The Terms & Conditions
          </div>
          <div className={styles.inputSection}>
            <input type="checkbox" /> I agree to Privacy Policy
          </div>
        </div>
      </>
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
        title="Terms & Conditions"
        renderHeader={renderHeader}
        renderBody={renderBody}
        renderFooter={renderFooter}
      ></CardPage>
    </div>
  );
}

export default verificationSignUp;
