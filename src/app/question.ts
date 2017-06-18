export class Question {
	// question: string;
	// description: string;

	constructor(
		public $key:string, 
		public question: string, 
		public description: string){
		// this.question = question;
		// this.description = description;
	}

	static fromJsonList(array): Question[] {
		return array.map(Question.fromJson);
	}

	static fromJson({$key, question, description}):Question {
		return new Question($key, question, description);
	}
}