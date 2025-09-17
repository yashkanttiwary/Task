export const USER_ROLES = {
	VISITOR: "visitor",
	REGISTERED: "registered",
	SUBSCRIBER: "subscriber",
	TRIAL: "trial",
	ANNUAL: "annual",
} as const;

export type UserRoleKey = keyof typeof USER_ROLES;
export type UserRoleValue = typeof USER_ROLES[UserRoleKey];