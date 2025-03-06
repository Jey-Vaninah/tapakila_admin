import { Create, SimpleForm, TextInput, UrlField } from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="email_verified_at" />
      <TextInput source="email" />
      <UrlField source="image_url" />
      <TextInput source="create_at" />
      <TextInput source="updated_at" />
      <TextInput source="deleted_at" />
    </SimpleForm>
  </Create>
);
