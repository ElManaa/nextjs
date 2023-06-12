import { ReactNode, useState } from "react";
import CardPage from "@/app/components/CardPage";
import Button from "@/app/components/Button";
import styles from "./login.module.scss";
import Link from "next/link";
import InputText from "@/app/components/InputText";

function login() {
  const usernameValidator = async (value: any) => {
    return { valid: true, message: "" };
  };

  const passwordValidator = async (value: any) => {
    return { valid: true, message: "" };
  };

  const [formData, setFormData] = useState({
    username: "",
  });

  const [error, setError] = useState(false);

  const renderBody = (): ReactNode => {
    return (
      <div className={styles.body}>
        <InputText
          id="email"
          name="email"
          label="Enter Your Email"
          validator={usernameValidator}
          value={formData}
          setValue={setFormData}
          formError={setError}
          placeholder="Email Address"
          isRequired={true}
        />

        <InputText
          id="password"
          name="password"
          label="Enter Your Password"
          validator={passwordValidator}
          value={formData}
          setValue={setFormData}
          formError={setError}
          placeholder="Password"
          type="password"
          isRequired={true}
        /> 

        <Button label="Log in" variation="primary" ></Button>
        
      </div>
    );
  };

  const renderFooter = (): ReactNode => {
    return (
      <div className={styles.footer}>
        <p>
          By signing up, i agree to the Terms and Conditions
          <br /> and Privacy Policy.
        </p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <CardPage
        title="Log in"
        subTitle="Enter your details to continue"
        renderBody={renderBody}
        renderFooter={renderFooter}
      ></CardPage>
    </div>
  );
}

export default login;
