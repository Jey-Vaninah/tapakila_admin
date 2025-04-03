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
import { hostProvider } from "../../providers/host-provider";
import { Host } from "../../providers/types";


interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  hostData: Host | null;
  onSuccess: () => void;
}

export default function EditModal({
  isOpen,
  onClose,
  hostData,
  onSuccess,
}: EditModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
	const host: Host = {
    id: "",
		name: "",
		createdAt: new Date(),
		updatedAt: new Date()
	}
  const [formData, setFormData] = useState<Host>(host);
  // Initialize form with host data when modal opens or hostData changes
  useEffect(() => {
    if (hostData) {
      setFormData({
        id: hostData.id,
        name: hostData.name,
        createdAt: hostData.createdAt,
        updatedAt: hostData.updatedAt
      });
    }
  }, [hostData]);

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

    if (!hostProvider?.saveOrUpdate || !hostData) {
      console.error("saveOrUpdate is undefined or no host data");
      setError("Service unavailable or missing host data");
      setLoading(false);
      return;
    }

    try {
      const updateData: Host = {
        id: formData.id,
        name: formData.name,
        createdAt: formData.createdAt,
        updatedAt: new Date(),
      };

      await hostProvider.saveOrUpdate({
        meta: { mutationType: "UPDATE" },
        id: hostData.id,
        data: updateData,
        previousData: hostData,
      });

      onClose();
      onSuccess();
    } catch (err) {
      console.log(err);
      setError("Failed to update host");
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
          Edit Host
        </Typography>
        <Typography id="modal-desc" color="text.secondary" sx={{ mb: 2 }}>
          Update the information for this host.
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>

            <TextField
              label="Host Name"
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
