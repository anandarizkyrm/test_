import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import React, { useState, useEffect } from "react";
import CostumerAPI from "../../api/customers";
import { useRouter } from "next/router";

const { Option } = Select;

interface IProps {
  visible: boolean;
  setVisible: any;
  datas: any;
  id: string | null;
}
const EditDrawer = ({ visible, setVisible, datas, id }: IProps) => {
  const router = useRouter();

  const [form] = Form.useForm();
  const [state, setState]: any = useState({
    id: null,
    name: "",
    address: "",
    country: "",
    phone_number: "",
    job_title: "",
    status: null,
  });
  useEffect(() => {
    if (id !== null) {
      let data = datas.filter((d: any) => d.id == id);
      setState({
        id: data[0].id,
        name: data[0].name,
        address: data[0].address,
        country: data[0].country,
        phone_number: data[0].phone_number,
        job_title: data[0].job_title,
        status: data[0].status,
      });
    }
    //eslint-disable-next-line
  }, [id]);

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = async () => {
    CostumerAPI.update(state, router);
  };
  const handleChange = (e: any): void => {
    const { name, value } = e.target as HTMLInputElement;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleChangeSelect = (value: string) => {
    setState({
      ...state,
      status: value,
    });
  };
  return (
    <>
      <Drawer
        title="Edit"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onSubmit}>Submit</Button>
          </Space>
        }
      >
        <Form form={form} layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <label style={{ marginBottom: 7, display: "block" }}>Name</label>
              <Input
                name="name"
                onChange={(e: any) => handleChange(e)}
                value={state.name}
                placeholder="Please enter user name"
              />
            </Col>
            <Col span={24}>
              <label style={{ marginBottom: 7, display: "block" }}>
                Address
              </label>
              <Input
                name="address"
                value={state.address}
                onChange={(e: any) => handleChange(e)}
                placeholder="Please enter address"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <label style={{ marginBottom: 7, display: "block" }}>
                country
              </label>
              <Input
                value={state.country}
                name="country"
                onChange={(e: any) => handleChange(e)}
                placeholder="Please enter country"
              />
            </Col>
            <Col span={24}>
              <label style={{ marginBottom: 7, display: "block" }}>
                Phone Number
              </label>
              <Input
                name="phone_number"
                value={state.phone_number}
                onChange={(e: any) => handleChange(e)}
                placeholder="Please enter Phone Number"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <label style={{ marginBottom: 7, display: "block" }}>
                Job Title
              </label>
              <Input
                name="jon_title"
                value={state.job_title}
                onChange={(e: any) => handleChange(e)}
                placeholder="Please enter job Title"
              />
            </Col>
            <Col span={12}>
              <label style={{ marginBottom: 7, display: "block" }}>
                Status
              </label>
              <Select
                onChange={handleChangeSelect}
                value={state.status === true ? "active" : "inactive"}
                placeholder="Please choose the Status"
              >
                <Option value={true}>Active</Option>
                <Option value={false}>Inactive</Option>
              </Select>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default EditDrawer;
