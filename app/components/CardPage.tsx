import React, { ReactNode } from "react";
import styles from "@/styles/components/CardPage.module.scss";

type Props = {
  title: string;
  subTitle?: string;
  renderBody: () => ReactNode;
  renderFooter?: () => ReactNode;
  renderHeader?: () => ReactNode;
};

function CardPage({
  title,
  subTitle,
  renderBody,
  renderFooter,
  renderHeader,
}: Props) {
  return (
    <div className={styles.container}>
      {renderHeader && <div>{renderHeader()}</div>}
      <div className={styles.header}>
        <h1>{title}</h1>
        {subTitle && <p>{subTitle}</p>}
      </div>
      <div className={styles.body}>{renderBody()}</div>
      {renderFooter && <div className={styles.footer}>{renderFooter()}</div>}
    </div>
  );
}

export default CardPage;
