import {
  List,
  Datagrid,
  TextField,
  FunctionField,
  DeleteButton,
  useListContext,
  DateField,
  Button,
  EditButton,
  useRefresh,
} from "react-admin";
import { FlexBox } from "../../common/components/flex-box.tsx";
import Loading from "../../common/components/loading.tsx";
import { Box, Paper, Typography } from "@mui/material";
import { Pagination } from "../../common/components/pagination.tsx";
import useStore from "../../common/utils/useStore.ts";
import CreateModal from "./CreateModal.tsx";
import EditModal from "./EditModal.tsx";
import { useState } from "react";
import { Country } from "../../providers/types.ts";


export const CountryList = () => {
  const { isOpen, openButton, closeButton } = useStore();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const refresh = useRefresh();

  const handleEditClick = (country: Country) => {
    setSelectedCountry(country);
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
          Countries
        </Typography>

        <Button
          resource="country"
          label=" + Add Country"
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
          onClick={openButton}
        />

        <CreateModal isOpen={isOpen} onClose={closeButton} onSuccess={handleEditSuccess} />
        <EditModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          countryData={selectedCountry}
          onSuccess={handleEditSuccess}
        />
      </FlexBox>
      <List resource="country" pagination={<Pagination />} actions={false}>
        <CountryListContent onEditClick={handleEditClick} />
      </List>
    </>
  );
};

interface CountryListContentProps {
  onEditClick: (country: Country) => void;
}

const CountryListContent = ({ onEditClick }: CountryListContentProps) => {
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
            All Countries
          </Typography>
        </Box>
        <Datagrid
          bulkActionButtons={false}
          sx={{ border: "2px solid rgba(0,0,0,.1)", mt: 5 }}
        >
          <TextField source="name" label="Name" />
          <DateField source="createdAt" label="Creation date" />
          <DateField source="updatedAt" label="Updated date" />
          <FunctionField
            label="Actions"
            render={(record: Country) => {
              return (
                <FlexBox sx={{ justifyContent: "start", gap: 2 }}>
                  <DeleteButton />
                  <EditButton
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      onEditClick(record);
                    }}
                  />
                </FlexBox>
              );
            }}
          />
        </Datagrid>
      </Paper>
    </>
  );
};
