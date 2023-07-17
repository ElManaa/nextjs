import React, { useEffect } from "react";
import styles from "@/styles/components/Bubble.module.scss";
import avatarIcon from "@/public/icons/avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
import Button from "@/app/components/Button";
import {
  faXmark,
  faEllipsisV,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

interface BubbleInterface {
  keyNumber?: any;
  sender: string;
  timestamp: false | any;
  acceptedMediaBD: any;
  typeMedia?: string;
  body?: any;
  receiverApprouved: boolean;
  avatar: any;
  contactName: any;
  msgid: any;
  refunded: any;
  answered?: any;
  handleMediaApproval?: any;
}

const Bubble: React.FC<BubbleInterface> = ({
  keyNumber,
  sender,
  timestamp,
  acceptedMediaBD,
  typeMedia,
  body,
  receiverApprouved,
  avatar,
  contactName,
  msgid,
  refunded,
  answered,
  handleMediaApproval,
}) => {
  const received = sender !== "me" ? true : false;
  const classBubble = received ? styles["received"] : "";
  const [popup, setPopup] = useState(false);
  const [refundedState, setRefundedState] = useState(refunded);
  const [approuveMessage, setApprouveMessage] = useState(receiverApprouved);
  const [acceptedMedia, setAcceptedMedia] = useState(acceptedMediaBD);

  const handleRefundRequest = async () => {
    axios
      .post("/chat/refund", JSON.stringify({ id: msgid }))
      .then((d) => {
        setRefundedState(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleMediaApprovalResponse = async (approuval: any) => {
    setApprouveMessage(true);
    if (approuval) setAcceptedMedia(true);
    handleMediaApproval(approuval, msgid);
  };

  return (
    <div key={keyNumber} className={`${styles.container} ${classBubble} `}>
      {received ? (
        <img className={styles.avatar} src={avatar} />
      ) : (
        <div className={styles.options}>
          <FontAwesomeIcon
            icon={faEllipsisV}
            opacity={0.4}
            onClick={() => {
              setPopup((prev) => !prev);
            }}
          />
          {!!popup && (
            <div className={`${styles.popup} ${styles.active} `}>
              <ul>
                {!!(!refunded && !answered && !refundedState) && (
                  <li onClick={handleRefundRequest}>Delete & Refund</li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className={`${styles.text} ${classBubble}`}>
        {!refundedState ? (
          <>
            {typeMedia == "text" && (
              <>
                {body.split("\n").map((e: string, i: number) => (
                  <p key={i} className="mb-0">
                    {e}
                  </p>
                ))}
              </>
            )}
            {typeMedia == "image" && (
              <>
                {(received && approuveMessage) || !received ? (
                  <>
                    {" "}
                    {acceptedMedia || !received ? (
                      <img src={body} alt="x" />
                    ) : (
                      <p className={styles.refunded}>Rejected Image </p>
                    )}
                  </>
                ) : (
                  <div className={styles.imgrequest}>
                    <b>@{contactName}</b> want to send you a picture do you
                    accept ?
                    <div className="d-flex row mt-2">
                      <div className="col col-xs-2">
                        <Button
                          label="Cancel"
                          variation="secondary"
                          clickAction={() => {
                            handleMediaApprovalResponse(false);
                          }}
                        />
                      </div>
                      <div className="col col-xs-2">
                        <Button
                          label="Approuve"
                          clickAction={() => {
                            handleMediaApprovalResponse(true);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <p className={styles.refunded}>Message Deleted</p>
        )}
      </div>
    </div>
  );
};

Bubble.defaultProps = {
  sender: "me",
  timestamp: false,
  avatar: avatarIcon,
  refunded: false,
  msgid: "#notDefined",
};

export default Bubble;
