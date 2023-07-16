import React, { ReactNode } from "react";
import styles from "@/styles/layout.module.scss";
import useAuth from "../hooks/useAuth";
import Navbar from "./Navbar/Navbar";

interface PreLoginLayoutProps {
  children: ReactNode;
}

const layout: React.FC<PreLoginLayoutProps> = ({ children }) => {

 const {session} = useAuth();

  return (
    <div className={styles.appLayout}>
      {session?.user && <Navbar></Navbar>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default layout;
