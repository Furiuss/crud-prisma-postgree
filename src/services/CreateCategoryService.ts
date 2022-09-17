import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const categories = prisma.categories;

interface CategoryRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  async execute({ name, description }: CategoryRequest) {
    if (await categories.findUnique({ where: { name } }))
      return new Error("Caregory already exists");

    const category = await categories.create({
      data: {
        name,
        description,
      },
    });

    return category;
  }
}
