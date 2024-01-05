import prisma from "@/lib/prisma";
import { OrderStatus } from "@prisma/client";

const orderRepository = {
  create: async (
    userId: string,
    totalPrice: number,
    depositorName: string,
    bank: string,
  ) => {
    await prisma.order.create({
      data: {
        userId,
        totalPrice,
        depositorName,
        bank,
        status: OrderStatus.BEGIN_CHECKOUT,
      },
    });
  },

  hasOrder: async (userId: string, depositorName: string, bank: string) => {
    const duplicatedOrder = await prisma.order.findFirst({
      where: {
        userId,
        depositorName,
        bank,
        status: OrderStatus.BEGIN_CHECKOUT,
      },
    });
    return Boolean(duplicatedOrder);
  },
};

export default orderRepository;
