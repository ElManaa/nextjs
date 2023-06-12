import { ReactNode } from "react";
import styles from "./welcome.module.scss";
import CardPage from "@/app/components/CardPage";
import Button from "@/app/components/Button";
import Link from "next/link";

function welcome() {

  const renderBody = (): ReactNode => {
    return (
      <div className={styles.body}>
          <Link href={"/login"}><Button label="Sign up" variation="primary" ></Button></Link>
        <Link href={"/login"}><Button label="Log in"></Button></Link>
      </div>
    );
  };
 
  const renderFooter = (): ReactNode => {
    return (
      <div className={styles.footer}>
        <p>By signing up, i agree to the Terms and Conditions<br/> and Privacy Policy.</p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <CardPage
        title="Welcome to XX, let's get started"
        subTitle="This app is the best app, thank you for downloading it. You won't regret it using it"
        renderBody={renderBody}
        renderFooter={renderFooter}
      ></CardPage>
    </div>
  );
}

export default welcome;
