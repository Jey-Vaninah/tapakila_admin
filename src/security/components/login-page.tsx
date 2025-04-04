import { FC, useState, useRef, useEffect } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Configure la vidéo de fond
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Ralenti la vidéo pour un effet plus cinématique
    }
  }, []);

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
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        overflow: "hidden",
      }}
    >
      {/* Vidéo de fond */}
      <Box
        component="video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/couverture.jpg" // Image de remplacement avant chargement
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.7)",
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
        {/* Fallback si la vidéo ne charge pas */}
        <Box
          component="img"
          src="/couverture.jpg"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt="Background fallback"
        />
      </Box>

      {/* Overlay semi-transparent */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
          zIndex: 1,
        }}
      />

      {/* Conteneur principal du formulaire */}
      <FlexBox
        sx={{
          bgcolor: "white",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          maxWidth: "1000px",
          width: "100%",
          minHeight: "500px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left Panel - Branding */}
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
            position: "relative",
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
            Connectez-vous pour accéder à votre espace personnel
          </Typography>


        </FlexBox>

        {/* Right Panel - Login Form */}
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
            Connexion
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 4,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Entrez vos identifiants pour continuer
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
                }}
              >
                <Button
                  fullWidth
                  type="submit"
                  size="large"
                  sx={{
                    textTransform: "none",
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    bgcolor: primaryColor,
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
                    color: "text.secondary",
                    position: "relative",
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
                  OU
                </Typography>

                <Button
                  fullWidth
                  size="large"
                  sx={{
                    textTransform: "none",
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "text.primary",
                    borderColor: "divider",
                    "&:hover": {
                      borderColor: primaryColor,
                      color: primaryColor,
                    },
                  }}
                  label="Continuer avec Google"
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
              label="Email ou identifiant"
              fullWidth
              sx={{ mb: 2 }}
            />

            <PasswordInput
              validate={[required("Champ requis")]}
              source="password"
              label="Mot de passe"
              fullWidth
              sx={{ mb: 1 }}
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
                label="Se souvenir de moi"
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
                  color: primaryColor,
                  fontWeight: 500,
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Mot de passe oublié ?
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
            Pas encore de compte ?{" "}
            <Box
              component="span"
              sx={{
                color: primaryColor,
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              S'inscrire
            </Box>
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
