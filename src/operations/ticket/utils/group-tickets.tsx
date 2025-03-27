import { Ticket } from "../../../providers";

export type TicketGroup = {
    price: number;
    count: number; 
  };
  
  export const groupTicketsByPrice = (tickets: Ticket[]): TicketGroup[] => {
    const grouped = tickets.reduce((acc, ticket) => {
        const price = parseFloat(ticket.ticketType.price); 
        
  
      if (!acc[price]) {
        acc[price] = { price, count: 0 };
      }
      acc[price].count++;
  
      return acc;
    }, {} as Record<number, TicketGroup>);
  
    return Object.values(grouped);
  };
  