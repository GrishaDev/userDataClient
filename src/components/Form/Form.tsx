import './Form.css';
import { useState } from "react";
import { useServices } from "../../services/useServices";
import { IUserDataDTO } from "../../services/interfaces/IApiService";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface IProps {
  optimisticDataUpdate: (payload: IUserDataDTO) => void;
}

export function Form({optimisticDataUpdate}: IProps) {
  const { apiService } = useServices();
  const [firstName, setFirstName] = useState<string | null>(null); 
  const [lastName, setLastName] = useState<string | null>(null); 
  const [email, setEmail] = useState<string | null>(null); 
  const [error, setError] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  const validateInputs = () => {
    if (!firstName || !lastName || !email) {
      setError('Please fill every input and submit');
      return false;
    }

    if (email && !emailRegex.test(email)) {
      setError('Please input a valid email');
      return false;
    }

    return true;
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError(null);
    event.preventDefault();
    const areValid = validateInputs();

    if (!areValid) {
      return;
    }

    const payload = {firstName, lastName, email} as IUserDataDTO;
    setIsLoading(true);
    const res = await apiService.insertData(payload);

    if (res.isSuccessful) {
      const data = res.data as IUserDataDTO;
      optimisticDataUpdate(data); 
    } else if(res.error) {
      setError(res.error);
    }

    setIsLoading(false);
  }

  return (
    <div className="theForm">
      <div className="title">Insert new user data</div>
      <form onSubmit={handleSubmit} className='formStyle'>
        <label>firstName:
          <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
        </label>
        <label>lastName:
          <input type="text" onChange={(e) => setLastName(e.target.value)}/>
        </label>
        <label>email:
          <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <input type="submit" />
        <div className='remainderArea'>
          {isLoading && <div className="loader">Loading...</div>}
          {error && <div className="errorArea">{error}</div>}
        </div>
      </form>
    </div>
  )
};