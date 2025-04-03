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
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialDates, setInitialDates] = useState({
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  // Initialize form with role data when modal opens or roleData changes
  useEffect(() => {
    if (roleData) {
      setTitle(roleData.title);
      setInitialDates({
        createdAt: toDate(roleData.createdAt),
        updatedAt: toDate(roleData.updatedAt),
      });
    }
  }, [roleData]);

  // Helper function to safely convert to Date
  const toDate = (
    date: Date | string | undefined,
    fallback = new Date()
  ): Date => {
    if (!date) return fallback;
    return date instanceof Date ? date : new Date(date);
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
      const updateData: Partial<Role> = {
        title,
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
              label="Role ID"
              variant="outlined"
              value={roleData?.id || ""}
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{
                "& .MuiInputBase-input.Mui-readOnly": {
                  cursor: "default",
                  backgroundColor: "rgba(0, 0, 0, 0.04)", // Fond légèrement grisé
                },
              }}
            />
            <TextField
              label="Role Name"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
