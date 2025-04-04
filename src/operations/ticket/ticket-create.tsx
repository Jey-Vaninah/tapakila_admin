import { useState, useEffect } from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  required,
  useGetList,
  SelectInput,
} from "react-admin";
import { TicketType } from "../../providers";

export const TicketCreate = () => {
  const { data: ticketTypes = [] } = useGetList("typeTicket");
  const { data: events = [] } = useGetList("event");
  const { data: users = [] } = useGetList("user");
  const { data: currencies = [] } = useGetList("currency");

  // State to track the selected event
  const [selectedEvent, setSelectedEvent] = useState("");

  // State to store filtered ticket types
  const [filteredTicketTypes, setFilteredTicketTypes] = useState<TicketType[]>(
    []
  );

  // Filter ticket types when the selected event changes
  useEffect(() => {
    if (selectedEvent) {
      console.log(selectedEvent);

      const filtered = ticketTypes.filter(
        (ticketType) => ticketType.event.id === selectedEvent
      );
      setFilteredTicketTypes(filtered);
    } else {
      setFilteredTicketTypes([]);
    }
  }, [selectedEvent, ticketTypes]);

  return (
    <Create>
      <SimpleForm sx={{ width: "50%", padding: "32px" }}>
        <NumberInput
          label="Ticket Number"
          source="ticketNumber"
          fullWidth
          variant="outlined"
          sx={{
            "marginBottom": 2,
            "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
            "& .MuiOutlinedInput-root": {
              "borderRadius": 2,
              "borderColor": "rgb(43, 200, 190)",
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
          label="Event"
          source="event.id"
          choices={events.map((event) => ({
            id: event.id,
            name: event.title,
          }))}
          onChange={(event) => setSelectedEvent(event.target.value)} // Update selected event
          validate={[required()]}
          sx={{
            "marginBottom": 2,
            "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
            "& .MuiOutlinedInput-root": {
              "borderRadius": 2,
              "borderColor": "rgb(43, 200, 190)",
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

        {/* Ticket Type Dropdown */}
        <SelectInput
          label="Ticket Type"
          source="ticketType.id"
          choices={filteredTicketTypes.map((ticketType) => ({
            id: ticketType.id,
            name: ticketType.title,
          }))}
          validate={[required()]}
          sx={{
            "marginBottom": 2,
            "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
            "& .MuiOutlinedInput-root": {
              "borderRadius": 2,
              "borderColor": "rgb(43, 200, 190)",
              "&:hover fieldset": {
                borderColor: "rgb(43, 200, 190)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgb(43, 200, 190)",
                color: "rgb(43, 200, 190)",
              },
            },
          }}
          disabled={!selectedEvent} // Disable until an event is selected
        />

        <SelectInput
          label="User"
          source="user.id"
          choices={users.map((user) => ({
            id: user.id,
            name: user.name,
          }))}
          validate={[required()]}
          sx={{
            "marginBottom": 2,
            "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
            "& .MuiOutlinedInput-root": {
              "borderRadius": 2,
              "borderColor": "rgb(43, 200, 190)",
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
          source="amountPaid"
          validate={[required()]}
          sx={{
            "marginBottom": 2,
            "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
            "& .MuiOutlinedInput-root": {
              "borderRadius": 2,
              "borderColor": "rgb(43, 200, 190)",
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
            "marginBottom": 2,
            "& .MuiInputLabel-root": { color: "rgb(43, 200, 190)" },
            "& .MuiOutlinedInput-root": {
              "borderRadius": 2,
              "borderColor": "rgb(43, 200, 190)",
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
      </SimpleForm>
    </Create>
  );
};
