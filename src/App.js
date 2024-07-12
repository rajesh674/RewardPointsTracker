import React, { Suspense, lazy } from "react";

// Importing custom hook for API data fetching
import useApi from "./hooks/useApi";

// Importing components

import Loader from "./components/loader";
import ErrorPage from "./components/errorpage";
// Importing CustomerRewards component dynamically using lazy and Suspense
const CustomerRewards = lazy(() => import("./components/customerrewards"));

// Styles for the container div
const styleObj = {
  maxWidth: "1200px",
  margin: "0 auto",
};

// Columns for the 'Monthly Rewards' tab
const columns = [
  {
    Header: "Customer Name",
  },
  {
    Header: "Total Amount",
  },
  {
    Header: "Total Reward Points",
  },
];


// Main App component
function App() {
  // State for managing API data fetching status
  const { data, loading, error } = useApi();

  // Loader while fetching data
  if (loading) {
    return <Loader />;
  }

  // Display error page if there is an error
  if (error?.length > 0) {
    return <ErrorPage errorText={error} />;
  }

  return (
    <div style={styleObj}>
        {/* Lazy-loaded component for displaying monthly reward points */}
        <Suspense fallback={<Loader />}>
          <CustomerRewards
            title="Total reward points of customers"
            data={data}
            columns={columns}
          />
        </Suspense>
    </div>
  );
}

export default App; // Exporting the App component as default