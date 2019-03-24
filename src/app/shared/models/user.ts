export class User {
	bearerToken: string;
	canAccessApp: boolean;
	email: string;
	id: number | undefined;
	isAuthenticated: boolean;
	name: string;
	password?: string;

	constructor(props: {
		bearerToken: string, canAccessApp: boolean, email: string, id: number | undefined,
		isAuthenticated: boolean, name: string
	} = {bearerToken: '', canAccessApp: false, email: '', id: undefined, isAuthenticated: false, name: ''}) {
		this.bearerToken = props.bearerToken;
		this.canAccessApp = props.canAccessApp;
		this.email = props.email;
		this.id = props.id;
		this.isAuthenticated = props.isAuthenticated;
		this.name = props.name;
	}
}
