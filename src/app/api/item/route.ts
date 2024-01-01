import { NextResponse } from "next/server";
import itemRepository from "../../../../backend/repository/itemRepository";
import { Category } from "@/@types/item";
import { toItemResponse } from "../../../../backend/dto/item/itemResponse";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || undefined;
  const limit = Number(searchParams.get("limit"));
  const category = (searchParams.get("category") || "All") as Category;

  const items = await itemRepository.getItemList(q, limit, category);
  const response = items.map((item) => toItemResponse(item));
  return NextResponse.json(response, { status: 200 });
}
