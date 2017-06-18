export class Question {
	question: string;
	description: string;

	constructor(question: string, description: string){
		this.question = question;
		this.description = description;
	}

//	static fromJsonList(array): Question[] {
//		return array.map(Question.fromJson);
//	}

//	static fromJson({$key, question, description}):Question {
//		return new Question($key, question, description);
//	}
}