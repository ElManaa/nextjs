import { ReactNode, useState, FormEvent } from "react";
import axios from "axios";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken, signIn } from "next-auth/react";
import CardPage from "@/app/components/CardPage";
import Button from "@/app/components/Button";
import styles from "./login.module.scss";
import Link from "next/link";
import InputText from "@/app/components/InputText";

interface formDataInterface {
  email: string;
  password: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}

export default function Login({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        username: formData.email,
        password: formData.password,
        csrfToken,
        redirect: true,
        callbackUrl: "/dashboard",
      });
    } catch (err) {
      console.error("Failed Attempt to Login", err);
    }
  };

  const usernameValidator = async (value: any) => {
    return { valid: true, message: "" };
  };

  const passwordValidator = async (value: any) => {
    return { valid: true, message: "" };
  };

  const [formData, setFormData] = useState<formDataInterface>({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const renderBody = (): ReactNode => {
    return (
      <div className={styles.body}>
        <form onSubmit={handleSubmit}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
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

          <Button label="Log in" variation="primary"></Button>
        </form>
      </div>
    );
  };

  const renderFooter = (): ReactNode => {
    return (
      <div className={styles.footer}>
        <p>
          I dont have an account. <Link href="/signup">Sign up</Link>
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
