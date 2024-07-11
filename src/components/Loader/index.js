import React from "react";
import CircularProgress from "@mui/material/CircularProgress"; // Importing CircularProgress component from Material-UI
import Box from "@mui/material/Box"; // Importing Box component from Material-UI

// Inline style object for the Box component
const styleObj = {
  display: "flex", // Flex container
  alignItems: "center", // Center items vertically
  justifyContent: "center", // Center items horizontally
  height: "100vh", // Full viewport height
};

// Functional component Loader
const Loader = () => {
  return (
    <Box sx={styleObj}>
      {" "}
      {/* Box component with custom style */}
      <CircularProgress /> {/* CircularProgress component */}
    </Box>
  );
};

export default Loader; // Exporting Loader component as default