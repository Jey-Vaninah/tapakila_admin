import {
    Button,
    Edit,
    SaveButton,
    ShowButton,
    SimpleForm,
    TextInput,
    DateInput,
    Toolbar,
    TopToolbar,
  } from "react-admin";
  
  const CustomToolbar = () => (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <SaveButton />
      <Button label="Shutdown" />
      <Button label="Shutdown Force" />
    </Toolbar>
  );
  
  const EventHallEditActions = () => (
    <TopToolbar>
      <ShowButton />
      <Button label="Shutdown" />
      <Button label="Shutdown Force" />
    </TopToolbar>
  );
  
  export const EventHallEdit = () => (
    <Edit actions={<EventHallEditActions />}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput readOnly label="Id" source="id" />
        <TextInput label="Name" source="name" />
        <DateInput label="Created At" source="createAt" />
        <DateInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
  