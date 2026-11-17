"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Preferences = {
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
};

const STORAGE_KEY = "rw-demo-cookie-preferences";

const defaultPreferences: Preferences = {
  functional: true,
  analytics: true,
  advertising: false,
};

const categories: Array<{
  key: keyof Preferences | "necessary";
  title: string;
  body: string;
  required?: boolean;
}> = [
  {
    key: "necessary",
    title: "Strictly necessary",
    body: "Required to run this site: page navigation, security and remembering your cookie choices. These cannot be switched off.",
    required: true,
  },
  {
    key: "functional",
    title: "Functional",
    body: "Remember choices you make, such as dismissed banners and interface preferences, so the site feels consistent between visits.",
  },
  {
    key: "analytics",
    title: "Analytics",
    body: "Help us understand which pages are used and how people move through the reconstruction. No data leaves this demo.",
  },
  {
    key: "advertising",
    title: "Advertising",
    body: "Used to measure marketing campaigns. This reconstruction does not load any advertising or targeting scripts.",
  },
];

function Switch({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors",
        checked ? "border-off-black bg-off-black" : "border-off-black/20 bg-off-white-alt",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
      )}
    >
      <span
        className={cn(
          "inline-block size-4 rounded-full bg-white shadow-sm transition-transform",
          checked ? "translate-x-6" : "translate-x-1",
        )}
      />
    </button>
  );
}

/**
 * Local-only cookie preference demonstration. Choices are persisted in
 * localStorage for this reconstruction and are never sent anywhere.
 */
export function CookieSettings({
  label = "Cookie Settings",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Preferences;
        setPreferences({ ...defaultPreferences, ...parsed });
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    if (!saved) return;
    const timer = setTimeout(() => setSaved(false), 2400);
    return () => clearTimeout(timer);
  }, [saved]);

  const persist = (next: Preferences) => {
    setPreferences(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // storage may be unavailable; preferences stay in memory
    }
    setSaved(true);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn("transition-colors hover:text-off-black", className)}
        aria-haspopup="dialog"
      >
        {label}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPopup className="max-w-xl">
          <div className="flex flex-col gap-1 border-b border-light-gray p-6">
            <DialogTitle className="rw-display-xs">Cookie settings</DialogTitle>
            <DialogDescription className="rw-paragraph-s text-slate-gray">
              This is a demonstration preference panel. Choices are stored only in this browser for the
              reconstruction and are never transmitted to Runway.
            </DialogDescription>
          </div>

          <div className="flex max-h-[60vh] flex-col divide-y divide-light-gray overflow-y-auto px-6">
            {categories.map((category) => {
              const checked = category.required
                ? true
                : preferences[category.key as keyof Preferences];
              return (
                <div key={category.key} className="flex items-start justify-between gap-6 py-5">
                  <div>
                    <p className="text-sm font-medium">{category.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-gray">{category.body}</p>
                  </div>
                  <Switch
                    label={`${category.title} cookies`}
                    checked={checked}
                    disabled={category.required}
                    onChange={(next) =>
                      setPreferences((current) => ({
                        ...current,
                        [category.key]: next,
                      }))
                    }
                  />
                </div>
              );
            })}
          </div>

          <DialogFooter className="flex flex-col gap-3 border-t border-light-gray p-6 sm:flex-row sm:items-center sm:justify-between">
            <p aria-live="polite" className="text-[12px] text-slate-gray">
              {saved ? (
                <span className="inline-flex items-center gap-1.5 text-off-black">
                  <Check className="size-3.5" aria-hidden="true" /> Preferences saved locally
                </span>
              ) : (
                "You can change these choices at any time."
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() =>
                  persist({ functional: false, analytics: false, advertising: false })
                }
              >
                Reject non-essential
              </Button>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => persist({ functional: true, analytics: true, advertising: true })}
              >
                Accept all
              </Button>
              <Button className="rounded-full" onClick={() => persist(preferences)}>
                Save preferences
              </Button>
            </div>
          </DialogFooter>
        </DialogPopup>
      </Dialog>
    </>
  );
}
