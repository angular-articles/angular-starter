export class User {
	name: string;
	bearerToken: string;
	isAuthenticated: boolean;
	canAccessApp: boolean;

	constructor(props: { name: string, bearerToken: string, isAuthenticated: boolean, canAccessApp: boolean } = {
		name: '',
		bearerToken: '',
		isAuthenticated: false,
		canAccessApp: false
	}) {
		this.name = props.name;
		this.bearerToken = props.bearerToken;
		this.isAuthenticated = props.isAuthenticated;
		this.canAccessApp = props.canAccessApp;
	}
}
