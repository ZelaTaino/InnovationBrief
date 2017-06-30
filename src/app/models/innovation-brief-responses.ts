export class InnovationBriefResponses {
	form_name: string;
	q_1: string;
	q_2: string;
	q_3: string;

	constructor($key: string, q_1: string, q_2: string, q_3: string){
		this.form_name = $key;
		this.q_1 = q_1;
		this.q_2 = q_2;
		this.q_3 = q_3;
	}
}