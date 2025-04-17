import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const { palette } = useTheme();
  return (
    <>
      <Box
        sx={{
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: palette.light,
          borderTop: '1px solid gray'
        }}
      >
        <Box component="span" sx={{ color: palette.main }}>
          All rights reserved! 2023.
        </Box>
      </Box>
    </>
  );
};

export default Footer;
