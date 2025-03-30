import { Typography, Avatar, Button, Box } from "@mui/material";
import { useRedirect, useGetList } from "react-admin";

import Loading from "../../common/components/loading";
import { FlexBox } from "../../common/components/flex-box";
import {
  Email as EmailIcon,
  Person as PersonIcon,
  Phone as PhoneIcone,
  Place as PlaceIcone,
} from "@mui/icons-material";

const ProfilePage = () => {
  const redirect = useRedirect();
  const { data: users = [] } = useGetList("user");

  const user = users[0];
  if (!user)
    return (
      <FlexBox
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Loading />
      </FlexBox>
    );

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "35vh",
          position: "relative",
          borderRadius: "20px 20px 0 0",
          backgroundImage: "url('/couverture.jpg')",
          backgroundSize: "100% 280%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: "bold",
            fontSize: "3rem",
            color: "white",
            textAlign: "center",
          }}
        >
          Welcome to Tapak'ila
          <Typography sx={{ fontWeight: "bold", color: "white" }}>
            "Réservez votre place, sans aucune menace."
          </Typography>
        </Typography>

        <Avatar
          src={user.imageUrl}
          sx={{
            position: "absolute",
            top: "110%",
            left: "20px",
            transform: "translateY(-50%)",
            width: 200,
            height: 200,
            border: "3px solid white",
          }}
        />
      </Box>

      <FlexBox
        sx={{
          justifyContent: "space-between",
          width: "100%",
          paddingLeft: "240px",
          paddingTop: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {user.name} <br />
          {user.username}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            margin: 2,
            ml: "auto",
          }}
          onClick={() => redirect("/profile/edit")}
        >
          Modifier le Profil
        </Button>
      </FlexBox>

      <Box
        sx={{
          justifyContent: "start",
          mt: 5,
        }}
      >
        <Box
          sx={{ height: "1px", backgroundColor: "black", margin: "20px 0" }}
        />
        <Typography
          sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: 2 }}
        >
          Détail du profil
        </Typography>
      </Box>

      <Box>
        <FlexBox
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              width: "40%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: "white",
                width: "100%",
                height: "40vh",
                padding: 5,
                boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", color: "rgb(43, 200, 190) " }}
              >
                Coordonnée
              </Typography>
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "black",
                  margin: "20px 0",
                }}
              />
              <FlexBox sx={{ justifyContent: "start" }}>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "0.1px solid black ",
                    bgcolor: "rgb(43, 200, 190)",
                  }}
                >
                  <EmailIcon sx={{ fontSize: 30, color: "black " }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>

              <FlexBox sx={{ justifyContent: "start", marginTop: 7 }}>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PhoneIcone sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Number
                  </Typography>
                  0345933238
                </Box>
              </FlexBox>
            </Box>

            <Box
              sx={{
                bgcolor: "white",
                width: "100%",
                height: "40vh",
                padding: 5,
                boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Coordonnée</Typography>
              <Box
                sx={{
                  height: "1px",
                  backgroundColor: "black",
                  margin: "20px 0",
                }}
              />
              <FlexBox sx={{ justifyContent: "start" }}>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PlaceIcone sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Adress
                  </Typography>
                  Andakana 232
                </Box>
              </FlexBox>

              <FlexBox sx={{ justifyContent: "start", marginTop: 7 }}>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
            </Box>
          </Box>

          <Box
            sx={{
              bgcolor: "white",
              width: "60%",
              height: "82vh",
              marginLeft: 5,
              padding: 5,
              boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Coordonnée</Typography>
            <Box
              sx={{ height: "1px", backgroundColor: "black", margin: "20px 0" }}
            />

            <FlexBox sx={{ justifyContent: "start", gap: 10 }}>
              <FlexBox>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "blackwhite" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
              <FlexBox sx={{ justifyContent: "start" }}>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
            </FlexBox>

            <FlexBox sx={{ justifyContent: "start", gap: 10, marginTop: 8 }}>
              <FlexBox>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
              <FlexBox sx={{ justifyContent: "start" }}>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
            </FlexBox>

            <FlexBox sx={{ justifyContent: "start", gap: 10, marginTop: 8 }}>
              <FlexBox>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
              <FlexBox sx={{ justifyContent: "start" }}>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
            </FlexBox>

            <FlexBox sx={{ justifyContent: "start", gap: 10, marginTop: 8 }}>
              <FlexBox>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
              <FlexBox sx={{ justifyContent: "start" }}>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
            </FlexBox>

            <FlexBox sx={{ justifyContent: "start", gap: 10, marginTop: 8 }}>
              <FlexBox>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
              <FlexBox sx={{ justifyContent: "start" }}>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid rgb(43, 200, 190) ",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  {user.email}
                </Box>
              </FlexBox>
            </FlexBox>
          </Box>
        </FlexBox>
      </Box>
    </>
    // <Card sx={{ maxWidth: 500, margin: "auto", mt: 5, p: 3 }}>
    //   <CardContent sx"={{ textAlign: "center" }}>
    //     <Avatar
    //       src={user.imageUrl}
    //       sx={{ width: 85, height: 85, margin: "auto" }}
    //     />
    //     <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
    //       {user.name}
    //     </Typography>
    //     <Typography variant="subtitle1" color="textSecondary">
    //       {user.roleId?.title}
    //     </Typography>
    //     <Typography variant="body1" sx={{ mt: 1 }}>
    //       {user.email}
    //     </Typography>
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       sx={{ mt: 2 }}
    //       onClick={() => redirect("/profile/edit")}
    //     >
    //       Modifier
    //     </Button>
    //   </CardContent>
    // </Card>
  );
};

export default ProfilePage;
