import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
} from "react-admin";

export const CurrencyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" readOnly />
      <TextInput source="title" validate={[required()]} />
      <TextInput
        label="description"
        validate={[required()]}
      />
    </SimpleForm>
  </Create>
);
