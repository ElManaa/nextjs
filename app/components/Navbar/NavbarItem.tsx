import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "@/styles/components/NavbarItem.module.scss";
 
interface NavbarItemInterface {
  label: string;
  icon: IconProp;
  url?: string;
  clickAction?: any;
}

export default function NavbarItem({ label, icon, url, clickAction }: NavbarItemInterface) {

  const router = useRouter(); 

  const handleClick = () => {
    if (clickAction) clickAction();
    if (url) router.push(url);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <p>{label}</p>
    </div>
  );
}

NavbarItem.defaultProps = {
  label: "",
  icon: faIcons, 
};

 
