import { Typography, Avatar, Button, Box } from "@mui/material";
import { useRedirect } from "react-admin";

import Loading from "../../common/components/loading";
import { FlexBox } from "../../common/components/flex-box";
import {
  Email as EmailIcon,
  Phone as PhoneIcone,
  Place as PlaceIcone,
  DateRange as DateRangeIcon,
  Update as UpdateIcon,
  ManageAccounts as ManageAccountsIcon,
  Transgender as TransgenderIcon,
  Login as LoginIcon,
  Apartment as ApartmentIcon,
  Work as WorkIcon,
  LinkedIn as LinkedInIcon,
  Diversity1 as Diversity1Icon,
  Language as LanguageIcon,
  Public as PublicIcon,
} from "@mui/icons-material";

import { useProfile } from "../../config/useProfile";

const ProfilePage = () => {
  const redirect = useRedirect();
  const user = useProfile();

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
            "Reserve your spot, without any threat."
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
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {user.name}
          </Typography>
          <Typography>{user.email}</Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{
            margin: 2,
            ml: "auto",
            bgcolor: "rgb(43, 200, 190)",
          }}
          onClick={() => redirect("/profile/edit")}
        >
          Edit Profile
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
              <Typography sx={{ fontWeight: "bold", color: "black" }}>
                Contact Informations
              </Typography>
              <Box
                sx={{
                  height: "0.2px",
                  backgroundColor: "gray",
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
                    bgcolor: "rgba(43, 200, 190 , .2)",
                  }}
                >
                  <EmailIcon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190)" }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Email
                  </Typography>
                  <Typography sx={{ color: "gray" }}>{user.email}</Typography>
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
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <PhoneIcone
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190)" }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Phone Number
                  </Typography>
                  <Typography sx={{ color: "gray" }}>034 59 332 38</Typography>
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
              <Typography sx={{ fontWeight: "bold" }}>
                Location Details
              </Typography>
              <Box
                sx={{
                  height: "0.1px",
                  backgroundColor: "gray",
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
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <PlaceIcone
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190)" }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    address
                  </Typography>
                  Lot 227 FKTA Ankadivory
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
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <PublicIcon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190)" }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Country
                  </Typography>
                  {user.country.name}
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
            <Typography sx={{ fontWeight: "bold" }}>
              Personal informations
            </Typography>
            <Box
              sx={{
                height: "0.2px",
                backgroundColor: "gray",
                margin: "20px 0",
              }}
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
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <DateRangeIcon
                    sx={{ fontSize: 30, color: " rgb(43, 200, 190)" }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Created
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    {new Date(user.createdAt).toLocaleString()}
                  </Typography>
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
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <UpdateIcon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190)" }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Updated
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    {new Date(user.updatedAt).toLocaleString()}
                  </Typography>
                </Box>
              </FlexBox>
            </FlexBox>

            <FlexBox sx={{ justifyContent: "start", gap: 13.5, marginTop: 8 }}>
              <FlexBox>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <ManageAccountsIcon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190) " }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Role
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    {user.role.title}
                  </Typography>
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
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <ApartmentIcon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190)" }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Company Name
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    Tech Innovators Inc.
                  </Typography>
                </Box>
              </FlexBox>
            </FlexBox>

            <FlexBox sx={{ justifyContent: "start", gap: 8.5, marginTop: 8 }}>
              <FlexBox>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <LoginIcon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190) " }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Last Login
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    {" "}
                    03 April 2025{" "}
                  </Typography>
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
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <TransgenderIcon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190)" }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Gender
                  </Typography>
                  <Typography sx={{ color: "gray" }}>Male</Typography>
                </Box>
              </FlexBox>
            </FlexBox>

            <FlexBox sx={{ justifyContent: "start", gap: 8, marginTop: 8 }}>
              <FlexBox>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <LanguageIcon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190) " }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Nationality
                  </Typography>
                  <Typography sx={{ color: "gray" }}>Malagasy</Typography>
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
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <Diversity1Icon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190)" }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Marital Status
                  </Typography>
                  <Typography sx={{ color: "gray" }}>Married</Typography>
                </Box>
              </FlexBox>
            </FlexBox>

            <FlexBox sx={{ justifyContent: "start", gap: 8, marginTop: 8 }}>
              <FlexBox>
                <FlexBox
                  sx={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <WorkIcon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190) " }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    Occupation
                  </Typography>
                  <Typography sx={{ color: "gray" }}>Web Developer</Typography>
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
                    bgcolor: " rgba(43, 200, 190, .2) ",
                  }}
                >
                  <LinkedInIcon
                    sx={{ fontSize: 30, color: "rgb(43, 200, 190)" }}
                  />
                </FlexBox>
                <Box>
                  <Typography sx={{ fontWeight: "bold", marginRight: 20 }}>
                    LinkedIn
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    linkedin.com/in/tsong
                  </Typography>
                </Box>
              </FlexBox>
            </FlexBox>
          </Box>
        </FlexBox>
      </Box>
    </>
  );
};

export default ProfilePage;
