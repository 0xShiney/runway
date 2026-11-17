import { Info } from "lucide-react";

/**
 * Standing disclosure required for every reconstructed legal document. The
 * presentation mirrors the reference layout; the text is demonstration
 * content and is explicitly non-binding.
 */
export function DemoNotice() {
  return (
    <div className="flex gap-3 rounded-lg border border-off-black/10 bg-off-white-alt p-4">
      <Info className="mt-0.5 size-4 shrink-0 text-off-black/50" aria-hidden="true" />
      <p className="text-[12.5px] leading-relaxed text-off-black/70">
        <strong className="font-medium text-off-black">Demonstration document.</strong> This page
        reconstructs the layout, typography and navigation of a Runway legal page for an independent
        front-end exercise. The wording is illustrative, not legal advice, and is not a binding
        agreement. The official Runway document is linked in the sidebar.
      </p>
    </div>
  );
}
