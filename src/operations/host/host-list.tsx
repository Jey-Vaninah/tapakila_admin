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
import useStore from "../../common/utils/useStore";
import { useState } from "react";
import { Host } from "../../providers/types";
import EditModal from "./EditModal";
import CreateModal from "./CreateModal";

export const HostList = () => {
  const { isOpen, openButton, closeButton } = useStore();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedHost, setSelectedHost] = useState<Host | null>(null);
  const refresh = useRefresh();

  const handleEditClick = (host: Host) => {
    setSelectedHost(host);
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
          All Hosts
        </Typography>
        <Button
          resource="host"
          label=" Add Host"
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
          onClick={openButton}        
        />
        <CreateModal isOpen={isOpen} onClose={closeButton} onSuccess={handleEditSuccess} />
        <EditModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          hostData={selectedHost}
          onSuccess={handleEditSuccess}
        />
      </FlexBox>
      <List resource="host" pagination={<Pagination />} actions={false}>
        <HostListContent onEditClick={handleEditClick}/>
      </List>
    </>
  );
};

interface CountryListContentProps {
  onEditClick: (host: Host) => void;
}


const HostListContent = ({ onEditClick }: CountryListContentProps) => {
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
            render={(record: Host) => {
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
