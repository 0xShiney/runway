import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Log in",
  description: "Demo login screen for the Runway website reconstruction. Not connected to Runway.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Log in to Runway"
      subtitle={<p>Welcome back. Enter your details to continue to the demo workspace.</p>}
      aside={
        <p className="text-[12px] leading-relaxed text-slate-gray">
          The real Runway login lives at app.runwayml.com and supports Google sign-in, email and
          password, and password recovery.{" "}
          <a
            href="https://app.runwayml.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Go to the official app
          </a>
          . See our{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2">
            privacy policy
          </Link>
          .
        </p>
      }
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
