import {
  List,
  Datagrid,
  TextField,
  FunctionField,
  DeleteButton,
  EditButton,
  useListContext,
  DateField,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";

export const RoleList = () => {
  return (
    <List resource="role">
      <RoleListContent />
    </List>
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
    <Datagrid bulkActionButtons={false}>
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
  );
};
