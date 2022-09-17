import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const categories = prisma.categories;

export class DeleteCategoryService {
  async execute(id: string) {
    if (!(await categories.findUnique({ where: { id } })))
      return new Error("Category does not exist");

    await categories.delete({ where: { id } });
  }
}
