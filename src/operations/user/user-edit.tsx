import {
  Button,
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
      <SelectInput validate={[required()]} source="role" choices={[Role.ADMIN_EVENTS, Role.USER]} />
      <TextInput source="name" validate={[required()]}/>
      <TextInput source="username"validate={[required()]} />
      <TextInput source="email" validate={[required(), email()]} />
       <ImageInput source="image_url" />
    </SimpleForm>
  </Edit>
);
