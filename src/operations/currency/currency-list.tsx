import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  FunctionField,
  useListContext,
  DateField,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";

export const CurrencyList = () => {
  return (
    <List>
      <CurrencyListContent />
    </List>
  );
};

const CurrencyListContent = () => {
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
      <TextField source="id" label="Id" />
      <TextField source="title" label="Title" />
      <TextField source="description" label="Description"/>
      <DateField source="createdAt"label="Creation Date"/>
      <DateField source="updatedAt"label="Update Date"/>
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
