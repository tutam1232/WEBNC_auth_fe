import { Button, Form, Input, notification } from "antd";
import RouterUrl from "../const/Router";
import Urls from "../const/Url";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const register = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post(Urls.REGISTER, values);

      notification.success({
        message: result?.data?.message,
        description: "Redirecting to login page after 2 seconds...",
      });
      setTimeout(() => {
        navigate(RouterUrl.LOGIN);
      }, 2000);
    } catch (error) {
      notification.error({
        message: error?.response?.data?.message,
      });
      setLoading(false);
    }
    
  };

  return (
    <>
      <h1>Register</h1>
      <Form
        disabled={loading}
        onFinish={register}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email", message: "Invalid email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Password is required" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div style={{ marginBottom: 10 }}>
            Got an account? <Link to={RouterUrl.LOGIN}>Login</Link>
          </div>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Register;
