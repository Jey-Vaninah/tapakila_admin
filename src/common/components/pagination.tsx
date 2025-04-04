import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useListContext, useListController } from "react-admin";

import { FlexBox } from "./flex-box";
import { TooltipIconButton } from "./tooltip-icon-button";

export const Pagination = () => {
  const { page, hasNextPage, hasPreviousPage } = useListContext();
  const { setPage } = useListController();

  const doNextPage = () => {
    setPage(page + 1);
  };

  const doPrevPage = () => {
    setPage(page - 1);
  };

  return (
    <FlexBox sx={{ gap: 1, justifyContent: "end", bgcolor: "white", p: 1 }}>
      <TooltipIconButton
        size="small"
        title="ra.navigation.previous"
        disabled={!hasPreviousPage}
        onClick={doPrevPage}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: "17px" },
          "px": 2,
          "borderRadius": "10px",
        }}
      >
        <ArrowBackIos />
      </TooltipIconButton>
      {hasPreviousPage && (
        <TooltipIconButton
          size="small"
          title={(page - 1).toString()}
          translateTitle={false}
          sx={{ fontSize: "13px", py: 0.6, px: 2, borderRadius: "8px" }}
          onClick={doPrevPage}
        >
          {page - 1}
        </TooltipIconButton>
      )}
      <TooltipIconButton
        size="small"
        title={page.toString()}
        translateTitle={false}
        sx={{
          fontSize: "13px",
          py: 0.6,
          px: 2,
          bgcolor: "rgb(43, 200, 190)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        {page}
      </TooltipIconButton>
      {hasNextPage && (
        <TooltipIconButton
          size="small"
          title={(page + 1).toString()}
          translateTitle={false}
          sx={{ fontSize: "13px", py: 0.6, px: 2, borderRadius: "8px" }}
          onClick={doNextPage}
        >
          {page + 1}
        </TooltipIconButton>
      )}
      <TooltipIconButton
        title="ra.navigation.next"
        disabled={!hasNextPage}
        onClick={doNextPage}
        size="small"
        sx={{
          "& .MuiSvgIcon-root": { fontSize: "17px" },
          "px": 2,
          "borderRadius": "10px",
        }}
      >
        <ArrowForwardIos />
      </TooltipIconButton>
    </FlexBox>
  );
};
