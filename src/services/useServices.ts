import React from "react"
import { IService } from "./interfaces/IService"
import { ServicesContext } from "./ServicesProvider"


export function useServices(): IService {
  const servicesContextValue = React.useContext<IService | null>(ServicesContext);

  if (servicesContextValue === null) {
    throw Error ('There is no value in services context');
  }
  return servicesContextValue;
}