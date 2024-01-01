import prisma from "@/lib/prisma";

const cartItemRepository = {
  create: async (itemId: string, userId: string) => {
    return await prisma.cartItem.create({
      data: { itemId, userId },
    });
  },

  findAll: async (userId: string) => {
    return await prisma.cartItem.findMany({
      where: { userId },
      include: {
        item: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  deleteOne: async (id: string) => {
    await prisma.cartItem.delete({
      where: { id },
    });
  },

  deleteAll: async (ids: string[]) => {
    await prisma.cartItem.deleteMany({
      where: {
        id: { in: ids },
      },
    });
  },

  isCartItemDuplicate: async (itemId: string, userId: string) => {
    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        itemId: itemId,
        userId: userId,
      },
    });

    return Boolean(existingCartItem);
  },
};

export default cartItemRepository;
