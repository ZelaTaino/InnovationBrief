export class Form {
	constructor(
		public $key: string,
		public name: string,
		public url: string
	){}

	static fromJsonList(array) : Form[] {
		return(array.map(Form.fromJson));
	}

	static fromJson({$key, name, url}): Form{
		return new Form($key, name, url);
	}
}