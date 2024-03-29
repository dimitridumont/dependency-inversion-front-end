"use client"

import { FC, useState } from "react"
import { useDependencies } from "@/dependencies.context"

const LoginPage: FC = () => {
	const { authService } = useDependencies()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = async () => {
		try {
			const user = await authService.login(email, password)
			console.log("Login successful! User:", user)
		} catch (error) {
			console.error("Login error:", error)
		}
	}

	return (
		<div>
			<h2>Login Page</h2>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	)
}

export default LoginPage
