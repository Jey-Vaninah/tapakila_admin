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
import { RoleEnum } from "../../providers";

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
      <SelectInput
        validate={[required()]}
        source="roleId"
        choices={[RoleEnum.ADMIN_EVENTS, RoleEnum.USER]}
      />
      <TextInput source="name" validate={[required()]} />
      <TextInput source="username" validate={[required()]} />
      <TextInput source="email" validate={[required(), email()]} />
      <TextInput label="Country" source="country.name" />
      <ImageInput source="imageUrl" />
    </SimpleForm>
  </Edit>
);
