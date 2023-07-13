import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/app/context/AuthProvider";
import { AuthProvider } from "@/app/context/AuthProvider";
import styles from "./dashboard.module.scss";
import Button from "@/app/components/Button";
import Search from "@/app/components/Search";
import SearchLoader from "@/app/components/SearchLoader";
import ConversationsLoader from "@/app/components/ConversationsLoader";
import { useSession, signIn, signOut } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Component() {
  const { data: session } = useSession();
 
  if (session) {
    return (
      <> 
        Signed in as {session?.user?.email} <br />{" "}
        <button onClick={() => signOut()}>Sign out</button>{" "}
      </>
    );
  }
  return (
    <> 
      Not signed in <br /> <button onClick={() => signIn()}>
        Sign in
      </button>{" "}
    </>
  );
}

export default function Dashboard() {
  //const logout = useLogout();
  const [search, setSearch] = useState<string | false>(false);
  const { data: session } = useSession();

  const handleSearchChange = (e: any) => {
    let s = e.target.value;
    if (s != "" || s) setSearch(s);
    else setSearch(false);
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={`row ${styles.vCenter} `}>
          <div className="col">
            <h1 className="title">Inbox</h1>
            <Button variation="primary" label="logout"></Button>
          </div>
        </div>
      </nav>
      <div className={styles.content}>
        <Search value={search} handleChange={handleSearchChange} />
        {/* <OnlineUsers></OnlineUsers>*/}
        {search ? <SearchLoader query={search} /> : <ConversationsLoader />}
        <Component></Component>
      </div>
    </div>
  );
}
