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
  
  const CurrencyEditActions = () => (
    <TopToolbar>
      <ShowButton />
      <Button label="Shutdown" />
      <Button label="Shutdown Force" />
    </TopToolbar>
  );
  
  export const CurrencyEdit = () => (
    <Edit actions={<CurrencyEditActions />}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput readOnly label="Id" source="id" />
        <TextInput label="Title" source="title" />
        <TextInput label="Description" source="description" />
        <DateInput label="Created At" source="createAt" />
        <DateInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
  