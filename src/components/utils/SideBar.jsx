import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MdEmail } from "react-icons/md";
import "./SideBar.styles.scss";

const SideBar = ({ onSubmit }) => {
  return (
    <Row>
      <div className="side-bar m-auto">
        <div className="side-bar__newslatter mb-3 text-center p-3">
          <MdEmail className={"side-bar__newslatter--icon mb-3"} />
          <h4 className={"font-weight-bold"}>NEWSLETTER</h4>
          <p className={" mb-3"}>
            Subscribe to our mailing list to get the new updates!
          </p>
          <Form
            onSubmit={onSubmit}
            className={"side-bar_newslatter--form mt-3"}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Control size="lg" type="email" placeholder="Enter email" />
            </Form.Group>

            <Button variant="danger" size="lg" block type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <br />
        <div className="side-bar__follow m-b3 border"></div>
        <br />
      </div>
    </Row>
  );
};

export default SideBar;
