import { Question } from './question';
import { Response } from './response';

export class QuestionAndAnswer {
	question: Question;
	answer: Response;
	constructor(question: Question, answer: Response){
		this.question = question;
		this.answer = answer;
	}
}