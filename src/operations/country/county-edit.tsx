import {
  Edit,
  SaveButton,
  ShowButton,
  SimpleForm,
  TextInput,
  DateInput,
  Toolbar,
  TopToolbar,
} from "react-admin";

const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);

const CountryEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);

export const CountryEdit = () => (
  <Edit actions={<CountryEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput readOnly label="Country Id" source="id" />
      <TextInput readOnly label="Country Name" source="name" />
      <DateInput readOnly label="Created At" source="createAt" />
      <DateInput readOnly label="Updated At" source="updatedAt" />
    </SimpleForm>
  </Edit>
);
