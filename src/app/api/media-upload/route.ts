import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

const ALLOWED_TARGETS = new Set(["highline", "fly", "climbing", "camp-life"]);

function sanitizeFilename(name: string) {
  return name.replace(/[^\w.\- ]+/g, "").trim().replace(/\s+/g, "-");
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const target = String(formData.get("target") || "");

  if (!ALLOWED_TARGETS.has(target)) {
    return NextResponse.json({ error: "Target non valido" }, { status: 400 });
  }

  const files = formData
    .getAll("files")
    .filter((file): file is File => file instanceof File && file.size > 0);

  if (files.length === 0) {
    return NextResponse.json({ error: "Nessun file ricevuto" }, { status: 400 });
  }

  const targetDir = path.join(process.cwd(), "public", "activities", target);
  await mkdir(targetDir, { recursive: true });

  const saved: string[] = [];

  for (const file of files) {
    const bytes = Buffer.from(await file.arrayBuffer());
    const safeName = sanitizeFilename(file.name);
    const outputPath = path.join(targetDir, safeName);
    await writeFile(outputPath, bytes);
    saved.push(safeName);
  }

  return NextResponse.json({ ok: true, saved });
}
