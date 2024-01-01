import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const getUserId = async () => {
  const session = await getServerSession(authConfig);
  const userId = session?.user.id;
  return userId;
};
