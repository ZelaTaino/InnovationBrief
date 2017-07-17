export class LaunchPad{
  constructor(
    public $key: string,
    public client: string,
    public project: string,
    public url: string
  ){}

  static fromJsonList(array): LaunchPad[] {
    return array.map(LaunchPad.fromJson);
  }

  static fromJson({$key, client, project, url}): LaunchPad {
    return new LaunchPad($key, client, project, url);
  }
}