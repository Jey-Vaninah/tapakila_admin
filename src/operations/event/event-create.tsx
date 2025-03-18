import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  TimeInput,
  required,
  SelectInput,
} from "react-admin";
import { v4 } from "uuid";
import { Status } from "../../providers";

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
      <DateInput source="startDate" validate={[required()]} />
      <TimeInput source="startTime" validate={[required()]} />
      <DateInput source="endDate" validate={[required()]} />
      <TimeInput source="endTime" validate={[required()]} />
      <TextInput source="ageLimit" validate={[required()]} />
      <SelectInput
        defaultValue={Status.CANCELED}
        validate={[required()]}
        source="status"
        choices={[Status.CANCELED, Status.DRAFT, Status.PUBLISHED]}
      />
    </SimpleForm>
  </Create>
);
