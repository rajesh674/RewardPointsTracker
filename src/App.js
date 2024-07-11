import React, { useState, Suspense, lazy } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Importing custom hook for API data fetching
import useApi from './Hooks/useApi';

// Importing components

import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";
// Importing Tables component dynamically using lazy and Suspense
const Tables = lazy(() => import('./components/Tables'));

// Styles for the container div
const styleObj = {
  maxWidth: '1200px',
  margin: '0 auto'
}

// Columns for the 'Monthly Rewards' tab
const columns = [
  {
    Header: 'Customer Name'
  },
  {
    Header: 'Month'
  },
  {
    Header: "Transaction Count"
  },
  {
    Header: 'Total Amount'
  },
  {
    Header: 'Reward Points'
  }
];

// Columns for the 'Total Rewards' tab
const totalsByColumns = [
  {
    Header: 'Customer Name'
  },
  {
    Header: 'Total Amount'
  },
  {
    Header: 'Total Points'
  },
];

// Function component for custom tab panel
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// Main App component
function App() {
  // State for managing API data fetching status
  const { data, loading, error } = useApi();

  // State for managing current active tab
  const [value, setValue] = useState(0);

  // Loader while fetching data
  if (loading) {
    return <Loader />;
  }

  // Display error page if there is an error
  if (error?.length > 0) {
    return <ErrorPage />;
  }

  // Handle tab change
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // Accessibility props for tabs
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div style={styleObj}>
      {/* Tabs for switching between Monthly Rewards and Total Rewards */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(e, newValue) => handleChange(newValue)}>
          <Tab label="Monthly Rewards" {...a11yProps(0)} />
          <Tab label="Total Rewards" {...a11yProps(1)} />
        </Tabs>
      </Box>

      {/* Tab panels */}
      <CustomTabPanel value={value} index={0}>
        {/* Lazy-loaded component for displaying monthly reward points */}
        <Suspense fallback={<Loader />}>
          <Tables title="Total monthly reward points of customers" data={data?.summaryByCustomer} subRow={true} pointsPerTransaction={data?.pointsPerTransaction} columns={columns} />
        </Suspense>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* Lazy-loaded component for displaying total reward points */}
        <Suspense fallback={<Loader />}>
          <Tables title="Total reward points of customers" data={data?.totalPointsByCustomer} subRow={false} columns={totalsByColumns} />
        </Suspense>
      </CustomTabPanel>
    </div>
  );
}

export default App; // Exporting the App component as default
