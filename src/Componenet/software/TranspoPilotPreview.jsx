// src/Componenet/software/TranspoPilotPreview.jsx
import React from 'react';
import {
  Truck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TranspoPilotPreview() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#080d16] p-4 text-left shadow-xl sm:p-5">
      {/* Header with status */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2.5 border-b border-white/[0.06] pb-3.5">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-400" />
          <span className="text-xs font-semibold text-white">
            TranspoPilot Cockpit Prototype
          </span>
          <span className="font-mono text-[10px] text-slate-400">
            • Multi-Tenant SaaS
          </span>
        </div>

        <div className="flex items-center gap-1.5 rounded border border-blue-400/30 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-mono text-blue-300">
          <span>Upcoming • Target Beta 2026/2027</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid gap-3.5 lg:grid-cols-12 lg:items-center">
        {/* Left: Cockpit Geospatial Map (7 Cols) */}
        <div className="space-y-2.5 lg:col-span-7">
          <div className="rounded-lg border border-white/[0.07] bg-[#0b101c] p-3.5">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-medium text-white">
                <Truck size={13} className="text-blue-400" />
                Fleet Dispatch & Telemetry Cockpit
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                12 Active Units
              </span>
            </div>

            {/* Simulated Vector Map Area */}
            <div className="my-3 flex h-32 flex-col justify-between rounded-md border border-white/[0.05] bg-[#060a12] p-2.5 font-mono text-[10px]">
              <div className="flex justify-between text-slate-500">
                <span>SECTOR: METRO-NORTH</span>
                <span className="text-blue-400">GEO-LOCK: 99.8%</span>
              </div>

              {/* Waypoint Coordinates */}
              <div className="relative h-16 w-full">
                <div className="absolute left-[12%] top-[20%] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="rounded bg-black/60 px-1.5 py-0.5 text-[9px] text-emerald-300 border border-white/10">
                    Unit-04 • On Route
                  </span>
                </div>
                <div className="absolute left-[50%] top-[45%] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span className="rounded bg-black/60 px-1.5 py-0.5 text-[9px] text-blue-300 border border-white/10">
                    Unit-09 • Optimized (+4m)
                  </span>
                </div>
                <div className="absolute right-[8%] top-[15%] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="rounded bg-black/60 px-1.5 py-0.5 text-[9px] text-amber-300 border border-white/10">
                    Unit-12 • Service Alert
                  </span>
                </div>
              </div>

              <div className="flex justify-between border-t border-white/[0.04] pt-1 text-[9px] text-slate-500">
                <span>Throughput: 24,000 pts/min</span>
                <span className="text-slate-400">Real-Time Event Stream</span>
              </div>
            </div>

            {/* Micro Metrics */}
            <div className="grid grid-cols-3 gap-2 text-left font-mono">
              <div className="rounded border border-white/[0.04] bg-[#060a12] p-2">
                <div className="text-[9px] text-slate-500">Route Efficiency</div>
                <div className="mt-0.5 text-xs font-semibold text-white">~14.2% Boost</div>
              </div>
              <div className="rounded border border-white/[0.04] bg-[#060a12] p-2">
                <div className="text-[9px] text-slate-500">Diagnostic Ingest</div>
                <div className="mt-0.5 text-xs font-semibold text-sky-300">OBD-II / J1939</div>
              </div>
              <div className="rounded border border-white/[0.04] bg-[#060a12] p-2">
                <div className="text-[9px] text-slate-500">Tenant Isolation</div>
                <div className="mt-0.5 text-xs font-semibold text-white">Row-Level RLS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Engineering Roadmap (5 Cols) */}
        <div className="space-y-2.5 lg:col-span-5">
          <div className="rounded-lg border border-white/[0.07] bg-[#0c1220] p-3.5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-blue-400">
              Engineering Timeline
            </div>
            <div className="mt-0.5 text-xs font-semibold text-white">Product Milestones</div>

            <div className="mt-3 space-y-2">
              <div className="flex items-start gap-2 text-xs">
                <span className="mt-0.5 font-mono text-[10px] text-emerald-400">✓</span>
                <div>
                  <div className="font-medium text-white">Phase 1: Ingestion Architecture</div>
                  <div className="text-[10px] text-slate-400">Schema models & contracts complete.</div>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs">
                <span className="mt-0.5 font-mono text-[10px] text-blue-400">02</span>
                <div>
                  <div className="font-medium text-blue-300">Phase 2: Cockpit UI & Map Engine</div>
                  <div className="text-[10px] text-slate-400">Currently in active frontend build.</div>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs opacity-60">
                <span className="mt-0.5 font-mono text-[10px] text-slate-500">03</span>
                <div>
                  <div className="font-medium text-slate-300">Phase 3: Customer Pilot Program</div>
                  <div className="text-[10px] text-slate-400">Closed beta with logistics partners.</div>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-2.5">
              <Link
                to="/case-study/transpopilot"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-blue-300 transition"
              >
                <span>Explore Technical Blueprint</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
