import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

export const FlexBox: FC<BoxProps> = ({sx = {}, ...props}) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                ...sx
            }}
            {...props}
        />
    )
}