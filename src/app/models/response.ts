export class Response {

	constructor(
		public question_id: number,
		public user_id: number,
		public answer: string){}

	static fromJsonList(array): Response[] {
		console.log("Test");
		return (array.map(Response.fromJson));
	}

	static fromJson(question_id, user_id, answer): Response {
		console.log("In there");
		return new Response(question_id, user_id, answer);
	}
}