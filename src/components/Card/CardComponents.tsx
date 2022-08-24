import { Card } from "antd";
import React from "react";
import PopupMenu from "../Popup/Popup";
import styles from "./card.module.css";

const CardComponents = ({ data, setId, setVisible }: any) => {
  return (
    <div className={styles.card}>
      <Card
        title={data.name}
        bordered={true}
        headStyle={{ background: "#DCD7C9" }}
        className={styles.cardComponent}
        style={{ width: 300, color: "white" }}
        extra={<PopupMenu setId={setId} id={data.id} setVisible={setVisible} />}
      >
        <p>{data.phone_number}</p>
        <p>{data.address}</p>
        <p>{data.country}</p>
        <p>{data.job_title}</p>
        <p>{data.status ? "Active" : "Inactive"}</p>
      </Card>
    </div>
  );
};

export default CardComponents;
