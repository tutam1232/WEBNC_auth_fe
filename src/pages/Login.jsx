import { Button, Form, Input, notification } from "antd";
import RouterUrl from "../const/Router";
import { Link, useNavigate } from "react-router-dom";
import Urls from "../const/Url";
import localStorageKey from "../const/localStorage";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post(Urls.LOGIN, values);
      notification.success({
        message: result?.data?.message,
      });
      localStorage.setItem(
        localStorageKey.accessToken,
        result?.data?.data?.access_token
      );
      localStorage.setItem(localStorageKey.email, result?.data?.data?.email);
      navigate(RouterUrl.HOME);
    } catch (error) {
      notification.error({
        message: error?.response?.data?.message,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <h1>Login</h1>
      <Form
        onFinish={login}
        disabled={loading}
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
            Don't have account? <Link to={RouterUrl.REGISTER}>Register</Link>
          </div>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
