import {
	Create,
	email,
	required,
	SelectInput,
	SimpleForm,
	TextInput,
	UrlField,
	useGetList,
} from "react-admin";

export const UserCreate = () => {
	  const { data: roles = [] } = useGetList("role");
	  const { data: countries = [] } = useGetList("country");

	  return (
	<Create>
		<SimpleForm>
			<SelectInput
				label="Role"
				source="role.id"
				choices={roles.map((role) => ({
					id: role.id,
					name: role.title,
				}))}
				validate={[required()]}
			/>
			<TextInput source="name" validate={[required()]} />
			<TextInput source="username" validate={[required()]} />
			<TextInput source="email" validate={[required(), email()]} />
			<TextInput source="password" validate={[required()]} />
			<SelectInput
				label="Country"
				source="country.id"
				choices={countries.map((country) => ({
					id: country.id,
					name: country.name,
				}))}
				validate={[required()]}
			/>
			<UrlField source="imageUrl" />
		</SimpleForm>
	</Create>
	  );
	};
