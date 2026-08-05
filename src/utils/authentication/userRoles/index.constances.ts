export const USER_ROLES = {
  TEST: 'test',
  ADMIN: 'admin',
} as const

export type UserRolesType = typeof USER_ROLES[keyof typeof USER_ROLES]
