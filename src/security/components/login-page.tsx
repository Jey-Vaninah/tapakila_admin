import { FC, useState } from "react";
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
import { Google as GoogleIcon, Lock } from "@mui/icons-material";

export const LoginPage: FC = () => {
  const login = useLogin();
  const notify = useNotify();
  const [isLoading, setIsLoading] = useState(false);
  const primaryColor = "rgb(43, 200, 190)";
  const primaryDark = "rgb(35, 170, 160)";

  const handleSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      await login(data);
    } catch (error) {
      console.error("Login error:", error);
      notify("Authentication error", { type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FlexBox
      sx={{
        width: "100%",
        height: "100vh",
        background: `
          linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
          url('/couverture.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        overflow: "hidden",
      }}
    >
      <FlexBox
        sx={{
          bgcolor: "white",
          opacity: 0.8,
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          maxWidth: "1000px",
          width: "100%",
          minHeight: "500px",
        }}
      >
        <FlexBox
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            background: `linear-gradient(135deg, ${primaryColor}, ${primaryDark})`,
            p: 6,
            flex: 1,
            color: "white",
            display: { xs: "none", md: "flex" },
            textAlign: "center",
          }}
        >
          <img src="/logo-png.png" alt="logo" width="180px" />
          <Lock
            sx={{
              fontSize: 60,
              mb: 3,
              bgcolor: "rgba(255,255,255,0.2)",
              p: 2,
              borderRadius: "50%",
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              mb: 4,
              fontSize: "1.1rem",
            }}
          >
            Log in to access your personal space.
          </Typography>

          <Box
            sx={{
              position: "absolute",
              bottom: 40,
              left: 40,
              opacity: 0.1,
              fontSize: "8rem",
              fontWeight: 900,
              lineHeight: 1,
              zIndex: 0,
              userSelect: "none",
            }}
          >
            <Lock sx={{ fontSize: "inherit" }} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 28,
              right: 0,
              opacity: 0.1,
              fontSize: "8rem",
              lineHeight: 1,
              zIndex: 0,
              userSelect: "none",
            }}
          >
            <img src="/logo-png.png" alt="logo" width="340px" />
          </Box>
        </FlexBox>

        <FlexBox
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            p: { xs: 4, md: 6 },
            flex: 1,
            minWidth: { md: "400px" },
            position: "relative",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: primaryColor,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Login
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 4,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Enter your credentials to continue
          </Typography>

          <SimpleForm
            disableInvalidFormNotification
            onSubmit={handleSubmit}
            toolbar={
              <Toolbar
                sx={{
                  flexDirection: "column",
                  gap: 2,
                  px: 0,
                  mt: 2,
                  backgroundColor: "transparent",
                }}
              >
                <Button
                  fullWidth
                  type="submit"
                  size="large"
                  sx={{
                    "textTransform": "none",
                    "py": 1.5,
                    "fontSize": "1rem",
                    "fontWeight": 600,
                    "bgcolor": primaryColor,
                    "&:hover": {
                      bgcolor: primaryDark,
                    },
                  }}
                  label="Se connecter"
                  loading={isLoading}
                  variant="contained"
                />

                <Typography
                  variant="body2"
                  sx={{
                    "color": "text.secondary",
                    "position": "relative",
                    "&:before, &:after": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      width: "80px",
                      height: "1px",
                      bgcolor: "divider",
                    },
                    "&:before": { left: -90 },
                    "&:after": { right: -90 },
                  }}
                >
                  OR
                </Typography>

                <Button
                  fullWidth
                  size="large"
                  sx={{
                    "textTransform": "none",
                    "py": 1.5,
                    "fontSize": "1rem",
                    "fontWeight": 600,
                    "color": "text.primary",
                    "borderColor": "divider",
                    "&:hover": {
                      borderColor: primaryColor,
                      color: primaryColor,
                    },
                  }}
                  label="Continue with Google"
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  loading={isLoading}
                />
              </Toolbar>
            }
          >
            <TextInput
              validate={[required("Champ requis")]}
              source="username"
              label="Email or username"
              fullWidth
              sx={{
                "mb": 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />

            <PasswordInput
              validate={[required("Champ requis")]}
              source="password"
              label="Password"
              fullWidth
              sx={{
                "mb": 1,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  "borderRadius": 2,
                  "borderColor": "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />

            <FlexBox
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <BooleanInput
                source="remember"
                label="remember me"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "0.875rem",
                    color: "text.secondary",
                  },
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  "color": primaryColor,
                  "fontWeight": 500,
                  "cursor": "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Forgot password?
              </Typography>
            </FlexBox>
          </SimpleForm>

          <Typography
            variant="body2"
            sx={{
              mt: 3,
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            Don't have an account yet?{" "}
            <Box
              component="span"
              sx={{
                "color": primaryColor,
                "fontWeight": 600,
                "cursor": "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Become an Organizer
            </Box>
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
