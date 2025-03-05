import { List, Datagrid, TextField, EmailField,ImageField, DateField } from "react-admin"


export const UserList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" label="Id" />
        <TextField source="name" label="Name" />
        <TextField source="username" label="Username" />
        <DateField source="email_verified_at" label="Email Verification"showTime />
        <EmailField source="email" label="Email"/>
        <ImageField source="image_url" label="Profil" />
        <TextField source="country-id" label="Country" />
        <DateField source="create_at" label="Create" showTime/>
        <DateField source="updated_at" label="Update" showTime />
        <DateField source="deleted_at" label="delete" showTime />

      </Datagrid>
    </List>
  )
}

