import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetList } from 'react-admin';
import { Box, Typography } from '@mui/material';

const EventTickets = () => {
    const { eventId } = useParams<{ eventId: string }>();

	const { data, isLoading, error } = useGetList('ticketType');

	const filteredData = data ? data.filter((ticketTipe: any) => ticketTipe.event.id === eventId) : [];
    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error: {error.message}</Typography>;
    }

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                Tickets for Event {filteredData[0]?.event.title}
            </Typography>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
				{filteredData.map((ticketTipe: any) => (
					<Box key={ticketTipe.id} sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
						<Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>{ticketTipe.title}</Typography>
						<Typography variant="body1" sx={{ marginBottom: '4px' }}>Price: {ticketTipe.price}</Typography>
						<Typography variant="body2" sx={{ color: 'gray' }}>Available: {ticketTipe.availableTicket}</Typography>
					</Box>
				))}
			</Box>
        </Box>
    );
};

export default EventTickets;
