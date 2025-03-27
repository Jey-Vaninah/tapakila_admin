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
  </Toolbar>
);

const TagEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);

export const TagEdit = () => (
  <Edit actions={<TagEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput readOnly label="Tag Id" source="id" />
      <TextInput label="Title" source="title" />
      <TextInput label="Description" source="description" />
      <DateInput readOnly label="Created Date" source="createAt" />
      <DateInput readOnly label="Updated Date" source="updatedAt" />
      <DateInput readOnly label="Delete Date" source="updatedAt" />
    </SimpleForm>
  </Edit>
);
