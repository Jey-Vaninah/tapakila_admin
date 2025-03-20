import {
  Button,
  Edit,
  SaveButton,
  ShowButton,
  SimpleForm,
  TextInput,
  DateInput,
  Toolbar,
  TopToolbar,
  required,
  email,
} from "react-admin";

const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
    <Button label="Shutdown" />
    <Button label="Shutdown Force" />
  </Toolbar>
);

const NewsletterEditActions = () => (
  <TopToolbar>
    <ShowButton />
    <Button label="Shutdown" />
    <Button label="Shutdown Force" />
  </TopToolbar>
);

export const NewsletterEdit = () => (
  <Edit actions={<NewsletterEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput readOnly label="Newsletter Id" source="id" />
      <TextInput label="Name" source="name" />
      <TextInput source="email" validate={[required(), email()]} />
      <DateInput readOnly label="Created Date" source="createAt" />
      <DateInput readOnly label="Updated Date" source="updatedAt" />
      <DateInput readOnly label="Delete Date" source="updatedAt" />
    </SimpleForm>
  </Edit>
);
