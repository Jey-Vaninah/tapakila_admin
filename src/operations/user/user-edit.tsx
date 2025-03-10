import {
  Button,
  Edit,
  ImageInput,
  SaveButton,
  SelectInput,
  ShowButton,
  SimpleForm,
  TextInput,
  Toolbar,
  TopToolbar,
  UrlField,
} from "react-admin";
import { Role } from "../../providers";

const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
    <Button label="Shutdown" />
    <Button label="Shutdown Force" />
  </Toolbar>
);

const UserEditActions = () => (
  <TopToolbar>
    <ShowButton />
    <Button label="Shutdown" />
    <Button label="Shutdown Force" />
  </TopToolbar>
);
export const UserEdit = () => (
  <Edit actions={<UserEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput readOnly label="Id" source="id" />
      <SelectInput source="role" choices={[Role.ADMIN , Role.USER]}/>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="email_verified_at" />
      <TextInput source="email" />
      <TextInput source="create_at" />
      <TextInput source="updated_at" />
      <TextInput source="deleted_at" />
      <ImageInput source="image_url" />
    </SimpleForm>
  </Edit>
);
