import { ReactNode, createContext } from "react";
import { IService } from "./interfaces/IService";


export const ServicesContext = createContext<IService | null>(null);

interface IProps {
  services: IService;
  children: ReactNode;
}

export const ServicesProvider = ({ services, children }: IProps ) => (
  <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>
);