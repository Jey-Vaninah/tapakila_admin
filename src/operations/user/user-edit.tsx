import {
  Edit,
  email,
  ImageInput,
  required,
  SaveButton,
  SelectInput,
  ShowButton,
  SimpleForm,
  TextInput,
  Toolbar,
  TopToolbar,
} from "react-admin";

const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);

const UserEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);

export const UserEdit = () => (
  <Edit actions={<UserEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput readOnly label="Id" source="id" />
      <TextInput source="name" validate={[required()]} />
      <TextInput source="username" validate={[required()]} />
      <TextInput source="email" validate={[required(), email()]} />
      <TextInput label="Country" source="country.name" />
      <ImageInput source="imageUrl" />
    </SimpleForm>
  </Edit>
);
