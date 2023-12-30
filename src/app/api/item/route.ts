import { NextResponse } from "next/server";
import itemRepository from "../../../../backend/repository/itemRepository";
import { Category } from "@/@types/item";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || undefined;
  const limit = searchParams.get("limit") || undefined;
  const category = (searchParams.get("category") || "All") as Category;

  const items = await itemRepository.getItemList(q, Number(limit), category);
  return NextResponse.json(items, { status: 200 });
}
