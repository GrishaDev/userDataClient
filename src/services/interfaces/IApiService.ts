export interface IUserDataDTO {
  firstName: string;
  lastName: string;
  email: string;
  age: number | null;
}

export interface IResposne {
  isSuccessful: boolean;
  error?: string;
  data?: IUserDataDTO[] | IUserDataDTO;
}

export interface IApiService {
  getAll(): Promise<IResposne>;
  insertData(payload: IUserDataDTO): Promise<IResposne>;
}