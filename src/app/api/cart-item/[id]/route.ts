import { NextResponse } from "next/server";
import cartItemRepository from "../../../../../backend/repository/cartItemRepository";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await cartItemRepository.deleteOne(id);
  return NextResponse.json({ status: 200 });
}
