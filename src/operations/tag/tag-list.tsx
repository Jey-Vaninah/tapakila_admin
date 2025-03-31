import {
  List,
  Datagrid,
  TextField,
  FunctionField,
  DeleteButton,
  EditButton,
  useListContext,
  DateField,
  CreateButton,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";
import { Box, Paper, Typography } from "@mui/material";
import { Pagination } from "../../common/components/pagination";

export const TagList = () => {
  return (
    <>
      <FlexBox sx={{ justifyContent: "space-between", mb: 5 }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Tags
        </Typography>
        <CreateButton
          resource="tag"
          label=" Add Tag"
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
        />
      </FlexBox>
      <List resource="tag" pagination={<Pagination />} actions={false}>
        <TagListContent />
      </List>
    </>
  );
};

const TagListContent = () => {
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
          <DateField source="createdAt" label="delete date" />
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
