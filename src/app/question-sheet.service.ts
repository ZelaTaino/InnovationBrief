import { Question } from './question';
import { Injectable } from '@angular/core';
import { QUESTIONS } from './mock-questions';

@Injectable()
export class QuestionSheetService {
	
	getQuestions() : Question[] {
		return QUESTIONS;
	}
}