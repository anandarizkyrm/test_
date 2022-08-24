import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import style from "./popup.module.css";
import CostumerAPI from "../../api/customers";
import { useRouter } from "next/router";
interface IProps {
  setId: any;
  id: string;
  setVisible: any;
}

const PopupMenu: any = ({ setId, id, setVisible }: IProps) => {
  const router = useRouter();
  function handleDelete() {
    const userVal = window.confirm("Are You Sure Want To Delete This Data ? ");
    if (userVal) CostumerAPI.delete(id, router);
  }

  const handleEditClick = () => {
    setVisible(true);
    setId(id);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={handleEditClick}>Edit Data</Menu.Item>
      <Menu.Item onClick={handleDelete}>Delete Classroom</Menu.Item>
    </Menu>
  );

  return (
    <Space wrap>
      <Dropdown overlay={menu} placement="bottomRight">
        <MoreOutlined className={style.icon} />
      </Dropdown>
    </Space>
  );
};

export default PopupMenu;
