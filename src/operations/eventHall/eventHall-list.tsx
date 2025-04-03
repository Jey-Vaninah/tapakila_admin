import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  FunctionField,
  useListContext,
  DateField,
  useRefresh,
  Button,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";
import { Box, Paper, Typography } from "@mui/material";
import { Pagination } from "../../common/components/pagination";
import { useState } from "react";
import { EventHall } from "../../providers/types";
import useStore from "../../common/utils/useStore";
import CreateModal from "./CreateModal";
import EditModal from "./EditModal";

export const EventHallList = () => {
  const { isOpen, openButton, closeButton } = useStore();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEventHall, setSelectedEventHall] = useState<EventHall | null>(null);
  const refresh = useRefresh();

  const handleEditClick = (eventHall: EventHall) => {
    setSelectedEventHall(eventHall);
    setEditModalOpen(true);
  };

  const handleEditSuccess = () => {
    setEditModalOpen(false);
    refresh();
  };
  return (
    <>
      <FlexBox sx={{ justifyContent: "space-between", mb: 5 }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Event halls
        </Typography>
        <Button
          resource="venue"
          label=" Add Event hall"
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
          onClick={openButton}
        />
        <CreateModal isOpen={isOpen} onClose={closeButton} onSuccess={handleEditSuccess} />
        <EditModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          eventHallData={selectedEventHall}
          onSuccess={handleEditSuccess}
        />
      </FlexBox>
      <List resource="venue" pagination={<Pagination />} actions={false}>
        <EventHallListContent onEditClick={handleEditClick}/>
      </List>
    </>
  );
};

interface EventHallListContentProps {
  onEditClick: (eventHall: EventHall) => void;
}

const EventHallListContent = ({ onEditClick }: EventHallListContentProps) => {
  const { isLoading } = useListContext();

  if (isLoading) {
    return (
      <FlexBox
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Loading />
      </FlexBox>
    );
  }

  return (
    <>
      <Paper sx={{ p: 5 }}>
        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            All Hosts
          </Typography>
        </Box>
        <Datagrid
          bulkActionButtons={false}
          sx={{ border: "2px solid rgba(0,0,0,.1)", mt: 5 }}
        >
          <TextField source="name" label="Name" />
          <DateField source="createdAt" label="Creation Date" />
          <DateField source="updatedAt" label="Update Date" />
          <FunctionField
            label="Actions"
            render={(record: EventHall) => {
              return (
                <FlexBox sx={{ justifyContent: "start", gap: 2 }}>
                  <DeleteButton />
                  <EditButton 
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onEditClick(record);
                  }}/>
                </FlexBox>
              );
            }}
          />
        </Datagrid>
      </Paper>
    </>
  );
};
