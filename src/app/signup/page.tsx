import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Demo registration screen for the Runway website reconstruction. No real account is created.",
  alternates: { canonical: "/signup" },
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle={<p>Start with 125 one-time credits. No credit card required in the demo.</p>}
      aside={
        <div className="rounded-lg border border-light-gray p-4">
          <p className="text-[12px] font-medium">What happens in this demo</p>
          <ul className="mt-2 flex flex-col gap-1.5 text-[12px] leading-relaxed text-slate-gray">
            <li>· Fields validate in the browser only.</li>
            <li>· A mock session is stored in localStorage.</li>
            <li>· No account is created on Runway.</li>
          </ul>
        </div>
      }
    >
      <AuthForm mode="signup" />
    </AuthLayout>
  );
}
