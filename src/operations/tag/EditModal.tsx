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
import { tagProvider } from "../../providers/tag-provider";
import { Tag } from "../../providers/types";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  tagData: Tag | null;
  onSuccess: () => void;
}

export default function EditModal({
  isOpen,
  onClose,
  tagData,
  onSuccess,
}: EditModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const tag: Tag = {
    id: "",
    title: "",
    description: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  };
  const [formData, setFormData] = useState<Tag>(tag);
  // Initialize form with tag data when modal opens or tagData changes
  useEffect(() => {
    if (tagData) {
      setFormData({
        id: tagData.id,
        title: tagData.title,
        description: tagData.description,
        createdAt: toDate(tagData.createdAt),
        updatedAt: toDate(tagData.updatedAt),
        deletedAt: toDate(tagData.deletedAt),
      });
    }
  }, [tagData]);

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!tagProvider?.saveOrUpdate || !tagData) {
      console.error("saveOrUpdate is undefined or no tag data");
      setError("Service unavailable or missing tag data");
      setLoading(false);
      return;
    }

    try {
      const updateData: Tag = {
        id: formData.id,
        title: formData.title,
        description: formData.description,
        updatedAt: new Date(),
        createdAt: formData.createdAt,
        deletedAt: formData.deletedAt,
      };

      await tagProvider.saveOrUpdate({
        id: formData.id,
        data: updateData,
        previousData: tagData,
        meta: { mutationType: "UPDATE" },
      });

      onClose(); // Ferme la modal
      onSuccess(); // 🔥 Rafraîchit les données après mise à jour
    } catch (err) {
      console.log(err);
      setError("Failed to update tag");
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
          Edit Tag
        </Typography>
        <Typography id="modal-desc" color="text.secondary" sx={{ mb: 2 }}>
          Update the information for this tag.
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Title"
              name="title"
              variant="outlined"
              value={formData?.title}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              variant="outlined"
              value={formData?.description}
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
