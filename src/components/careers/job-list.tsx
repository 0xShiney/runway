"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { JobDepartment } from "@/data/jobs";
import { cn } from "@/lib/utils";

export function JobList({
  departments,
  snapshotDate,
}: {
  departments: JobDepartment[];
  snapshotDate: string;
}) {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return departments
      .filter((group) => department === "All" || group.name === department)
      .map((group) => ({
        ...group,
        jobs: group.jobs.filter((job) => {
          if (!needle) return true;
          return (
            job.title.toLowerCase().includes(needle) ||
            job.location.toLowerCase().includes(needle) ||
            job.department.toLowerCase().includes(needle)
          );
        }),
      }))
      .filter((group) => group.jobs.length > 0);
  }, [departments, department, query]);

  const total = filtered.reduce((sum, group) => sum + group.jobs.length, 0);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="relative flex w-full max-w-sm items-center">
          <Search className="pointer-events-none absolute left-3 size-4 text-slate-gray" aria-hidden="true" />
          <span className="sr-only">Search open roles</span>
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search roles or locations"
            className="h-11 rounded-full pl-9 text-sm"
          />
        </label>
        <div className="flex items-center gap-3">
          <label htmlFor="department" className="sr-only">
            Filter by department
          </label>
          <select
            id="department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            className="h-11 rounded-full border border-off-black/15 bg-white px-4 text-sm text-off-black outline-none focus-visible:ring-2 focus-visible:ring-off-black/30"
          >
            <option value="All">All departments</option>
            {departments.map((group) => (
              <option key={group.name} value={group.name}>
                {group.name} ({group.jobs.length})
              </option>
            ))}
          </select>
          <p aria-live="polite" className="hidden text-sm text-slate-gray sm:block">
            {total} {total === 1 ? "role" : "roles"}
          </p>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-off-black/15 p-10 text-center">
          <p className="text-sm font-medium">No roles match that search.</p>
          <p className="mt-1 text-sm text-slate-gray">
            Try a different department, or email recruiting@runwayml.com.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {filtered.map((group) => (
            <section key={group.name} aria-labelledby={`dept-${group.name}`}>
              <div className="flex items-baseline justify-between border-b border-off-black/15 pb-3">
                <h3 id={`dept-${group.name}`} className="rw-heading-min">
                  {group.name}
                </h3>
                <span className="text-xs text-slate-gray">
                  {group.jobs.length} {group.jobs.length === 1 ? "role" : "roles"}
                </span>
              </div>
              <ul className="divide-y divide-light-gray">
                {group.jobs.map((job) => (
                  <li
                    key={`${group.name}-${job.title}`}
                    className="group flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-[15px] font-medium">{job.title}</p>
                      <p className="mt-0.5 text-[13px] text-slate-gray">{job.location}</p>
                    </div>
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-1.5 self-start rounded-full border border-off-black/15 px-4 py-2 text-[13px] font-medium transition-colors sm:self-auto",
                        "hover:border-off-black hover:bg-off-black hover:text-white",
                      )}
                    >
                      Apply
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      <span className="sr-only">for {job.title} (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <p className="text-[12px] leading-relaxed text-slate-gray">
        Listing snapshot retrieved {snapshotDate} from runway.com/careers. Roles are hosted on Ashby and
        applications open the original posting — nothing is submitted from this reconstruction.
      </p>
    </div>
  );
}
