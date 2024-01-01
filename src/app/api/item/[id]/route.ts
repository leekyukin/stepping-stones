import { NextResponse } from "next/server";
import { toItemDetailResponse } from "../../../../../backend/dto/item/itemResponse";
import itemRepository from "../../../../../backend/repository/itemRepository";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const item = await itemRepository.getItemDetail(params.id);

  if (!item) {
    return NextResponse.json("존재하지 않는 상품입니다.", { status: 404 });
  }

  const response = toItemDetailResponse(item);
  return NextResponse.json(response, { status: 200 });
}
