import connectDB from "@/config/db";
import Address from "@/models/Address";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const { userId } = getAuth(req);

    await connectDB();
    const addresses = await Address.find({ userId });

    return NextResponse.json({ success: true, addresses });
  } catch (error) {
    return NextResponse.json({ success: true, message: error.message });
  }
};
