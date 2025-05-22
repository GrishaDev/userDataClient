import { ApiService } from "./ApiService";
import type { IApiService } from "./interfaces/IApiService";
import type { IService } from "./interfaces/IService";
import { MockApiService } from "./MockApiService";


export class Services implements IService {
  public apiService: IApiService;
  
  constructor() {
    const isMock = import.meta.env.VITE_IS_MOCK === 'true';
    const apiUrl = import.meta.env.VITE_API_URL;
    this.apiService = isMock ? new MockApiService() :  new ApiService(apiUrl);
  }
}