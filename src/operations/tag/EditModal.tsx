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

interface Tag {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

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
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialDates, setInitialDates] = useState({
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null as Date | null,
  });

  // Initialize form with tag data when modal opens or tagData changes
  useEffect(() => {
    if (tagData) {
      setFormData({
        title: tagData.title,
        description: tagData.description,
      });
      setInitialDates({
        createdAt: toDate(tagData.createdAt),
        updatedAt: toDate(tagData.updatedAt),
        deletedAt: tagData.deletedAt ? toDate(tagData.deletedAt) : null,
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
      const updateData: Partial<Tag> = {
        title: formData.title,
        description: formData.description,
        updatedAt: new Date(),
      };

      await tagProvider.saveOrUpdate({
        meta: { mutationType: "UPDATE" },
        id: tagData.id,
        data: updateData,
        previousData: tagData,
      });

      onClose();
      onSuccess();
    } catch (err) {
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
          Edit Tag
        </Typography>
        <Typography id="modal-desc" color="text.secondary" sx={{ mb: 2 }}>
          Update the information for this tag.
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Tag ID"
              variant="outlined"
              value={tagData?.id || ""}
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
              label="Title"
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
            <TextField
              label="Created Date"
              variant="outlined"
              value={initialDates.createdAt.toLocaleString()}
              InputProps={{ readOnly: true }}
              fullWidth
            />
            <TextField
              label="Updated Date"
              variant="outlined"
              value={initialDates.updatedAt.toLocaleString()}
              InputProps={{ readOnly: true }}
              fullWidth
            />
            {initialDates.deletedAt && (
              <TextField
                label="Delete Date"
                variant="outlined"
                value={initialDates.deletedAt.toLocaleString()}
                InputProps={{ readOnly: true }}
                fullWidth
              />
            )}
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
