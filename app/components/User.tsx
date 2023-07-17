 import styles from "@/styles/components/User.module.scss";
import avatarIcon from "@/public/icons/avatar.svg";
import TimeAgo from "javascript-time-ago"; 
import en from "javascript-time-ago/locale/en";
import { useRouter } from "next/router";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");
 

interface UserInterface {
  userData: false | any;
  fullname?: boolean;
  status?: boolean;
  position?: string;
  classes?: string;
  vCenterName?: boolean;
  mauto?: boolean;
  clickAction?: any;
  online?: boolean,
}

const User: React.FC<UserInterface> = ({
  userData,
  fullname,
  status,
  position,
  classes,
  vCenterName,
  mauto,
  clickAction,
})  => {
  const router = useRouter();
  const firstName = userData ? userData.username : "";
  const lastName = "";
  const lastOnline = userData ? userData.lastOnline : "";
  const avatar = userData && userData.avatar ? userData.avatar : avatarIcon;
  const online = userData ? userData.isOnline : false;

  const handleAvatarClick = () => {
    if (clickAction === "chat") router.push(`/chat/${userData._id}`);
    else router.push(`/profile/@${userData.username}`);
  };

  return (
    <div className={`${styles.container} ${classes}`}>
      <div  
        className={` col d-flex ${
          vCenterName && "align-items-center"
        } justify-content-start`}
      >
        <div
          className={`${styles.avatarContainer} ${online && styles.online} ${
            mauto && styles.mauto
          }`}
          onClick={handleAvatarClick}
        >
          <img className={styles.avatar} draggable="false" src={avatar} />
        </div>
        {position === "side" && (
          <div className={styles.nameContainer}>
            <p>
              {firstName} {fullname && lastName}
              {status && (
                <span>
                  {online ? "Online" : timeAgo.format(new Date(lastOnline))}
                </span>
              )}
            </p>
          </div>
        )}
      </div>
      {position === "bottom" && (
        <div className={`${styles.nameContainer}`}>
          <p className="mt-1">{firstName}</p>
        </div>
      )}
    </div>
  );
};

User.defaultProps = {
  userData: false,
  mauto: false,
  online: true,
  fullname: true,
  status: true,
  vCenterName: true,
  position: "side",
  classes: "",
  clickAction: "chat",
};

export default User;
