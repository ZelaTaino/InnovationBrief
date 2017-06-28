export class Question {
	statement: string;
	description: string;

	constructor($key: string, statement: string, description: string){
		this.statement = statement;
		this.description = description;
	}

	static fromJsonList(array): Question[] {
		console.log("In Question From Json list");
		return array.map(Question.fromJson);
	}

	static fromJson({$key, statement, description}):Question {
		console.log("In Question fromJson");
		return new Question($key, statement, description);
	}
}