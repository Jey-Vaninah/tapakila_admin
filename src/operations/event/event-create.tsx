import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  TimeInput,
  required,
  SelectInput,
} from "react-admin";
import { Status } from "../../providers";
import { v4 } from "uuid";

export const EventCreate = () => (
  <Create
    transform={(data) => {
      return { ...data, id: v4() };
    }}
  >
    <SimpleForm>
      <TextInput source="title" validate={[required()]} />
      <TextInput source="slug" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
      <DateInput source="start_date" validate={[required()]} />
      <TimeInput source="start_time" validate={[required()]} />
      <DateInput source="end_date" validate={[required()]} />
      <TimeInput source="end_time" validate={[required()]} />
      <TextInput source="age_limit" validate={[required()]} />
      <SelectInput
        defaultValue={Status.CANCELED}
        validate={[required()]}
        source="status"
        choices={[Status.CANCELED, Status.DRAFT, Status.PUBLISHED]}
      />
    </SimpleForm>
  </Create>
);
