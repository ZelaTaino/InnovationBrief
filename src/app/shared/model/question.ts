export class Question{
  
  constructor(
    public $key: string,
    public description: string,
    public question: string,
    public type: string){}

  static fromJson({$key, description, question, type}): Question{
    return new Question($key, description, question, type);
  }

}