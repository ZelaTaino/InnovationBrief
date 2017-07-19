export class Form {
	constructor(
		public $key: string,
		public name: string,
		public url: string,
		public complete?: boolean
	){}

	setCompletion(completion_status){
		this.complete = completion_status;
	}

	static fromJsonList(array) : Form[] {
		return(array.map(Form.fromJson));
	}

	static fromJson({$key, name, url}): Form{
		return new Form($key, name, url);
	}
}