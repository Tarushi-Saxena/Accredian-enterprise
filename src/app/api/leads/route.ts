import { NextResponse } from "next/server";
import { listLeads, saveLead, type LeadPayload } from "@/lib/leads-store";

type IncomingLead = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: IncomingLead;
  try {
    body = (await request.json()) as IncomingLead;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  if (!isNonEmptyString(body.name) || !isNonEmptyString(body.email) || !isNonEmptyString(body.company)) {
    return NextResponse.json(
      { ok: false, error: "name, email, and company are required" },
      { status: 422 },
    );
  }

  const lead: LeadPayload = {
    name: body.name.trim(),
    email: body.email.trim(),
    company: body.company.trim(),
    message: body.message?.trim() || undefined,
    createdAt: new Date().toISOString(),
  };

  saveLead(lead);

  return NextResponse.json({ ok: true, id: lead.createdAt });
}

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, leads: listLeads() });
}
