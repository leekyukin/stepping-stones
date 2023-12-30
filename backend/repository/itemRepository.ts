import { Category } from "@/@types/item";
import prisma from "@/lib/prisma";

const itemRepository = {
  getItemList: async (q?: string, limit?: number, category: Category) => {
    return prisma.item.findMany({
      where: {
        name: q ? { contains: q } : {},
        category: category === "All" ? undefined : { equals: category },
      },
      orderBy: [{ createdAt: "desc" }, { cartItems: { _count: "desc" } }],
      take: limit ? limit : undefined,
    });
  },
};

export default itemRepository;
