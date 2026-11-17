"use client";

import { useRef, useState } from "react";
import { FileWarning, ShieldCheck, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FileInfo = { name: string; type: string; size: string };

const MAX_BYTES = 512 * 1024 * 1024;

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Local demonstration of the C2PA verifier presentation. The selected file is
 * inspected in the browser for type and size only; nothing is uploaded and no
 * manifest is parsed.
 */
export function C2paVerifier() {
  const [file, setFile] = useState<FileInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    setError(null);
    const next = files?.[0];
    if (!next) return;
    if (!/^(image|video|audio)\//.test(next.type)) {
      setError("Choose an image, video or audio file.");
      setFile(null);
      return;
    }
    if (next.size > MAX_BYTES) {
      setError("That file is larger than 512MB.");
      setFile(null);
      return;
    }
    setFile({ name: next.name, type: next.type, size: formatSize(next.size) });
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          handleFiles(event.dataTransfer.files);
        }}
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed bg-white px-6 py-14 text-center transition-colors",
          dragging ? "border-off-black bg-off-white-alt" : "border-off-black/25",
        )}
      >
        <div className="flex size-11 items-center justify-center rounded-full bg-off-white-alt">
          <Upload className="size-5 text-off-black/60" aria-hidden="true" />
        </div>
        <p className="rw-heading-min">Drop an image, video, or audio file here, or click to browse</p>
        <p className="text-[13px] text-slate-gray">Up to 512MB.</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*,audio/*"
          className="sr-only"
          onChange={(event) => handleFiles(event.target.files)}
          aria-label="Choose a media file to inspect"
        />
        <Button
          variant="outline"
          className="mt-2 rounded-full"
          onClick={() => inputRef.current?.click()}
        >
          Select file
        </Button>
        {error ? (
          <p role="alert" className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-red-600">
            <FileWarning className="size-4" aria-hidden="true" /> {error}
          </p>
        ) : null}
      </div>

      {file ? (
        <div className="rounded-xl border border-light-gray bg-white p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 size-5 text-off-black/60" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-[15px] font-medium break-words">{file.name}</p>
              <p className="mt-1 text-[13px] text-slate-gray">
                {file.type} · {file.size}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-off-black/70">
                <strong className="font-medium">Demo result:</strong> the file was read locally. C2PA
                manifests are not parsed in this reconstruction, so no signing information is displayed
                and no authenticity conclusion is made.
              </p>
              <button
                type="button"
                onClick={() => setFile(null)}
                className="mt-4 text-[13px] font-medium underline underline-offset-2"
              >
                Clear file
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <p className="text-[12px] leading-relaxed text-slate-gray">
        By clicking &ldquo;Select file&rdquo;, you agree to our{" "}
        <a href="/terms-of-use" className="underline underline-offset-2">
          Terms of Use
        </a>{" "}
        and acknowledge our{" "}
        <a href="/privacy-policy" className="underline underline-offset-2">
          Privacy Policy
        </a>
        . Files are not retained and are not used as training data.
      </p>
    </div>
  );
}
