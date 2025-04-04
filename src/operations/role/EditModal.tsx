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
import { roleProvider } from "../../providers/role-provider";
import { Role } from "../../providers/types";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleData: Role | null;
  onSuccess: () => void;
}

export default function EditModal({
  isOpen,
  onClose,
  roleData,
  onSuccess,
}: EditModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const role: Role = {
    id: "",
    title: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const [formData, setFormData] = useState<Role>(role);
  // Initialize form with role data when modal opens or roleData changes
  useEffect(() => {
    if (roleData) {
      setFormData({
        id: roleData.id,
        title: roleData.title,
        createdAt: roleData.createdAt,
        updatedAt: roleData.updatedAt,
      });
    }
  }, [roleData]);

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

    if (!roleProvider?.saveOrUpdate || !roleData) {
      console.error("saveOrUpdate is undefined or no role data");
      setError("Service unavailable or missing role data");
      setLoading(false);
      return;
    }

    try {
      const updateData: Role = {
        id: formData.id,
        title: formData.title,
        createdAt: formData.createdAt,
        updatedAt: new Date(),
      };

      await roleProvider.saveOrUpdate({
        meta: { mutationType: "UPDATE" },
        id: roleData.id,
        data: updateData,
        previousData: roleData,
      });

      onClose();
      onSuccess();
    } catch (err) {
      console.log(err);
      setError("Failed to update role");
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
          Edit Role
        </Typography>
        <Typography id="modal-desc" color="text.secondary" sx={{ mb: 2 }}>
          Update the information for this role.
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Role Name"
              name="title"
              variant="outlined"
              value={formData.title}
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
