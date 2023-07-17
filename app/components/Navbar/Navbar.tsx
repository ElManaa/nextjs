import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { signOut } from "next-auth/react"; 
import { useEffect, useState } from "react"; 
import { faWallet , faInbox , faUser , faMoneyBillTrendUp , faGear , faCircleInfo, faMoon, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import avatarIcon from "@/public/icons/avatar.svg"
import styles from "@/styles/components/Navbar.module.scss";
import NavbarItem from "./NavbarItem";

 
export default function Navbar() {
  const logout = signOut;
  
  const [avatar, setAvatar] = useState(avatarIcon)
  const [username,setUsername] =useState(false)
  const [balance,setBalance] = useState(0)
 /*
  useEffect(()=> {
  if (auth){
      console.log(auth)
      if (auth.avatar && auth.avatar.length > 0)
      setAvatar(auth.avatar)
      setUsername(auth.username)
      setBalance(auth.balance)
    }
  },[auth]) */

  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <div className={styles.header}>
          <div className={`row ${styles.headerRow} `}>
            <div className={`d-flex justify-content-center align-items-center col`} >
              <div className={styles.user}>
                <img
                  src={avatar}
                  alt="avatar"
                ></img> 
                <p>@{username && username}</p>  
              </div>
            </div>
            <div className={`${styles.wallet} col`}>
              <p >
              <FontAwesomeIcon icon={faWallet} color="white"/>  {balance / 100} € 
              </p> 
            </div>
          </div>
        </div>
      </nav>

      <div className={styles.navBody}>
            <NavbarItem  label="Inbox" icon={faInbox}  url="/" /> 
            <NavbarItem  label="My Profile" icon={faUser} url={`/profile/@${username}`}/> 
            <NavbarItem  label="Add Balance (to send messages)" icon={faWallet} url={`/payment`}/> 
            <NavbarItem  label="Become a Partner (To Earn)" icon={faMoneyBillTrendUp} url={'/partners'}/> 
            <NavbarItem  label="Settings" icon={faGear} url="/settings" /> 
            <NavbarItem  label="Help & Support" icon={faCircleInfo} /> 
            <NavbarItem  label="Night Mode" icon={faMoon} /> 
            <NavbarItem  label="Logout" icon={faArrowRightFromBracket} clickAction={logout}/>  
      </div>
    </aside>
  );
}

 
 
 
