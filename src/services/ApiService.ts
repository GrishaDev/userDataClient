import type { IApiService, IResposne, IUserDataDTO } from "./interfaces/IApiService";

export class ApiService implements IApiService {
  constructor(private apiBaseUrl: string) {}

  public async getAll(): Promise<IResposne> {
    const res = await fetch(this.apiBaseUrl, { method: 'GET' });

    if (res.status === 200) {
      const data = await res.json();
      return { isSuccessful: true, data}
    }

    return { isSuccessful: false, error: 'Something went wrong' }
  }

  public async insertData(payload: IUserDataDTO): Promise<IResposne> {
    try {
      const body = JSON.stringify(payload);
      const res = await fetch(this.apiBaseUrl, { method: 'POST', body, headers: {
        "Content-Type": "application/json",
      }});
      
      if (res.status === 201) {
        const data = await res.json();
        return { isSuccessful: true, data}

      }
      
      if (res.status === 400) {
        const data = await res.json();
        return { isSuccessful: false, error: 'bad request'}

      }

      return { isSuccessful: false, error: 'Something went wrong' }

    } catch(err) {
      return { isSuccessful: false, error: 'Something went wrong' }
    }
  }
}