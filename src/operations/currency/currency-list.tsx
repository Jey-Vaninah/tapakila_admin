import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  FunctionField,
  useListContext,
  DateField,
  Button,
} from "react-admin";
import { Add as CreateIcon, Edit as EditIcon } from "@mui/icons-material";
import { FlexBox } from "../../common/components/flex-box";
import Loading from "../../common/components/loading";
import { Box, Paper, Typography } from "@mui/material";
import { Pagination } from "../../common/components/pagination";
import { FC, useState } from "react";
import { CrupdateDialog } from "../../common/components/crupdate-dialog";
import { CurrencyEdit } from "./currency-edit";
import { Currency } from "../../providers";
import { CurrencyCreate } from "./currency-create";

export const CurrencyList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    null
  );

  const handleEdit = (currency: Currency) => {
    setSelectedCurrency(currency);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedCurrency(null);
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
          onClick={() => setIsOpen(true)}
          label=" Add Currency"
          startIcon={<CreateIcon />}
          sx={{ bgcolor: "rgb(43, 200, 190)", color: "white", py: 1, mt: 1 }}
        />
      </FlexBox>
      <List resource="currency" pagination={<Pagination />} actions={false}>
        <CurrencyListContent handleEdit={handleEdit} />
      </List>
      <CrupdateDialog
        title={selectedCurrency ? "Edit Currency" : "Create Currency"}
        description={
          selectedCurrency
            ? "Edit the currency details"
            : "Create a new currency"
        }
        open={isOpen}
        onClose={handleClose}
        Component={({ data }) =>
          data ? <CurrencyEdit data={data} /> : <CurrencyCreate />
        }
        data={selectedCurrency}
      />
    </>
  );
};

const CurrencyListContent: FC<{ handleEdit: (data: Currency) => void }> = ({
  handleEdit,
}) => {
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
          rowClick={false}
        >
          <TextField source="title" label="Title" />
          <TextField source="description" label="Description" />
          <DateField source="createdAt" label="Creation Date" />
          <DateField source="updatedAt" label="Update Date" />
          <FunctionField
            label="Actions"
            render={(data) => {
              return (
                <FlexBox sx={{ justifyContent: "start", gap: 2 }}>
                  <DeleteButton />
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      handleEdit(data);
                    }}
                    startIcon={<EditIcon />}
                    label="Edit"
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
