import Button from "@/app/components/Button";
import styles from "./Components.module.scss";
import IButton from "@/app/components/IconButton";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Inter } from "next/font/google";
import InputText from "@/app/components/InputText";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

function components() {

  const usernameValidator = async (value: any) => {
    return { valid: true, message: "" };
  };

  const [formData, setFormData] = useState({
    username: "",
  });

  const [error, setError] = useState(false)

  return (
    <div>
      <div className={`row mx-0`}>
        <IButton icon={faXmark} variation={"red"} />
        <IButton icon={faCheck} variation={"blue"} classes="mx-2" />
      </div>
      <div className={`my-4`}>
        <h1 className={inter.className}>Title 01</h1>
        <h2>Title 02</h2>
        <h3>Title 03</h3>
        <h4>Title 03</h4>
        <h5>Title 05</h5>
        <h6>Title 06</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa
          iure aut. Tenetur rerum quos cupiditate explicabo aliquid in
          recusandae. Reiciendis, quis. Corrupti, reprehenderit sint sunt maxime
          quibusdam accusamus recusandae.
        </p>
      </div>
      <div className="my-2 col-6">
        <Button label="Sign up" variation="primary" />
        <Button label="Login" variation="secondary" />
        <Button label="Cancel" />
        <Button label="Accept" variation="primary" />
      </div>
      <div className="my-2 row mx-0 col-6">
        <InputText
          id="username"
          name="username"
          label="Username"
          validator={usernameValidator}
          value={formData}
          setValue={setFormData}
          formError={setError}
          placeholder="Username"
          isRequired={true}
        />
      </div>
    </div>
  );
}

export default components;
