import React, { Suspense, lazy } from "react";
import './App.css'

// Importing custom hook for API data fetching
import useApi from "./hook/useApi";

// Importing components
import Loader from "./components/loader";

// Importing CustomerRewards component dynamically using lazy and Suspense
const CustomerRewards = lazy(() => import("./components/customerrewards"));

// Main App component
function App() {
  // State for managing API data fetching status
  const { data } = useApi();

  return (
    <div className="main">
        {/* Lazy-loaded component for displaying monthly reward points */}
        <Suspense fallback={<Loader />}>
          <CustomerRewards
            title="Total reward points of customers"
            data={data}
          />
        </Suspense>
    </div>
  );
}

export default App; // Exporting the App component as default