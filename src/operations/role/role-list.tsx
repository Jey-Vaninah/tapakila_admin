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
  useRefresh,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";
import { Box, Paper, Typography } from "@mui/material";
import { Pagination } from "../../common/components/pagination";
import useStore from "../../common/utils/useStore.ts";
import BasicModal from "./CreateModal.tsx";
import EditModal from "./EditModal.tsx";
import { useState } from "react";
import { Role } from "../../providers/types.ts";


export const RoleList = () => {
  const { isOpen, openButton, closeButton } = useStore();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const refresh = useRefresh()

  const handleEditClick = (role: Role) => {
    setSelectedRole(role);
    setEditModalOpen(true);
  };

  const handleEditSuccess = () => {
    setEditModalOpen(false);
	  refresh();
  };

  return (
    <>
      <FlexBox sx={{ justifyContent: "space-between", mb: 5 }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Roles
        </Typography>

        <Button
          resource="role"
          label=" + Add Role"
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
          onClick={openButton}
        />

        <BasicModal isOpen={isOpen} onClose={closeButton} onSuccess={handleEditSuccess}/>
        <EditModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          roleData={selectedRole}
          onSuccess={handleEditSuccess}
        />
      </FlexBox>
      <List resource="role" pagination={<Pagination />} actions={false}>
        <RoleListContent onEditClick={handleEditClick} />
      </List>
    </>
  );
};

interface RoleListContentProps {
  onEditClick: (role: Role) => void;
}

const RoleListContent = ({ onEditClick }: RoleListContentProps) => {
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
            All Roles
          </Typography>
        </Box>
        <Datagrid
          bulkActionButtons={false}
          sx={{ border: "2px solid rgba(0,0,0,.1)", mt: 5 }}
        >
          <TextField source="title" label="Title" />
          <DateField source="createdAt" label="Creation date" />
          <DateField source="updatedAt" label="Updated date" />
          <FunctionField
            label="Actions"
            render={(record: Role) => {
              return (
                <FlexBox sx={{ justifyContent: "start", gap: 2 }}>
                  <DeleteButton />
                  {/* Replace EditButton with custom button */}
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
