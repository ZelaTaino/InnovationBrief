export class LaunchPad{
  constructor(
    public $key: string,
    public client: string,
    public project: string,
    public username: string,
    public password: string,
    public complete?: boolean 
  ){}

  static fromJsonList(array): LaunchPad[] {
    return array.map(LaunchPad.fromJson);
  }

  static fromJson({$key, client, project, username, password }): LaunchPad {
    return new LaunchPad($key, client, project, username, password);
  }
}