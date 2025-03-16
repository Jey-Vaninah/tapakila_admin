import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Avatar, Button } from "@mui/material";
import { useRedirect, useDataProvider } from "react-admin";
import { User } from "../../providers/types";

const ProfilePage = () => {
  const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const userId = "1"; // Supposons que l'utilisateur actuel est "1"

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    dataProvider
      .getOne("user", { id: userId })
      .then(({ data }) => setUser(data));
  }, [dataProvider]);

  if (!user) return <p>Chargement...</p>;

  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 5, p: 3 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Avatar
          src={user.imageUrl}
          sx={{ width: 85, height: 85, margin: "auto" }}
        />
        <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
          {user.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {user.roleId?.title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {user.email}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => redirect("/profile/edit")}
        >
          Modifier
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfilePage;
