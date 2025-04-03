import {
  List,
  Datagrid,
  TextField,
  FunctionField,
  DeleteButton,
  useListContext,
  DateField,
  Button,
  EditButton,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";
import { Box, Paper, Typography } from "@mui/material";
import { Pagination } from "../../common/components/pagination";
import useStore from "../../common/utils/useStore.ts";
import CreateModal from "./CreateModal.tsx";
import EditModal from "./EditModal.tsx";
import { useState } from "react";

interface Tag {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export const TagList = () => {
  const { isOpen, openButton, closeButton } = useStore();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);

  const handleEditClick = (tag: Tag) => {
    setSelectedTag(tag);
    setEditModalOpen(true);
  };

  const handleEditSuccess = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      <FlexBox sx={{ justifyContent: "space-between", mb: 5 }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Tags
        </Typography>

        <Button
          resource="tag"
          label=" + Add Tag"
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
          onClick={openButton}
        />

        <CreateModal isOpen={isOpen} onClose={closeButton} />
        <EditModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          tagData={selectedTag}
          onSuccess={handleEditSuccess}
        />
      </FlexBox>
      <List resource="tag" pagination={<Pagination />} actions={false}>
        <TagListContent onEditClick={handleEditClick} />
      </List>
    </>
  );
};

interface TagListContentProps {
  onEditClick: (tag: Tag) => void;
}

const TagListContent = ({ onEditClick }: TagListContentProps) => {
  const { isLoading } = useListContext();

  if (isLoading) {
    return (
      <FlexBox
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Loading />
      </FlexBox>
    );
  }

  return (
    <>
      <Paper sx={{ p: 5 }}>
        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            All Tags
          </Typography>
        </Box>
        <Datagrid
          bulkActionButtons={false}
          sx={{ border: "2px solid rgba(0,0,0,.1)", mt: 5 }}
        >
          <TextField source="title" label="Title" />
          <TextField source="description" label="Description" />
          <DateField source="createdAt" label="Creation date" />
          <DateField source="updatedAt" label="Updated date" />
          <FunctionField
            label="Actions"
            render={(record: Tag) => {
              return (
                <FlexBox sx={{ justifyContent: "start", gap: 2 }}>
                  <DeleteButton />
                  <EditButton
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      onEditClick(record);
                    }}
                  />
                </FlexBox>
              );
            }}
          />
        </Datagrid>
      </Paper>
    </>
  );
};
