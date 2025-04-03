import { FC } from "react";
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
import { Currency } from "../../providers";

const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);

const CurrencyEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);

export const CurrencyEdit: FC<{ data: Currency }> = ({ data }) => (
  <Edit resource="currency" id={data.id} actions={<CurrencyEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput readOnly label="Id" source="id" />
      <TextInput label="Title" source="title" />
      <TextInput label="Description" source="description" />
      <DateInput label="Created At" source="createAt" />
      <DateInput label="Updated At" source="updatedAt" />
    </SimpleForm>
  </Edit>
);
