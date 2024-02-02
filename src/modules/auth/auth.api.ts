import { AuthService } from "@/modules/auth/auth.service"

export const AuthApi: AuthService = {
	login: async (email, password) => {
		try {
			const response = await fetch("https://api.com/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			})
			if (!response.ok) {
				throw new Error("Login failed")
			}
			return await response.json()
		} catch (error) {
			console.error("Login error:", error)
			throw error
		}
	},
	logout: () => {
		return fetch("https://api.com/logout", {
			method: "POST",
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Logout failed")
				}
			})
			.catch((error) => {
				console.error("Logout error:", error)
				throw error
			})
	},
}
