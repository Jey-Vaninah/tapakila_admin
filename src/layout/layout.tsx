import { Box, Typography } from "@mui/material"
import { FC, ReactNode } from "react"

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box sx={{bgcolor: ""}}>
            <Typography variant="h1">Hello</Typography>
                {children}
        </Box>
    )
}