import React, { useState, useEffect } from "react";
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
import { Country } from "../../providers/types";


interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  countryData: Country | null;
  onSuccess: () => void;
}

export default function EditModal({
  isOpen,
  onClose,
  countryData,
  onSuccess,
}: EditModalProps) {
  const [formData, setFormData] = useState({
    name: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialDates, setInitialDates] = useState({
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  // Initialize form with country data when modal opens or countryData changes
  useEffect(() => {
    if (countryData) {
      setFormData({
        name: countryData.name
      });
      setInitialDates({
        createdAt: toDate(countryData.createdAt),
        updatedAt: toDate(countryData.updatedAt),
      });
    }
  }, [countryData]);

  // Helper function to safely convert to Date
  const toDate = (
    date: Date | string | undefined,
    fallback = new Date()
  ): Date => {
    if (!date) return fallback;
    return date instanceof Date ? date : new Date(date);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!countryProvider?.saveOrUpdate || !countryData) {
      console.error("saveOrUpdate is undefined or no country data");
      setError("Service unavailable or missing country data");
      setLoading(false);
      return;
    }

    try {
      const updateData: Partial<Country> = {
        name: formData.name,
        updatedAt: new Date(),
      };

      await countryProvider.saveOrUpdate({
        meta: { mutationType: "UPDATE" },
        id: countryData.id,
        data: updateData,
        previousData: countryData,
      });

      onClose();
      onSuccess();
    } catch (err) {
      setError("Failed to update country");
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
          Edit Country
        </Typography>
        <Typography id="modal-desc" color="text.secondary" sx={{ mb: 2 }}>
          Update the information for this country.
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Country ID"
              variant="outlined"
              value={countryData?.id || ""}
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{
                "& .MuiInputBase-input.Mui-readOnly": {
                  cursor: "default",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            />
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
              label="Created At"
              variant="outlined"
              value={initialDates.createdAt.toLocaleString()}
              InputProps={{ readOnly: true }}
              fullWidth
            />
            <TextField
              label="Updated At"
              variant="outlined"
              value={initialDates.updatedAt.toLocaleString()}
              InputProps={{ readOnly: true }}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{ bgcolor: "rgb(43, 200, 190)", color: "white" }}
            >
              {loading ? "Updating..." : "Update"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Modal>
  );
}
