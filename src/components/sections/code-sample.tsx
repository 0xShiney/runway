"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const samples = {
  node: `import RunwayML from "@runwayml/sdk";

const client = new RunwayML();

const task = await client.textToVideo
  .create({
    promptText: "A cinematic slow push-in across a sunlit kitchen as steam curls from a fresh cup of coffee.",
    model: "gen4.5",
    ratio: "1280:720",
    duration: 5,
    seed: 692126734,
  })
  .waitForTaskOutput();`,
  python: `from runwayml import RunwayML

client = RunwayML()

task = client.text_to_video.create(
    prompt_text="A cinematic slow push-in across a sunlit kitchen as steam curls from a fresh cup of coffee.",
    model="gen4.5",
    ratio="1280:720",
    duration=5,
    seed=692126734,
).wait_for_task_output()`,
  curl: `curl -X POST https://api.dev.runwayml.com/v1/text_to_video \\
  -H "Authorization: Bearer $RUNWAY_API_KEY" \\
  -H "Content-Type: application/json" \\
  -H "X-Runway-Version: 2024-11-06" \\
  -d '{
    "promptText": "A cinematic slow push-in across a sunlit kitchen.",
    "model": "gen4.5",
    "ratio": "1280:720",
    "duration": 5
  }'`,
} as const;

type Language = keyof typeof samples;

const labels: Record<Language, string> = { node: "Node", python: "Python", curl: "cURL" };

export function CodeSample() {
  const [language, setLanguage] = useState<Language>("node");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(samples[language]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/15 bg-[#111214] text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex gap-1" role="tablist" aria-label="Code language">
          {(Object.keys(samples) as Language[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={language === key}
              onClick={() => setLanguage(key)}
              className={cn(
                "rounded-md px-3 py-1.5 text-[12px] font-medium transition-colors",
                language === key ? "bg-white/12 text-white" : "text-white/55 hover:text-white/80",
              )}
            >
              {labels[key]}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[12px] text-white/60 transition-colors hover:text-white"
        >
          {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-[12.5px] leading-relaxed">
        <code>{samples[language]}</code>
      </pre>
    </div>
  );
}
