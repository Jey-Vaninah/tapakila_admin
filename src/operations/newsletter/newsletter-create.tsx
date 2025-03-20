import {
  Create,
  SimpleForm,
  TextInput,
  email,
  required,
} from "react-admin";

export const NewsletterCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" readOnly />
      <TextInput source="name" validate={[required()]} />
      <TextInput source="email" validate={[required(), email()]} />
      <TextInput source="tille" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
    </SimpleForm>
  </Create>
);
