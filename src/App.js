import React, { useState, useEffect } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import fetch from './api/dataService';
import { calculateResults } from "./common/calculateResults"
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";
import Tables from "./components/Tables";
const styleObj = {
  maxWidth: '1200px', margin: '0 auto'
}
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

]
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
function App() {
  const [transactionData, setTransactionData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [value, setValue] = useState(0);


  useEffect(() => {
    setLoader(true)
    fetch().then((data) => {
      const results = calculateResults(data);
      setTransactionData(results);
    }).catch((error) => {
      setError(error)
    }).finally(() => {
      setLoader(false)
    });
  }, []);


  if (loader) {
    return <Loader />;
  }
  if (!transactionData || error.length > 0) {
    return <ErrorPage />;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return <div style={styleObj}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Monthly Rewards" {...a11yProps(0)} />
        <Tab label="Total Rewards" {...a11yProps(1)} />
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
      <Tables title="Total monthly reward points of customers" data={transactionData.summaryByCustomer} subRow={true} pointsPerTransaction={transactionData.pointsPerTransaction} columns={columns} />
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
      <Tables title="Total reward points of customers" data={transactionData.totalPointsByCustomer} subRow={false} columns={totalsByColumns} />
    </CustomTabPanel>
  </div>;
}

export default App;
