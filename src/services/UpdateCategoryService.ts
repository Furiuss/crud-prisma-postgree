import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const categories = prisma.categories;

interface CategoryUpdateRequest {
  id: string;
  name: string;
  description: string;
}

export class UpdateCategoryService {
  async execute({ id, name, description }: CategoryUpdateRequest) {
    let category = await categories.findUnique({ where: { id } });

    if (!category) return new Error("Category doesnt exists");

    category = await categories.update({
      where: {
        id,
      },
      data: {
        name: category ? name : category.name,
        description: description ? description : category.description,
      },
    });

    return category;
  }
}
