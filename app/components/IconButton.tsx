import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/IconButton.module.scss";
import { IButton, ISizeClass } from "@/app/types/Button";

/**
 * Defines The size of the Icon and the Size of the Button
 * @param size
 * @returns
 */
const getSizeClass = (size: any): ISizeClass => {
  switch (size) {
    case "normal":
      return { sizeClass: "", sizeIcon: "1x" };
    case "small":
      return { sizeClass: "small", sizeIcon: "sm" };
    default:
      return { sizeClass: "", sizeIcon: "1x" };
  }
};

/**
 * Icon Button, Can be an Icon and a Button with Icon
 * @param param0 
 * @returns 
 */
function IconButton({ variation, icon, clickAction, classes, size }: IButton) {
  const { sizeClass, sizeIcon } = getSizeClass(size);

  const [iconColor, setIconColor] = useState("#707C97");
  const [variationClass, setVariationClass] = useState("");

  useEffect(() => {
    if (variation !== "primary") setIconColor("#FFFFFF");

    if (variationClass !== "primary") setVariationClass(styles[variation]);
  }, []);

  return (
    <div
      className={`${styles.btnSection} ${variationClass} ${
        classes && classes
      } ${styles[sizeClass]}`}
      onClick={clickAction}
    >
      <FontAwesomeIcon icon={icon} color={iconColor} size={sizeIcon} />
    </div>
  );
}

IconButton.defaultProps = {
  variation: "primary",
  classes: false,
  size: "normal",
  icon: "fa-ellipsis-v",
  clickAction : () => {}
};

export default IconButton;
