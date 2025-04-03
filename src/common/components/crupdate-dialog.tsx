import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import { ComponentType } from "react";

export type CrupdateDialogProps<T> = {
  title: string;
  open: boolean;
  description: string;
  data?: T;
  onClose: () => void;
  Component: ComponentType<{ data?: any }>;
};

export const CrupdateDialog = <T,>({
  data,
  title,
  description,
  open,
  onClose,
  Component,
}: CrupdateDialogProps<T>) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>{description}</Typography>
        {<Component data={data} />}
      </DialogContent>
    </Dialog>
  );
};
