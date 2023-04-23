import axios from "axios";
export class UserService {
  private static URL: String = "https://jsonplaceholder.typicode.com/";

  public static getAllUsers() {
    const userUrl = `${this.URL}users`;
    console.log(userUrl);

    return axios.get(userUrl);
  }
}
