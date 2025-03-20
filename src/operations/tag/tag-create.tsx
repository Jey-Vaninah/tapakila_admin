import { Create, SimpleForm, TextInput, required } from "react-admin";

export const TagCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" readOnly />
      <TextInput source="tille" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
    </SimpleForm>
  </Create>
);
