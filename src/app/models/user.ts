/**
 * User model
 * @author Rounak Saha
 */
export class User {
  public username: string;
  public credential: string;
  public showName: string;

  constructor(username: string, credential?: string, showName?: string) {
    this.username = username;
    this.credential = credential;
    this.showName = showName;
  }
}
