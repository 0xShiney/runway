"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Variant = "enterprise" | "robotics";

type FormState = Record<string, string>;

const enterpriseProductOptions = [
  "Creative Platform",
  "API",
  "Model Weights Licensing",
  "Runway Ads",
  "App Studio",
];

const sizes = ["1-200", "201-1,000", "1,001-5,000", "5,001-10,000", "10,001+"];
const teamSizes = ["1-5", "6-20", "21-50", "51-200", "201+"];
const useCases = [
  "Ads, marketing & ecommerce content",
  "Film, TV & animation",
  "Training & educational videos",
  "Product & architectural design",
  "Translating & reformatting existing content",
  "Other",
];

function Field({
  label,
  name,
  required,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[13px] font-medium">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-lg"
      />
      {error ? (
        <p id={`${name}-error`} className="text-[12px] text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
  value,
  onChange,
  error,
  placeholder = "Select an option",
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[13px] font-medium">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-11 rounded-lg border bg-white px-3 text-sm outline-none",
          error ? "border-red-500" : "border-input",
          "focus-visible:border-off-black focus-visible:ring-[3px] focus-visible:ring-offset-0",
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${name}-error`} className="text-[12px] text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Contact form reconstruction. Validates locally and shows a simulated
 * success state — no data is sent to Runway or to any third party.
 */
export function ContactForm({ variant = "enterprise" }: { variant?: Variant }) {
  const [values, setValues] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    size: "",
    jobTitle: "",
    phone: "",
    products: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormState>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: string) => (value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormState = {};
    if (!values.firstName.trim()) nextErrors.firstName = "Enter your first name.";
    if (!values.lastName.trim()) nextErrors.lastName = "Enter your last name.";
    if (!values.email.trim()) nextErrors.email = "Enter your business email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) nextErrors.email = "Enter a valid email address.";
    if (!values.company.trim()) nextErrors.company = "Enter your company.";
    if (variant === "enterprise" && !values.size) nextErrors.size = "Select a company size.";
    if (!values.jobTitle.trim()) nextErrors.jobTitle = "Enter your job title.";
    if (!values.products) nextErrors.products = "Select at least one product.";
    if (!values.message.trim()) nextErrors.message = "Tell us a little about what you need.";
    else if (values.message.trim().length < 20) nextErrors.message = "Add a little more detail (20+ characters).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-light-gray bg-off-white-alt p-8">
        <div className="flex size-10 items-center justify-center rounded-full bg-off-black text-white">
          <Check className="size-5" aria-hidden="true" />
        </div>
        <h3 className="rw-display-xs mt-5">Thanks — this is a demo submission.</h3>
        <p className="rw-paragraph-m mt-2 max-w-lg text-slate-gray">
          Your form was validated locally and nothing was transmitted. On the real Runway site, a
          representative follows up within two business days.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => {
              setSubmitted(false);
              setValues({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                size: "",
                jobTitle: "",
                phone: "",
                products: "",
                message: "",
              });
            }}
          >
            Submit another response
          </Button>
          <a
            href="https://runway.com/enterprise-contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-full bg-off-black px-4 text-sm font-medium text-white"
          >
            Contact Runway directly
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First Name" name="firstName" required value={values.firstName} onChange={set("firstName")} error={errors.firstName} autoComplete="given-name" />
        <Field label="Last Name" name="lastName" required value={values.lastName} onChange={set("lastName")} error={errors.lastName} autoComplete="family-name" />
        <Field label="Business email" name="email" type="email" required value={values.email} onChange={set("email")} error={errors.email} autoComplete="email" />
        <Field label="Company" name="company" required value={values.company} onChange={set("company")} error={errors.company} autoComplete="organization" />
        {variant === "enterprise" ? (
          <SelectField label="Company Size" name="size" required options={sizes} value={values.size} onChange={set("size")} error={errors.size} />
        ) : (
          <SelectField label="Team size" name="size" required options={teamSizes} value={values.size} onChange={set("size")} error={errors.size} />
        )}
        <Field label="Job Title" name="jobTitle" required value={values.jobTitle} onChange={set("jobTitle")} error={errors.jobTitle} autoComplete="organization-title" />
        <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={set("phone")} autoComplete="tel" />
        {variant === "enterprise" ? (
          <SelectField label="What's your main use case?" name="useCase" options={useCases} value={values.useCase ?? ""} onChange={set("useCase")} placeholder="Select an option" />
        ) : (
          <Field label="Robot platform" name="platform" value={values.platform ?? ""} onChange={set("platform")} />
        )}
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="text-[13px] font-medium">
          What Runway products are you interested in? <span aria-hidden="true">*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {enterpriseProductOptions.map((option) => {
            const selected = values.products === option;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={selected}
                onClick={() => set("products")(selected ? "" : option)}
                className={cn(
                  "rounded-full border px-3.5 py-2 text-[13px] transition-colors",
                  selected
                    ? "border-off-black bg-off-black text-white"
                    : "border-off-black/15 text-off-black/75 hover:border-off-black/40",
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
        {errors.products ? <p className="text-[12px] text-red-600">{errors.products}</p> : null}
        {variant === "enterprise" ? (
          <p className="text-[12px] text-slate-gray">
            Model Weights Licensing — license Runway&apos;s underlying AI model weights for your bespoke
            requirements. Custom pricing.
          </p>
        ) : null}
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[13px] font-medium">
          How can we help? <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => set("message")(event.target.value)}
          className={cn(
            "w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none",
            errors.message ? "border-red-500" : "border-input",
            "focus-visible:border-off-black focus-visible:ring-[3px] focus-visible:ring-offset-0",
          )}
        />
        {errors.message ? (
          <p id="message-error" className="text-[12px] text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" className="h-11 rounded-full px-6">
            Submit
          </Button>
          <p className="text-[12px] text-slate-gray">
            Demo form — validated in your browser, never transmitted.
          </p>
        </div>
        <p className="text-[12px] leading-relaxed text-slate-gray">
          By submitting this form, you agree to our{" "}
          <a href="/terms-of-use" className="underline underline-offset-2">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
