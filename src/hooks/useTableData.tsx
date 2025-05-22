
import { useState } from 'react'
import { IUserDataDTO } from '../services/interfaces/IApiService';
import { useServices } from '../services/useServices';

export function useTableData() {
  const { apiService } = useServices();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserDataDTO[]>([]);

  // When submiting new data and backend request is resolved, it will locally update our state.
  const optimisticDataUpdate = (payload: IUserDataDTO) => {
    setUserData(prevUserData => [...prevUserData, payload]);
  }

  const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await apiService.getAll();
        if (res.isSuccessful) {
          const data = res.data as IUserDataDTO[];
          console.log(data);
          setUserData(data);
        }
      } catch(err) {
        console.log('fetch data failed with err:', err);
      } finally {
        setIsLoading(false);
      }
  };

  return {isLoading, userData, fetchData, optimisticDataUpdate};
}