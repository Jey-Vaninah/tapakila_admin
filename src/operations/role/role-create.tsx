import { Create, SimpleForm, TextInput, required } from "react-admin";

export const RoleCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" readOnly />
      <TextInput source="title" validate={[required()]} />
    </SimpleForm>
  </Create>
);
