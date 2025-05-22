import './Table.css';
import { IUserDataDTO } from '../../services/interfaces/IApiService';

interface IProps {
  userData: IUserDataDTO[];
}

function Table({ userData }: IProps) {
  return (
    <>
      {!userData?.length ? <div>There is no data here yet..</div> :  
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Age</th>
          </tr> 
        </thead>   
        <tbody>
  
          {userData?.map((data, index) => <tr key={index}> 
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>{data.age ?? 'Unknown'}</td>
          </tr>)}
        </tbody>
       </table>}
    </>
  )
}

export default Table;