import {
  Create,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

export const HostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" readOnly />
      <TextInput source="name" validate={[required()]} />
    </SimpleForm>
  </Create>
);
