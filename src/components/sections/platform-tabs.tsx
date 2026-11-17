"use client";

import { Tabs, TabsList, TabsTab, TabsPanel } from "@/components/ui/tabs";
import { platforms } from "@/data/content";

const featureMatrix: Record<string, Array<{ title: string; body: string }>> = {
  creative: [
    { title: "How Runway is Used", body: "Advertising, film, VFX, gaming and design teams compress production timelines without losing craft." },
    { title: "Create with Agent", body: "Describe the video you want. Agent plans the shots, generates them and assembles an edit." },
    { title: "Build your own Workflows", body: "Chain models, prompts and modalities into node-based pipelines you can rerun on every brief." },
    { title: "Enterprise-grade", body: "SOC 2 Type II, SSO, custom permissions and no training on your data." },
    { title: "The World's Best Models", body: "Runway models alongside Seedance, Kling, Gemini and more, in one workspace." },
  ],
  dev: [
    { title: "One integration", body: "Models, Workflows, Recipes and Characters are all reachable through a single API key." },
    { title: "Model router", body: "Set a preference for cost, quality or latency and let the platform route every request." },
    { title: "Recipes", body: "Runway-built endpoints with prompting and workflow expertise packaged in." },
    { title: "Built for agents", body: "The Runway Dev MCP lets coding agents build, debug and maintain the integration." },
    { title: "Enterprise scale", body: "99.9% uptime, zero data retention, SOC 2 Type II and IP indemnification." },
  ],
  robotics: [
    { title: "Open weights", body: "Praxis-1 checkpoints on Hugging Face under Apache 2.0, licensed for commercial use." },
    { title: "Adapt to hardware", body: "A single checkpoint adapts to new embodiments with fine-tuning on your data." },
    { title: "Runs where you build", body: "Available in LeRobot and vLLM-Omni, with hosted inference on Reactor." },
    { title: "Video pretraining", body: "Learns how objects behave and how tasks unfold from large-scale video." },
    { title: "World action model", body: "Predicts both what the scene will look like and the motion that gets it there." },
  ],
};

export function PlatformTabs() {
  return (
    <Tabs defaultValue="creative" className="gap-10">
      <TabsList variant="underline" className="w-full justify-start overflow-x-auto border-b border-light-gray pb-0">
        {platforms.map((platform) => (
          <TabsTab
            key={platform.id}
            value={platform.id}
            className="flex-none px-4 py-3 text-sm font-medium text-slate-gray data-active:text-off-black"
          >
            {platform.name}
          </TabsTab>
        ))}
      </TabsList>

      {platforms.map((platform) => (
        <TabsPanel key={platform.id} value={platform.id}>
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
            {featureMatrix[platform.id]?.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-2">
                <h3 className="rw-heading-min">{feature.title}</h3>
                <p className="rw-paragraph-s text-slate-gray">{feature.body}</p>
              </div>
            ))}
          </div>
        </TabsPanel>
      ))}
    </Tabs>
  );
}
