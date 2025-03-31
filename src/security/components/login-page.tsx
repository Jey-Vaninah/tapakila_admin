import { FC } from "react";
import { FlexBox } from "../../common/components/flex-box";
import { Box, Typography } from "@mui/material";
import {
  BooleanInput,
  Button,
  PasswordInput,
  required,
  SimpleForm,
  TextInput,
  Toolbar,
  useLogin,
  useNotify,
} from "react-admin";
import { Google as GoogleIcon } from "@mui/icons-material";

export const LoginPage: FC = () => {
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = async (data: any) => {
    try {
      await login(data);
    } catch (error) {
      console.error("Login error:", error);
      notify("Authentication error", { type: "error" });
    }
  };

  return (
    <FlexBox
      sx={{
        width: "100%",
        height: "100vh",
        overflowY: "scroll",
        bgcolor: "#383838",
      }}
    >
      <FlexBox
        sx={{ bgcolor: "white", borderRadius: "10px", alignItems: "stretch" }}
      >
        <FlexBox
          sx={{
            bgcolor: "rgb(20, 61, 24)",
            flexDirection: "column",
            borderRadius: "10px",
            p: 4,
            minWidth: "420px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
            Welcome Back
          </Typography>
          <Typography sx={{ color: "white" }}>
            Login to continue your journey
          </Typography>
          <Button
            size="medium"
            label="Register"
            sx={{ textTransform: "none" }}
            color="success"
            variant="contained"
          />
        </FlexBox>
        <FlexBox
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "10px",
            p: 4,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} variant="h4" color="success">
            Login
          </Typography>
          <Typography sx={{ color: "gray" }}>
            Login to continue your journey
          </Typography>
          <FlexBox sx={{ gap: "5px" }}>
            <Box
              sx={{
                bgcolor: "white",
                width: "150px",
                borderRadius: "10px",
                height: "10px",
              }}
            />
            <Box
              sx={{
                bgcolor: "white",
                width: "10px",
                borderRadius: "10px",
                height: "10px",
              }}
            />
            <Box
              sx={{
                bgcolor: "white",
                width: "150px",
                borderRadius: "10px",
                height: "10px",
              }}
            />
          </FlexBox>
          <SimpleForm
            disableInvalidFormNotification
            onSubmit={handleSubmit}
            toolbar={
              <Toolbar sx={{ gap: 2 }}>
                <Button
                  type="submit"
                  size="medium"
                  sx={{ textTransform: "none" }}
                  color="success"
                  label="Login"
                  variant="contained"
                />
                <Typography>Or</Typography>
                <Button
                  size="medium"
                  sx={{ textTransform: "none" }}
                  color="success"
                  label="Login with Google"
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                />
              </Toolbar>
            }
          >
            <TextInput
              validate={[required("This field is required")]}
              color="success"
              source="username"
              label="Username"
            />
            <PasswordInput
              validate={[required("This field is required")]}
              color="success"
              source="password"
              label="Password"
            />
            <FlexBox>
              <BooleanInput
                color="success"
                source="remember"
                label="Remember me"
              />
            </FlexBox>
          </SimpleForm>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
