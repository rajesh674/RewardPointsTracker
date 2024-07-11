import { useState, useEffect } from 'react';
import { calculateRewardPointsByTransactions } from "../utils/calculateRewardPointsByTransactions"
import apiData from '../service/dataService';

const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                apiData().then((data) => {
                    const results = calculateRewardPointsByTransactions(data);
                    setData(results);
                }).catch((err) => setError(err))
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]); // Dependency array ensures useEffect runs only when url changes

    return { data, loading, error };
};

export default useApi;