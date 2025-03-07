import {
    Button,
    Edit,
    SaveButton,
    ShowButton,
    SimpleForm,
    TextInput,
    NumberInput,
    DateInput,
    Toolbar,
    TopToolbar,
  } from "react-admin";
  
  // Custom toolbar for the form
  const CustomToolbar = () => (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <SaveButton />
      <Button label="Shutdown" />
      <Button label="Shutdown Force" />
    </Toolbar>
  );
  
  // Custom actions for the Edit view
  const TicketEditActions = () => (
    <TopToolbar>
      <ShowButton />
      <Button label="Shutdown" />
      <Button label="Shutdown Force" />
    </TopToolbar>
  );
  
  export const TicketEdit = () => (
    <Edit actions={<TicketEditActions />}>
      <SimpleForm toolbar={<CustomToolbar />}>
        <TextInput disabled label="Ticket ID" source="id" />
        <TextInput label="Ticket Number" source="ticket_number" />
        <TextInput label="Ticket Type" source="ticket_type_id" />
        <TextInput label="User ID" source="user_id" />
        <NumberInput label="Amount Paid" source="amount_paid" />
        <TextInput label="Currency" source="currency_id" />
        <DateInput label="Created At" source="create_at" />
        <DateInput label="Updated At" source="updated_at" />
        <DateInput label="Deleted At" source="deleted_at" />
      </SimpleForm>
    </Edit>
  );
  