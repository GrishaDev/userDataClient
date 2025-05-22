import { useEffect } from "react";
import { useTableData } from "../hooks/useTableData";
import { Form } from "./Form/Form";
import Table from "./Table/Table";


export function Main() {
  const { isLoading, userData, fetchData, optimisticDataUpdate} = useTableData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Form optimisticDataUpdate={optimisticDataUpdate}/>
      {isLoading ? <div>Loading...</div> : <Table userData={userData} />}
    </div>
  )
};