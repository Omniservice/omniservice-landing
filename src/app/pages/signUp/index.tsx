import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { errorAlert, validateEmail } from "../../utils/HelperMixins";
import { SignUpProps } from "./utils";
import useSignup from "../../hooks/useSignup";

function SignUp() {
  const navigate = useNavigate();
  const { signUp, loading } = useSignup();

  const [businessName, setBusinessName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassord] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  const handleSignUpSubmit = async () => {
    if (businessName === "") {
      errorAlert("Business name is required");
      return;
    }
    if (email === "") {
      errorAlert("Business email is required");
      return;
    }
    if (password === "" || confirmPassword === "") {
      errorAlert("Password and Confirm Password is required");
      return;
    }
    if (password !== confirmPassword) {
      errorAlert("Password and Confirm Password don't match");
      return;
    }
    if (!validateEmail(email)) {
      errorAlert("Email not correct");
      return;
    }
    const data: SignUpProps = {
      BusinessName: businessName,
      BusinessEmail: email,
      Password: password,
      ConfirmPassword: confirmPassword,
    };
    const res = await signUp(data);
    if (res) navigate("/");
  };
  return (
    <div className="col-md-12 content-wrapper h-100vh">
      <div className="row mr-0 align-items-center justify-content-center">
       
        <div className="col-md-5 regular-flex h-100vh">
          <div
            className="auth-right-content-wrapper scroll-section"
          >
            <h4 className="sora-regular text-center">
              Sign Up
            </h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="sora-regular">
                      Business name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Buniness Name"
                  className="p-3 sora-regular"
                  onChange={(e) => setBusinessName(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="sora-regular">
                      Business Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Business Email"
                  className="p-3 sora-regular"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="sora-regular">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="p-3 sora-regular"
                  onChange={(e) => setPassord(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="sora-regular">
                      Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  className="p-3 sora-regular"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                className="submit-btn p-3 w-100 sora-regular"
                onClick={handleSignUpSubmit}
                disabled={loading}
              >
                {!loading ? (
                  <span>Submit</span>
                ) : (
                  <div
                    className="spinner-border text-light"
                    role="status"
                  ></div>
                )}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
