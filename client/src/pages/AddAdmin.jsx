import { Link } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import { Alert, Button, Card, Flex, Typography } from "antd";

import { Formik, ErrorMessage } from "formik";
import { Form, Input } from "formik-antd";
import * as Yup from "yup";
import useAddAdmin from "../hooks/useAddAdmin";

const AddAdmin = () => {
  const { loading, error, addAdmin } = useAddAdmin();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  const onSubmit = (values) => {
    addAdmin(values);
    // onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    passwordConf: Yup.string().required("Required"),
  });
  return (
    <>
      <ContentHeader title="Add New Admin" descr="New Admin" />
      <Link to="/dashboard/admins">
        <Button type="primary" className="mb-2">
          Admin List
        </Button>
      </Link>
      <Card>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => {
            return (
              <>
                {error ? (
                  <Alert
                    type="error"
                    icon
                    description={error}
                    closable
                  ></Alert>
                ) : (
                  ""
                )}

                <Form>
                  <Flex vertical className="mb-3" gap={4}>
                    <Flex vertical>
                      <label htmlFor="name">Name</label>
                      <Input
                        placeholder="Enter Full Names"
                        name="name"
                        id="name"
                        size="large"
                      />
                      <Typography.Text type="danger">
                        <ErrorMessage name="name" />
                      </Typography.Text>
                    </Flex>
                    <Flex vertical>
                      <label htmlFor="email">Email</label>
                      <Input
                        placeholder="Enter Email"
                        name="email"
                        id="email"
                        size="large"
                      />
                      <Typography.Text type="danger">
                        <ErrorMessage name="email" />
                      </Typography.Text>
                    </Flex>
                    <Flex vertical>
                      <label htmlFor="password">New Password</label>
                      <Input.Password
                        placeholder="Enter New Password"
                        name="password"
                        id="password"
                        size="large"
                      />
                      <Typography.Text type="danger">
                        <ErrorMessage name="password" />
                      </Typography.Text>
                    </Flex>
                    <Flex vertical>
                      <label htmlFor="passwordConf">Confirm Password</label>
                      <Input.Password
                        placeholder="Re-enter Password"
                        name="passwordConf"
                        id="passwordConf"
                        size="large"
                      />
                      <Typography.Text type="danger">
                        <ErrorMessage name="passwordConf" />
                      </Typography.Text>
                    </Flex>
                  </Flex>
                  <Flex align="center" gap="small">
                    <Button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      disabled={!formik.isValid}
                      loading={loading}
                    >
                      Submit
                    </Button>
                    <Button size="large" type="default" htmlType="reset">
                      Reset
                    </Button>
                  </Flex>
                </Form>
              </>
            );
          }}
        </Formik>
      </Card>
    </>
  );
};

export default AddAdmin;
