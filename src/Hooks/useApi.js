import {
  useState,
  useEffect
} from "react"; // Importing necessary hooks from React
import {
  calculateRewardPointsByTransactions
} from "../utils/calculateRewardPointsByTransactions"; // Importing function to calculate reward points
import apiData from "../service/dataService"; // Importing API data fetching function
import {constants} from "../utils/constants";

// Custom hook useApi
const useApi = (url) => {
  // State variables using useState hook
  const [data, setData] = useState(null); // State to hold fetched data
  const [loading, setLoading] = useState(false); // State to track loading state
  const [error, setError] = useState(null); // State to hold error information

  useEffect(() => {
      // useEffect hook to fetch data when component mounts or url changes
      const fetchData = async () => {
          setLoading(true); // Set loading state to true before fetching data
          try {
              // Fetch data using apiData function
              apiData()
                  .then((data) => {
                      // Calculate reward points based on fetched data
                      const results = calculateRewardPointsByTransactions(data);
                      setData(results); // Update state with calculated results
                  })
                  .catch((err) => {
                      setError(constants?.ERROR_MESSAGE); // Handle error if promise rejects
                  });
          } catch (error) {
              setError(constants?.ERROR_MESSAGE); // Handle any unexpected errors
          } finally {
              setLoading(false); // Set loading state to false after fetching data
          }
      };

      fetchData(); // Invoke fetchData function when useEffect runs
  }, [url]); // Dependency array ensures useEffect runs only when url changes

  // Return data, loading state, and error state as an object
  return {
      data,
      loading,
      error
  };
};

export default useApi; // Exporting useApi custom hook