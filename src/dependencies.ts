import { AuthService } from "@/modules/auth/auth.service"
import { AuthApi } from "@/modules/auth/auth.api"

export type Dependencies = {
	authService: AuthService
}

export const dependencies: Dependencies = {
	authService: AuthApi,
}
