import { IUser } from "../models/IUser";

export default class UserService {
  static async getUsers(): Promise<IUser[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }
}
