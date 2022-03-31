import { Global } from "@emotion/react";
import { Box, SwipeableDrawer, Toolbar } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import Sidebar from "../Sidebar";

interface SidebarDrawerProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  open,
  onOpen,
  onClose,
}) => {
  return (
    <>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        anchor="left"
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
      >
        <Toolbar />
        <Box
          sx={{
            position: "absolute",
            top: 60,
            height: 30,
            right: -20,
            width: 20,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            visibility: "visible",
            border: "2px solid #00000030",
            alignContent: "center",
          }}
        >
          <ChevronRightIcon sx={{ height: "100%" }} />
        </Box>
        <Sidebar />
        Hello
      </SwipeableDrawer>
    </>
  );
};

export { SidebarDrawer };
