import React from "react";
import Alert from "@mui/material/Alert"; // Importing Alert component from Material-UI
import AlertTitle from "@mui/material/AlertTitle"; // Importing AlertTitle component from Material-UI
import Stack from "@mui/material/Stack"; // Importing Stack component from Material-UI

// Inline style object for the Stack component
const styleObj = {
  width: "100%", // Full width
  height: "100vh", // Full viewport height
  display: "flex", // Flex container
  alignItems: "center", // Center items vertically
  justifyContent: "center", // Center items horizontally
};

// Functional component ErrorPage
const ErrorPage = () => {
  return (
    <Stack sx={styleObj} spacing={2}>
      {/* Stack component with custom style and spacing */}
      <Alert sx={{ width: "1200px" }} severity="error">
        {" "}
        {/* Alert component with custom width and error severity */}
        <AlertTitle>Error</AlertTitle>{" "}
        {/* AlertTitle component with the title 'Error' */}
        <>
          {/* Fragment to group multiple elements */}
          <h1>404 - Page Not Found</h1>{" "}
          {/* Heading displaying the error message */}
          <p>Sorry, the page you are looking for could not be found.</p>{" "}
          {/* Paragraph with error explanation */}
        </>
      </Alert>
    </Stack>
  );
};

export default ErrorPage; // Exporting ErrorPage component as default