import React, { useState } from "react";

// React-Hook-Form
import { useForm } from "react-hook-form";

// Material-UI
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Material Styles
import { makeStyles } from "@mui/styles";

// Components
import InputForm from "@Components/Form/inputs";

// ========================================================================================================

type FormValues = {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const classes = useStyles();

  // ==============================
  //          State
  // ==============================
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // ==============================
  //          Form
  // ==============================
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    criteriaMode: "all",
  });

  // ==============================
  //          Events
  // ==============================
  const onSubmit = async (form) => {
    console.log("form", form);

    if (password !== confirmPassword) {
      await alert("passwords don't match");
      return;
    }
  };

  return (
    <Box>
      <Card elevation={0} className={classes.signin}>
        <img width="100%" height="100%" className={classes.media} src={require("@Assets/Water24.webp")} />

        <Box className={classes.content}>
          <Box>
            <Typography variant="h4" style={{ fontSize: "1.85rem" }}>
              I do not have an account
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              Register a new account
            </Typography>
          </Box>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              type="text"
              name="firstName"
              id="firstName"
              label="First Name"
              inputRef={{
                ...register("firstname", {
                  required: "This field is required",
                }),
              }}
              value={firstName}
              onChange={setFirstName}
              errors={errors}
            />

            <InputForm
              type="text"
              name="lastName"
              id="lastName"
              label="Last Name"
              inputRef={{
                ...register("lastname", {
                  required: "This field is required",
                }),
              }}
              value={lastName}
              onChange={setLastName}
              errors={errors}
            />

            <InputForm
              type="text"
              name="username"
              id="signupUsername"
              label="Username"
              inputRef={{
                ...register("username", {
                  required: "This field is required",
                  minLength: { value: 3, message: "Your username should contain minimum 3 characters" },
                  maxLength: { value: 20, message: "Your username should contain maximum 20 characters" },
                }),
              }}
              value={username}
              onChange={setUsername}
              errors={errors}
            />

            <InputForm
              type="email"
              name="email"
              id="signupEmail"
              label="Email"
              inputRef={{
                ...register("email", {
                  required: "This field is required",
                  minLength: { value: 8, message: "Your email should contain minimum 8 characters" },
                }),
              }}
              value={email}
              onChange={setEmail}
              errors={errors}
            />

            <Box style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "1rem" }}>
              <InputForm
                type="password"
                name="password"
                id="signupPassword"
                label="Password"
                inputRef={{
                  ...register("password", {
                    required: "This field is required",
                    minLength: { value: 8, message: "Your password should contain minimum 8 characters" },
                  }),
                }}
                value={password}
                onChange={setPassword}
                errors={errors}
              />

              <InputForm
                type="password"
                name="confirmPassword"
                id="signupConfirmPassword"
                label="Confirm Password"
                inputRef={{
                  ...register("confirmPassword", {
                    required: "This field is required",
                    minLength: { value: 8, message: "Your confirm password should contain minimum 8 characters" },
                  }),
                }}
                value={confirmPassword}
                onChange={setConfirmPassword}
                errors={errors}
              />
            </Box>

            <Box className={classes.actionButtons}>
              <Button type="submit" variant="outlined" color="secondary">
                Sign up
              </Button>
            </Box>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default SignUp;

// ========================================================================================================

const useStyles = makeStyles(() => ({
  signin: {
    display: "flex",
    height: 620,
    justifyContent: "space-between",
  },

  media: {
    width: "700px",
    height: "100%",
  },

  content: {
    width: "31%",
    display: "flex",
    flexDirection: "column",
    padding: "20px 30px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    margin: "30px 0px 0px 0px",
  },

  actionButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: "30px",
  },
}));
