import { sleep } from "../utils/sleep";
import type { IApiService, IResposne, IUserDataDTO } from "./interfaces/IApiService";

export class MockApiService implements IApiService {
  constructor() {}
  private entities: IUserDataDTO[] = [];

  public async getAll(): Promise<IResposne> {
    await sleep(200);
    return { isSuccessful: true, data: this.entities }
  }

  public async insertData(payload: IUserDataDTO): Promise<IResposne> {
    await sleep(200);
    this.entities.push(payload);
    return { isSuccessful: true, data: payload }
  }
}