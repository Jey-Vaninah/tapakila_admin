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
  
  export const EventHallList = () => {
    return (
      <List>
        <EventHallListContent />
      </List>
    );
  };
  
  const EventHallListContent = () => {
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
        <TextField source="name" label="Name" />
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
  