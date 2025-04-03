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
import { currencyProvider } from "../../providers/currency-provider";
import { Currency } from "../../providers/types";


interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  currencyData: Currency | null;
  onSuccess: () => void;
}

export default function EditModal({
  isOpen,
  onClose,
  currencyData,
  onSuccess,
}: EditModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
	const currency: Currency = {
    id: "",
		title: "",
    description: "",
		createdAt: new Date(),
		updatedAt: new Date()
	}
  const [formData, setFormData] = useState<Currency>(currency);
  // Initialize form with currency data when modal opens or currencyData changes
  useEffect(() => {
    if (currencyData) {
      setFormData({
        id: currencyData.id,
        title: currencyData.title,
        description: currencyData.title,
        createdAt: currencyData.createdAt,
        updatedAt: currencyData.updatedAt
      });
    }
  }, [currencyData]);

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

    if (!currencyProvider?.saveOrUpdate || !currencyData) {
      console.error("saveOrUpdate is undefined or no currency data");
      setError("Service unavailable or missing currency data");
      setLoading(false);
      return;
    }

    try {
      const updateData: Currency = {
        id: formData.id,
        title: formData.title,
        description: formData.description,
        createdAt: formData.createdAt,
        updatedAt: new Date(),
      };

      await currencyProvider.saveOrUpdate({
        meta: { mutationType: "UPDATE" },
        id: currencyData.id,
        data: updateData,
        previousData: currencyData,
      });

      onClose();
      onSuccess();
    } catch (err) {
      console.log(err);
      setError("Failed to update currency");
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
          width: 350,
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
          Edit Currency
        </Typography>
        <Typography id="modal-desc" color="text.secondary" sx={{ mb: 2 }}>
          Update the information for this currency.
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>

            <TextField
              label="Currency Name"
              name="title"
              variant="outlined"
              value={formData.title}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              variant="outlined"
              value={formData.description}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={4}
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
