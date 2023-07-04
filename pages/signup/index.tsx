import { ReactNode, useState } from "react";
import CardPage from "@/app/components/CardPage";
import Button from "@/app/components/Button";
import styles from "./signup.module.scss";
import Link from "next/link";
import InputText from "@/app/components/InputText";

function signup() {
  const usernameValidator = async (value: any) => {
    return { valid: true, message: "" };
  };

  const emailValidator = async (value: any) => {
    return { valid: true, message: "" };
  };

  const confirmPasswordValidator = async (value: any) => {
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
          id="username"
          name="username"
          label="Username"
          validator={usernameValidator}
          value={formData}
          setValue={setFormData}
          formError={setError}
          placeholder="Create Your Username"
          isRequired={true}
        />
        <InputText
          id="email"
          name="email"
          label="email"
          validator={emailValidator}
          value={formData}
          setValue={setFormData}
          formError={setError}
          placeholder="Enter Your Email"
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

        <InputText
          id="confirmpassword"
          name="confirmpassword"
          label="Confirm Your Password"
          validator={confirmPasswordValidator}
          value={formData}
          setValue={setFormData}
          formError={setError}
          placeholder="Password"
          type="password"
          isRequired={true}
        />

        <Button label="Log in" variation="primary"></Button>
      </div>
    );
  };

  const renderFooter = (): ReactNode => {
    return (
      <div className={styles.footer}>
        <p>
          Already have an account. <Link href="/login">Log in</Link>
        </p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <CardPage
        title="Sign up"
        subTitle="Enter your details to continue"
        renderBody={renderBody}
        renderFooter={renderFooter}
      ></CardPage>
    </div>
  );
}

export default signup;
