import type { Metadata } from "next";
import { C2paVerifier } from "@/components/sections/c2pa-verifier";

export const metadata: Metadata = {
  title: "Verify Content Credentials",
  description:
    "Inspect C2PA manifests embedded in images, videos and audio. A local demonstration of Runway's verifier presentation.",
  alternates: { canonical: "/safety/verify" },
};

export default function VerifyPage() {
  return (
    <div className="min-h-[70vh] bg-off-white-alt">
      <div className="rw-container py-14 md:py-20">
        <p className="rw-eyebrow">C2PA Verifier</p>
        <h1 className="rw-display-l mt-3 max-w-2xl">Verify your content credentials</h1>
        <p className="rw-paragraph-m mt-4 max-w-xl text-slate-gray">
          Inspect C2PA manifests embedded in images, videos, and audio.
        </p>

        <div className="mt-10 max-w-3xl">
          <C2paVerifier />
        </div>

        <div className="mt-10 max-w-3xl text-[12px] leading-relaxed text-slate-gray">
          <p>
            Demonstration only: files are read in your browser to check their type and size and are never
            uploaded. No manifest is parsed and no credentials are verified. The official verifier is at{" "}
            <a
              href="https://runway.com/safety/verify"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              runway.com/safety/verify
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
