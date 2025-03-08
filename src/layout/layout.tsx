import { Box, SxProps } from "@mui/material"
import { FC, ReactNode } from "react"
import {Menu} from "./menu"

const LAYOUT_SX: SxProps = {
    width: "100%",
    height: "100vh",
    overflowY: "scroll",
    bgcolor: "red"
}

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box sx={LAYOUT_SX}>
            <Menu />
        </Box>
    )
}