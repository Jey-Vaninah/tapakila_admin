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
import { Currency } from "../../providers/types";
import { useState } from "react";
import useStore from "../../common/utils/useStore";
import CreateModal from "./CreateModal";
import EditModal from "./EditModal";

export const CurrencyList = () => {
  const { isOpen, openButton, closeButton } = useStore();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    null
  );
  const refresh = useRefresh();

  const handleEditClick = (country: Currency) => {
    setSelectedCurrency(country);
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
          Currencies
        </Typography>
        <Button
          resource="currency"
          label=" Add Currency"
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
          onClick={openButton}
        />
        <CreateModal
          isOpen={isOpen}
          onClose={closeButton}
          onSuccess={handleEditSuccess}
        />
        <EditModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          currencyData={selectedCurrency}
          onSuccess={handleEditSuccess}
        />
      </FlexBox>
      <List resource="currency" pagination={<Pagination />} actions={false}>
        <CurrencyListContent onEditClick={handleEditClick} />
      </List>
    </>
  );
};

interface CountryListContentProps {
  onEditClick: (currency: Currency) => void;
}

const CurrencyListContent = ({ onEditClick }: CountryListContentProps) => {
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
            All Currencies
          </Typography>
        </Box>
        <Datagrid
          bulkActionButtons={false}
          sx={{ border: "2px solid rgba(0,0,0,.1)", mt: 5 }}
        >
          <TextField source="title" label="Title" />
          <TextField source="description" label="Description" />
          <DateField source="createdAt" label="Creation Date" />
          <DateField source="updatedAt" label="Update Date" />
          <FunctionField
            label="Actions"
            render={(record: Currency) => {
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
