export class Response {
	question_id: number;
	user_id: number;
	answer: string;

	constructor(
		$key: string,
		question_id: number,
		user_id: number,
		answer: string){
		this.question_id = question_id;
		this.user_id = user_id;
		this.answer = answer;
	}

	static fromJsonList(array): Response[] {
		console.log("Response fromJsonList");
		return array.map(Response.fromJson);
	}

	//not being called
	static fromJson({$key, question_id, user_id, answer}): Response {
		console.log("Response from json");
		return new Response($key, question_id, user_id, answer);
	}
}