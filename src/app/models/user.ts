/**
 * User model
 * @author Rounak Saha
 */
export class User {
  public username: string;
  public credential: string;
  public showName: string;
  public dateJoined: Date;

  constructor(username: string, credential?: string, showName?: string, dateJoined?: Date) {
    this.username = username;
    this.credential = credential;
    this.showName = showName;
    this.dateJoined = dateJoined;
  }
}
