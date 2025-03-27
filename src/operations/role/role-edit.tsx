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

const RoleEditActions = () => (
  <TopToolbar>
    <ShowButton />
    <Button label="Shutdown" />
    <Button label="Shutdown Force" />
  </TopToolbar>
);

export const RoleEdit = () => (
  <Edit actions={<RoleEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput readOnly label="Role Id" source="id" />
      <TextInput label="Role Name" source="title" />
      <DateInput readOnly label="Created At" source="createAt" />
      <DateInput readOnly label="Updated At" source="updatedAt" />
    </SimpleForm>
  </Edit>
);
