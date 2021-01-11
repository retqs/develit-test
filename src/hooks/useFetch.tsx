import api from '../api';
import {useState, useEffect} from 'react';
import {IuseFetchResult} from '../types';

export function useFetch(url: string): IuseFetchResult {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const res = await api.get(url);

        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return {
    isLoading,
    error,
    data,
  };
}
