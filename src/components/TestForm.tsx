import { Form, FloatingLabel } from "react-bootstrap";

const TestForm = () => {
  return (
    <Form>
      <FloatingLabel controlId="testEmail" label="Email">
        <Form.Control size="lg" type="email" />
      </FloatingLabel>
    </Form>
  );
};

export default TestForm;
