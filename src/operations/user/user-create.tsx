import {
  Create,
  email,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
  UrlField,
} from "react-admin";
import { RoleEnum } from "../../providers";
import { v4 } from "uuid";

export const UserCreate = () => (
  <Create
    transform={(data) => {
      return { ...data, id: v4() };
    }}
  >
    <SimpleForm>
      <SelectInput
        defaultValue={RoleEnum.USER}
        validate={[required()]}
        source="roleId"
        choices={[RoleEnum.ADMIN_EVENTS, RoleEnum.USER]}
      />
      <TextInput source="name" validate={[required()]} />
      <TextInput source="username" validate={[required()]} />
      <TextInput source="email" validate={[required(), email()]} />
      <TextInput label="Country" source="countryId.name" validate={[required()]} />
      <UrlField source="imageUrl" />
    </SimpleForm>
  </Create>
);
