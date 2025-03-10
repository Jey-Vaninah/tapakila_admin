import {
  Create,
  email,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
  UrlField,
} from "react-admin";
import { Role } from "../../providers";
import { v4 } from "uuid";

export const UserCreate = () => (
  <Create
    transform={(data) => {
      return { ...data, id: v4() };
    }}
  >
    <SimpleForm>
      <SelectInput
        defaultValue={Role.USER}
        validate={[required()]}
        source="role"
        choices={[Role.ADMIN_EVENTS, Role.USER]}
      />
      <TextInput source="name" validate={[required()]} />
      <TextInput source="username" validate={[required()]} />
      <TextInput source="email" validate={[required(), email()]} />
      <UrlField source="image_url" />
    </SimpleForm>
  </Create>
);
