export type AuthService = {
	login(email: string, password: string): Promise<unknown>
	logout(): Promise<void>
}
