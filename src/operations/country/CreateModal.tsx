import React, { useState } from "react";
import {
  Modal,
  Paper,
  IconButton,
  Typography,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { countryProvider } from "../../providers/counrty-provider";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CountryFormData {
  name: string;
  countryCode: string; // Note: Changé de 'code' à 'countryCode' pour correspondre au type
  phoneCode: string;
}

export default function CreateModal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState<CountryFormData>({
    name: "",
    countryCode: "",
    phoneCode: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!countryProvider?.saveOrUpdate) {
      console.error("saveOrUpdate is undefined");
      setError("Service unavailable");
      setLoading(false);
      return;
    }

    try {
      await countryProvider.saveOrUpdate({
        meta: { mutationType: "CREATE" },
        data: {
          name: formData.name,
          countryCode: formData.countryCode, // Utilisation de countryCode
          phoneCode: formData.phoneCode,
        },
      });
      onClose();
      setFormData({
        name: "",
        countryCode: "",
        phoneCode: "",
      });
    } catch (err) {
      setError("Failed to create country");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper
        variant="outlined"
        sx={{
          maxWidth: 500,
          borderRadius: 2,
          p: 3,
          position: "relative",
          boxShadow: 3,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "black" }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          component="h2"
          id="modal-title"
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Create New Country
        </Typography>
        <Typography id="modal-desc" color="text.secondary" sx={{ mb: 2 }}>
          Fill in the country information.
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Country Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Country Code (e.g., FR)"
              name="countryCode"
              variant="outlined"
              value={formData.countryCode}
              onChange={handleChange}
              required
              fullWidth
              inputProps={{
                maxLength: 3,
                style: { textTransform: "uppercase" },
              }}
            />
            <TextField
              label="Phone Code (e.g., +33)"
              name="phoneCode"
              variant="outlined"
              value={formData.phoneCode}
              onChange={handleChange}
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{ bgcolor: "rgb(43, 200, 190)", color: "white" }}
            >
              {loading ? "Saving..." : "Submit"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Modal>
  );
}
