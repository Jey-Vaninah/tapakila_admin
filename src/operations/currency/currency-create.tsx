import { Create, SimpleForm, TextInput, required } from "react-admin";

export const CurrencyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" readOnly />
      <TextInput source="title" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
    </SimpleForm>
  </Create>
);
