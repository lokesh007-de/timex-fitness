"use client";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";

const goals = [
  "Build strength",
  "Lose fat",
  "Improve conditioning",
  "Mobility & recovery",
  "Personal coaching",
];

export function JoinForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    if (!name || !email) {
      toast.error("Add your name and email so we can reach you.");
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setDone(true);
      toast.success("Trial booked", {
        description: `We'll email ${email} with your first session details.`,
      });
      form.reset();
      window.setTimeout(() => setDone(false), 4000);
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="group flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
            Full name
          </span>
          <input
            name="name"
            type="text"
            required
            placeholder="Jordan Blake"
            className="h-12 w-full rounded-lg border border-white/12 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-volt focus:bg-white/[0.05]"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="h-12 w-full rounded-lg border border-white/12 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-volt focus:bg-white/[0.05]"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
          Your main goal
        </span>
        <select
          name="goal"
          defaultValue={goals[0]}
          className="h-12 w-full appearance-none rounded-lg border border-white/12 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors focus:border-volt"
        >
          {goals.map((goal) => (
            <option key={goal} value={goal} className="bg-ink-3 text-white">
              {goal}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="group mt-2 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-volt px-6 py-4 text-sm font-semibold text-ink transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Booking your slot
          </>
        ) : done ? (
          <>
            <Check className="h-4 w-4" />
            You&apos;re in — check your inbox
          </>
        ) : (
          <>
            Claim free trial session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="text-center text-[11px] text-white/35">
        No card required. First session includes a movement assessment.
      </p>
    </form>
  );
}
