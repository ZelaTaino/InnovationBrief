export class Question {
	statement: string;
	description: string;

	constructor($key: string, statement: string, description: string){
		this.statement = statement;
		this.description = description;
	}

	static fromJsonList(array): Question[] {
		console.log("Enter");
		return array.map(Question.fromJson);
	}

	static fromJson({$key, statement, description}):Question {
		console.log("TEST");
		return new Question($key, statement, description);
	}
}