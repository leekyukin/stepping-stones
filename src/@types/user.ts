export interface UserType {
  id: string;
  name: string;
  image: string;
  email?: string;
  phone?: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
}

export type Role = "USER" | "ADMIN";
