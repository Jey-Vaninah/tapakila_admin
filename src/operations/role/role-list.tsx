import {
  List,
  Datagrid,
  TextField,
  FunctionField,
  DeleteButton,
  EditButton,
  useListContext,
  DateField,
  Button,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";
import { Box, Paper, Typography } from "@mui/material";
import { Pagination } from "../../common/components/pagination";
import useStore from '../../common/utils/useStore.ts';
import BasicModal from "../../common/components/BasicModal";

export const RoleList = () => {
  const {isOpen, openButton, closeButton} = useStore();
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

        <BasicModal isOpen={isOpen} onClose={closeButton}/>
      </FlexBox>
      <List resource="role" pagination={<Pagination />} actions={false}>
        <RoleListContent />
      </List>
    </>
  );
};

const RoleListContent = () => {
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
            render={() => {
              return (
                <FlexBox sx={{ justifyContent: "start", gap: 2 }}>
                  <DeleteButton />
                  <EditButton />
                </FlexBox>
              );
            }}
          />
        </Datagrid>
      </Paper>
    </>
  );
};
