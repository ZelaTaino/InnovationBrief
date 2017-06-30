export class User {
	user_id: string;
	email: string;
	password: string;
	project: string;

	constructor($key: string, email: string, password: string, project: string){
		this.user_id = $key;
		this.email = email;
		this.password = password;
		this.project = project;
	}
}