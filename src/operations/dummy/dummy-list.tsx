import { List, Datagrid, TextField } from "react-admin";

export const DummyList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" label="Id" />
        <TextField source="name" label="Name" />
      </Datagrid>
    </List>
  );
};
