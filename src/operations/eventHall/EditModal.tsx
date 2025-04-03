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
import { eventHallProvider } from "../../providers/venue-provider";
import { EventHall } from "../../providers/types";


interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventHallData: EventHall | null;
  onSuccess: () => void;
}

export default function EditModal({
  isOpen,
  onClose,
  eventHallData,
  onSuccess,
}: EditModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
	const eventHall: EventHall = {
    id: "",
		name: "",
		createdAt: new Date(),
		updatedAt: new Date()
	}
  const [formData, setFormData] = useState<EventHall>(eventHall);
  // Initialize form with eventHall data when modal opens or eventHallData changes
  useEffect(() => {
    if (eventHallData) {
      setFormData({
        id: eventHallData.id,
        name: eventHallData.name,
        createdAt: eventHallData.createdAt,
        updatedAt: eventHallData.updatedAt
      });
    }
  }, [eventHallData]);

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

    if (!eventHallProvider?.saveOrUpdate || !eventHallData) {
      console.error("saveOrUpdate is undefined or no eventHall data");
      setError("Service unavailable or missing eventHall data");
      setLoading(false);
      return;
    }

    try {
      const updateData: EventHall = {
        id: formData.id,
        name: formData.name,
        createdAt: formData.createdAt,
        updatedAt: new Date(),
      };

      await eventHallProvider.saveOrUpdate({
        meta: { mutationType: "UPDATE" },
        id: eventHallData.id,
        data: updateData,
        previousData: eventHallData,
      });

      onClose();
      onSuccess();
    } catch (err) {
      console.log(err);
      setError("Failed to update eventHall");
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
          Edit EventHall
        </Typography>
        <Typography id="modal-desc" color="text.secondary" sx={{ mb: 2 }}>
          Update the information for this eventHall.
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>

            <TextField
              label="EventHall Name"
              name="name"
              variant="outlined"
              value={formData.name}
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
              {loading ? "Updating..." : "Update"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Modal>
  );
}
