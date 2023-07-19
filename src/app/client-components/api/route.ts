import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export const POST = async (request: NextRequest) => {
  const data = await request.json();

  const email = data.email;
  const name = data.name;

  const user = await prisma.user.create({ data: { email, name } });
  if (user.id) {
    return NextResponse.json(user);
  }

  return NextResponse.error();
};
