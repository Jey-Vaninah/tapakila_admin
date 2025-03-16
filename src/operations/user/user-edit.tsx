import {
  Button,
  Edit,
  email,
  FunctionField,
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
import { RoleEnum, User } from "../../providers";

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
      <SelectInput
        validate={[required()]}
        source="roleId"
        choices={[RoleEnum.ADMIN_EVENTS, RoleEnum.USER]}
      />
      <TextInput source="name" validate={[required()]} />
      <TextInput source="username" validate={[required()]} />
      <TextInput source="email" validate={[required(), email()]} />
      <TextInput label="Country" source="countryId.name" />
      <ImageInput source="imageUrl" />

    </SimpleForm>
  </Edit>
);
