import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const categories = prisma.categories;

export class GetAllCategoriesService {
  async execute() {
    const allCategories = await categories.findMany();

    return allCategories;
  }
}
