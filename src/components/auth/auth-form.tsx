"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Mode = "login" | "signup" | "reset";

const DEMO_USER_KEY = "rw-demo-user";

function passwordIssues(password: string) {
  return [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One letter", met: /[a-zA-Z]/.test(password) },
    { label: "One number", met: /\d/.test(password) },
  ];
}

export function AuthForm({ mode }: { mode: Mode }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const issues = passwordIssues(password);
  const passwordValid = issues.every((issue) => issue.met);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (mode === "signup" && !name.trim()) nextErrors.name = "Enter your name.";
    if (!email.trim()) nextErrors.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (mode !== "reset") {
      if (!password) nextErrors.password = "Enter a password.";
      else if (mode === "signup" && !passwordValid) nextErrors.password = "Your password doesn't meet the rules yet.";
    }
    if (mode === "signup" && !accepted) nextErrors.accepted = "Accept the terms to continue.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    // Local-only simulation: no request is made and no credentials leave the browser.
    window.setTimeout(() => {
      try {
        if (mode !== "reset") {
          window.localStorage.setItem(
            DEMO_USER_KEY,
            JSON.stringify({ email, name: name || email.split("@")[0], createdAt: Date.now() }),
          );
        }
      } catch {
        // storage unavailable — the demo still completes
      }
      setStatus("done");
    }, 700);
  };

  if (status === "done") {
    return (
      <div className="rounded-xl border border-light-gray bg-off-white-alt p-6">
        <div className="flex size-10 items-center justify-center rounded-full bg-off-black text-white">
          <Check className="size-5" aria-hidden="true" />
        </div>
        <h2 className="rw-heading-min mt-4">
          {mode === "login" ? "Signed in to the demo" : mode === "signup" ? "Demo account created" : "Reset link simulated"}
        </h2>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-gray">
          {mode === "reset"
            ? "In the real product an email would arrive with a reset link. Nothing was sent from this reconstruction."
            : "This session exists only in your browser's local storage. No request reached Runway and no real account was created."}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex h-9 items-center rounded-full bg-off-black px-4 text-sm font-medium text-white"
          >
            Back to the site
          </Link>
          <Link
            href="/product"
            className="inline-flex h-9 items-center rounded-full border border-off-black/15 px-4 text-sm font-medium"
          >
            Explore the product
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-4">
      {mode === "signup" ? (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[13px] font-medium">
            Full name
          </label>
          <Input
            id="name"
            name="name"
            value={name}
            autoComplete="name"
            onChange={(event) => {
              setName(event.target.value);
              setErrors((current) => ({ ...current, name: "" }));
            }}
            aria-invalid={Boolean(errors.name)}
            className="h-11 rounded-lg"
          />
          {errors.name ? <p className="text-[12px] text-red-600">{errors.name}</p> : null}
        </div>
      ) : null}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-[13px] font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          autoComplete="email"
          onChange={(event) => {
            setEmail(event.target.value);
            setErrors((current) => ({ ...current, email: "" }));
          }}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="h-11 rounded-lg"
        />
        {errors.email ? (
          <p id="email-error" className="text-[12px] text-red-600">
            {errors.email}
          </p>
        ) : null}
      </div>

      {mode !== "reset" ? (
        <div className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between">
            <label htmlFor="password" className="text-[13px] font-medium">
              Password
            </label>
            {mode === "login" ? (
              <Link href="/forgot-password" className="text-[12px] text-slate-gray underline underline-offset-2">
                Forgot password?
              </Link>
            ) : null}
          </div>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              onChange={(event) => {
                setPassword(event.target.value);
                setErrors((current) => ({ ...current, password: "" }));
              }}
              aria-invalid={Boolean(errors.password)}
              aria-describedby="password-help"
              className="h-11 rounded-lg pr-11"
            />
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              className="absolute right-1 top-1 inline-flex size-9 items-center justify-center rounded-md text-slate-gray hover:text-off-black"
            >
              {showPassword ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
            </button>
          </div>
          <div id="password-help">
            {errors.password ? <p className="text-[12px] text-red-600">{errors.password}</p> : null}
            {mode === "signup" ? (
              <ul className="mt-2 flex flex-col gap-1">
                {issues.map((issue) => (
                  <li
                    key={issue.label}
                    className={cn(
                      "flex items-center gap-1.5 text-[12px]",
                      issue.met ? "text-green-700" : "text-slate-gray",
                    )}
                  >
                    <Check className={cn("size-3", issue.met ? "opacity-100" : "opacity-30")} aria-hidden="true" />
                    {issue.label}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ) : null}

      {mode === "login" ? (
        <label className="flex items-center gap-2 text-[13px] text-off-black/75">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
            className="size-4 rounded border-off-black/25 accent-off-black"
          />
          Remember me on this device (demo only)
        </label>
      ) : null}

      {mode === "signup" ? (
        <label className="flex items-start gap-2 text-[12.5px] leading-relaxed text-off-black/75">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) => {
              setAccepted(event.target.checked);
              setErrors((current) => ({ ...current, accepted: "" }));
            }}
            aria-invalid={Boolean(errors.accepted)}
            className="mt-0.5 size-4 rounded border-off-black/25 accent-off-black"
          />
          <span>
            I agree to the{" "}
            <Link href="/terms-of-use" className="underline underline-offset-2">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      ) : null}
      {errors.accepted ? <p className="text-[12px] text-red-600">{errors.accepted}</p> : null}

      <Button type="submit" disabled={status === "loading"} className="h-11 rounded-full text-sm">
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Working…
          </>
        ) : mode === "login" ? (
          "Log in"
        ) : mode === "signup" ? (
          "Create demo account"
        ) : (
          "Send reset link"
        )}
      </Button>

      {mode !== "reset" ? (
        <>
          <div className="flex items-center gap-3 py-1">
            <span className="h-px flex-1 bg-light-gray" />
            <span className="text-[11px] uppercase tracking-wide text-slate-gray">or</span>
            <span className="h-px flex-1 bg-light-gray" />
          </div>
          <Button type="button" variant="outline" disabled className="h-11 rounded-full text-sm">
            Continue with Google — unavailable in demo
          </Button>
        </>
      ) : null}

      <p className="mt-2 text-center text-[13px] text-slate-gray">
        {mode === "login" ? (
          <>
            No account?{" "}
            <Link href="/signup" className="font-medium text-off-black underline underline-offset-2">
              Sign up
            </Link>
          </>
        ) : mode === "signup" ? (
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-off-black underline underline-offset-2">
              Log in
            </Link>
          </>
        ) : (
          <>
            Remembered it?{" "}
            <Link href="/login" className="font-medium text-off-black underline underline-offset-2">
              Back to log in
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
