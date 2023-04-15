import styles from "./login.module.scss";
import IButton from "@/app/components/IconButton";
import { faXmark , faCheck } from "@fortawesome/free-solid-svg-icons";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function login() {
  return (
    <div>
      <div className={`${styles.container} row mx-0`}>
        <IButton icon={faXmark} variation={"red"} />
        <IButton icon={faCheck} variation={"blue"}  classes="mx-2"/>
      </div>
      <div className={`${styles.container} my-4`}>
        <h1 className={inter.className}>Title 01</h1>
        <h2>Title 02</h2>
        <h3>Title 03</h3>
        <h4>Title 03</h4>
        <h5>Title 05</h5>
        <h6>Title 06</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa iure aut. Tenetur rerum quos cupiditate explicabo aliquid in recusandae. Reiciendis, quis. Corrupti, reprehenderit sint sunt maxime quibusdam accusamus recusandae.</p>
      </div>
    </div>
  );
}

export default login;
