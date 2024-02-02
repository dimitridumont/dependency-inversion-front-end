"use client"

import { FC, useState } from "react"

const LoginPage: FC = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = () => {
		fetch("https://api.com/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Login failed")
				}
				const user = response.json()
				console.log("Login successful! User:", user)
			})
			.catch((error) => {
				console.error("Login error:", error)
				throw error
			})
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
