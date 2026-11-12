// src/Componenet/software/TelematicsArchitecturePreview.jsx
import React, { useState, useEffect } from 'react';
import {
  Server,
  Cpu,
  Database,
  Radio,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function TelematicsArchitecturePreview() {
  const [pulseCount, setPulseCount] = useState(1420);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount((prev) => prev + 1);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#080d16] p-4 text-left shadow-xl sm:p-5">
      {/* Header with integration status */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2.5 border-b border-white/[0.06] pb-3.5">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold text-white">
            Telematics Pipeline & Normalization
          </span>
          <span className="font-mono text-[10px] text-slate-400">
            • Packet #{pulseCount}
          </span>
        </div>

        <div className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-mono text-slate-300">
          3rd-Party API Integration
        </div>
      </div>

      {/* Architecture Node Grid */}
      <div className="grid gap-3 lg:grid-cols-12 lg:items-center">
        {/* Source Nodes (4 Cols) */}
        <div className="space-y-2.5 lg:col-span-4">
          {/* Geotab API */}
          <div className="rounded-lg border border-white/[0.07] bg-[#0c1220] p-3 transition hover:border-white/20">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-wider text-blue-400 uppercase">
                Source A
              </span>
              <span className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] font-mono text-slate-300">
                JSON-RPC 2.0
              </span>
            </div>
            <div className="mt-1 text-xs font-semibold text-white">Geotab API (MyGeotab)</div>
            <div className="mt-2 space-y-1 font-mono text-[10px] text-slate-400">
              <div className="flex justify-between">
                <span>Method:</span>
                <span className="text-slate-300">GetFeed(LogRecord)</span>
              </div>
              <div className="flex justify-between">
                <span>Diagnostics:</span>
                <span className="text-slate-300">DTC Faults Engine</span>
              </div>
            </div>
          </div>

          {/* Samsara API */}
          <div className="rounded-lg border border-white/[0.07] bg-[#0c1220] p-3 transition hover:border-white/20">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-wider text-blue-400 uppercase">
                Source B
              </span>
              <span className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] font-mono text-slate-300">
                REST + Webhooks
              </span>
            </div>
            <div className="mt-1 text-xs font-semibold text-white">Samsara Developer API</div>
            <div className="mt-2 space-y-1 font-mono text-[10px] text-slate-400">
              <div className="flex justify-between">
                <span>Payload:</span>
                <span className="text-slate-300">Live GPS Stream</span>
              </div>
              <div className="flex justify-between">
                <span>Driver Logs:</span>
                <span className="text-slate-300">HOS Duty Status</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Normalization Core (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="rounded-lg border border-white/[0.1] bg-[#0b101d] p-3.5 text-center">
            <div className="text-[10px] font-mono tracking-wider uppercase text-blue-400">
              Middleware Engine
            </div>

            <div className="my-2.5 flex justify-center">
              <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-blue-300">
                <Cpu size={18} />
              </div>
            </div>

            <div className="text-xs font-semibold text-white">
              Canonical Schema Normalizer
            </div>
            <p className="mt-1 text-[10px] leading-relaxed text-slate-400">
              Standardizes coordinate precision, speed units, and SAE J1939 codes.
            </p>

            <div className="mt-3 space-y-1 border-t border-white/[0.06] pt-2 text-left font-mono text-[10px]">
              <div className="flex justify-between text-slate-400">
                <span>Token Life:</span>
                <span className="text-emerald-400">Auto-Renewed</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Buffer Queue:</span>
                <span className="text-sky-300">Redis / BullMQ</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Throttle:</span>
                <span className="text-slate-300">Backoff Guard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Destination: Unified Data Lake (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="rounded-lg border border-white/[0.07] bg-[#0c1220] p-3 text-left">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase">
                Destination Store
              </span>
              <Database size={13} className="text-emerald-400" />
            </div>
            <div className="mt-1 text-xs font-semibold text-white">Unified Fleet Storage</div>
            <div className="mt-2.5 space-y-1.5 font-mono text-[10px]">
              <div className="rounded bg-black/40 px-2 py-1 text-slate-300">
                <span className="text-slate-500">Normalized:</span> 37.7749, -122.4194
              </div>
              <div className="rounded bg-black/40 px-2 py-1 text-slate-300">
                <span className="text-slate-500">Speed / Odo:</span> 62.4 mph / 84,120 mi
              </div>
              <div className="rounded bg-black/40 px-2 py-1 text-slate-300">
                <span className="text-slate-500">DTC Status:</span> 0 Critical Faults
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Spec Note */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-2.5 text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={12} className="text-blue-400" />
          Hardware message UUID hashing eliminates duplicate telemetry writes.
        </span>
        <span className="font-mono text-sky-300">Zero Rate-Limit Locks</span>
      </div>
    </div>
  );
}
