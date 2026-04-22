import { NextResponse } from "next/server";
import { getPublicStats } from "@/lib/stats-service";

export async function GET() {
  const stats = await getPublicStats();
  return NextResponse.json({ stats, source: "mock-service" });
}
