import {
  Edit,
  SaveButton,
  ShowButton,
  SimpleForm,
  TextInput,
  NumberInput,
  Toolbar,
  TopToolbar,
  useGetList,
  SelectInput,
  required,
} from "react-admin";
import { Box } from "@mui/material";


// Barre d'outils personnalisée
const CustomToolbar = () => (
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);

// Actions du formulaire d'édition de ticket
const TicketEditActions = () => (
  <TopToolbar>
    <ShowButton />
  </TopToolbar>
);


export const TicketEdit = () => {
  const { data: currencies = [] } = useGetList("currency");
  const { data: ticketTypes = [] } = useGetList("typeTicket");

  return (
    <Edit actions={<TicketEditActions />}>
      <SimpleForm toolbar={<CustomToolbar />} sx={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 4,
            gap: "50px",
            padding: "32px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <TextInput
              label="Ticket Number"
              source="ticketNumber"
              fullWidth
              variant="outlined"
			  readOnly
              sx={{
                marginBottom: 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  borderColor: "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
            <SelectInput
              label="Ticket Type"
              source="ticketType.id"
              choices={ticketTypes.map((ticketType) => ({
                id: ticketType.id,
                name: ticketType.title,
              }))}
              validate={[required()]}
              sx={{
                marginBottom: 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  borderColor: "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
            <NumberInput
              label="Amount Paid"
              source="amountPaid"
              variant="outlined"
              sx={{
                marginBottom: 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  borderColor: "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
             <SelectInput
              label="Currency"
              source="currency.id"
              choices={currencies.map((currency) => ({
                id: currency.id,
                name: currency.title,
              }))}
              validate={[required()]}
              sx={{
                marginBottom: 2,
                "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  borderColor: "rgb(43, 200, 190)",
                  "&:hover fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(43, 200, 190)",
                    color: "rgb(43, 200, 190)",
                  },
                },
              }}
            />
          </Box>

          <Box sx={{ width: "50%" }}>



          </Box>
        </div>
      </SimpleForm>
    </Edit>
  );
};
