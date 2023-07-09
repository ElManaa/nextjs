import React, { ReactNode } from "react";
import styles from "@/styles/layout.module.scss";
import useAuth from "../hooks/useAuth";

interface PreLoginLayoutProps {
  children: ReactNode;
}

const layout: React.FC<PreLoginLayoutProps> = ({ children }) => {

 const {auth} = useAuth();

  return (
    <div className={styles.appLayout}>
      {auth?.username && <Navbar></Navbar>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default layout;
