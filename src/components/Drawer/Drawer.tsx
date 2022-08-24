import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import React, { useState } from "react";
import CostumerAPI from "../../api/customers";
import { useRouter } from "next/router";

const { Option } = Select;

interface IProps {
  visible: boolean;
  setVisible: any;
}
const DrawerC = ({ visible, setVisible }: IProps) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [state, setState] = useState({
    id: null,
    name: "",
    address: "",
    country: "",
    phone_number: "",
    job_title: "",
    status: null,
  });
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmit = () => {
    CostumerAPI.create(state, router);
  };

  const handleChange = (e: any) => {
    const { value, name } = e.target as HTMLInputElement;
    setState({ ...state, [name]: value });
  };
  const placementChange = (value: any) => {
    setState({ ...state, status: value });
  };

  return (
    <>
      <Drawer
        title="Create a new account"
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
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  name="name"
                  onChange={(e) => handleChange(e)}
                  placeholder="Please enter user name"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true, message: "Please enter address" }]}
              >
                <Input
                  name="address"
                  onChange={(e) => handleChange(e)}
                  placeholder="Please enter address"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: "Please enter country" }]}
              >
                <Input
                  name="country"
                  onChange={(e) => handleChange(e)}
                  placeholder="Please enter country"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="phone_number"
                label="Phone Number"
                rules={[
                  { required: true, message: "Please enter Phone Number" },
                ]}
              >
                <Input
                  name="phone_number"
                  onChange={(e) => handleChange(e)}
                  placeholder="Please enter Phone Number"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="job_title"
                label="Job Title"
                rules={[{ required: true, message: "Please enter Job Title" }]}
              >
                <Input
                  name="job_title"
                  onChange={(e) => handleChange(e)}
                  placeholder="Please enter Job Title"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="status"
                label="Status"
                rules={[
                  { required: true, message: "Please choose the Status" },
                ]}
              >
                <Select
                  onChange={placementChange}
                  placeholder="Please choose the Status"
                >
                  <Option value={true}>Active</Option>
                  <Option value={false}>Inactive</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerC;
