"use client";

import { useState } from "react";

type MediaUploadFormProps = {
  target: string;
  label: string;
};

export function MediaUploadForm({ target, label }: MediaUploadFormProps) {
  const [status, setStatus] = useState<string>("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setBusy(true);
    setStatus("");

    const response = await fetch("/api/media-upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      setStatus(result.error || "Upload fallito");
      setBusy(false);
      return;
    }

    setStatus(`Caricati: ${(result.saved || []).join(", ")}`);
    setBusy(false);
    form.reset();
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
      <input type="hidden" name="target" value={target} />
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        File
        <input
          name="files"
          type="file"
          multiple
          accept="image/*"
          className="min-h-12 rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm"
        />
      </label>
      <button
        type="submit"
        disabled={busy}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-red px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
      >
        {busy ? `Carico ${label}...` : `Carica in ${label}`}
      </button>
      {status ? <p className="text-sm leading-6 text-brand-ink/72">{status}</p> : null}
    </form>
  );
}
