import React, { ReactNode } from "react";
import styles from "@/styles/layout.module.scss";
import { useSession } from "next-auth/react";
import Navbar from "./Navbar/Navbar";

interface PreLoginLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: PreLoginLayoutProps) { 
  const { data: session, status } = useSession();
  return (
    <div className={styles.appLayout}>
      {session?.user && <Navbar></Navbar>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
