import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Reset your password",
  description: "Demo password recovery screen for the Runway website reconstruction.",
  alternates: { canonical: "/forgot-password" },
  robots: { index: false, follow: false },
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset your password"
      subtitle={
        <p>
          Enter the email you use for the demo and we&apos;ll simulate sending a reset link. Nothing is
          actually sent.
        </p>
      }
    >
      <AuthForm mode="reset" />
    </AuthLayout>
  );
}
