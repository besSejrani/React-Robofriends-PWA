import React, { useState } from "react";

// Next
import { Link } from "react-router-dom";

// React-Hook-Form
import { useForm } from "react-hook-form";

// Material-UI
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Material Styles
import { makeStyles } from "@mui/styles";

// Hooks
// import useToast from "@Hooks/useToast";

// Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub";

// Components
import InputForm from "@Components/Form/inputs";

// ========================================================================================================

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const classes = useStyles();

  // ==============================
  //          State
  // ==============================
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
    // await useToast({ message: "Successful Authentication", color: "#00ff00" });
  };

  return (
    <Box>
      <Card elevation={0} className={classes.signin}>
        <img className={classes.media} width="100%" height="100%" src={require("@Assets/Sand2.webp")} />

        <Box className={classes.content}>
          <Box>
            <Typography variant="h4" style={{ fontSize: "1.85rem" }}>
              I already have an account
            </Typography>
          </Box>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              type="email"
              name="email"
              id="signinEmail"
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

            <InputForm
              type="password"
              name="password"
              id="signinPassword"
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

            <Box className={classes.actionButtons}>
              <Button type="submit" variant="outlined" color="secondary">
                Signin
              </Button>
            </Box>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default SignIn;

// ========================================================================================================

const useStyles = makeStyles(() => ({
  signin: {
    display: "flex",
    height: "620px",
    justifyContent: "space-between",
  },

  media: {
    width: "700px",
    height: "100%",
  },

  content: {
    width: "35%",
    flexDirection: "column",
    padding: "20px 30px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    margin: "45px 0px 0px 0px",
  },

  socialbuttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },

  actionButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: "30px",
  },
}));
