export class InnovationBriefResponses {

	constructor(
		public $key?: string,
		public a_1?: string,
		public a_2?: string,
		public a_3?: string,
		public a_4?: string,
		public a_5?: string,
		public a_6?: string,
		public a_7?: string,
		public a_8?: string,
		public a_9?: string){

		this.$key = "form0";

		if(!a_1){
			this.a_1 = "";
			this.a_2 = "";
			this.a_3 = "";
			this.a_4 = "";
			this.a_5 = "";
			this.a_6 = "";
			this.a_7 = "";
			this.a_8 = "";
			this.a_9 = "";
		}
	}

	getDict(){
		return {
			a_1: this.a_1, 
			a_2: this.a_2, 
			a_3: this.a_3, 
			a_4: this.a_4,
			a_5: this.a_5, 
			a_6: this.a_6, 
			a_7: this.a_7, 
			a_8: this.a_8, 
			a_9: this.a_9 
		};
	}

	static fromJsonList(array): InnovationBriefResponses[] {
		return(array.map(InnovationBriefResponses.fromJson));
	}

	static fromJson({$key, a_1, a_2, a_3, a_4, a_5, a_6, a_7, a_8, a_9}): InnovationBriefResponses {
		return new InnovationBriefResponses($key, a_1, a_2, a_3, a_4, a_5, a_6, a_7, a_8, a_9);
	}
}