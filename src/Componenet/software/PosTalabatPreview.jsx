// src/Componenet/software/PosTalabatPreview.jsx
import React, { useState } from 'react';
import {
  Utensils,
  Receipt,
  Wifi,
  CheckCircle2,
  Clock,
  Printer,
} from 'lucide-react';

export default function PosTalabatPreview() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    {
      id: 0,
      label: 'Inbound Webhook',
      sub: 'Talabat Order Broadcast',
      code: 'POST /api/talabat/webhook',
      status: 'HMAC Validated',
    },
    {
      id: 1,
      label: 'Schema Mapping',
      sub: 'Item & Modifier Parser',
      code: 'payload.toPOSFormat()',
      status: 'Mapped (3 Items)',
    },
    {
      id: 2,
      label: 'Kitchen Dispatch',
      sub: 'Thermal Print & KDS',
      code: 'pos.dispatchTicket()',
      status: 'Printed & Queued',
    },
    {
      id: 3,
      label: 'Status Callback',
      sub: 'Courier ETA Synchronized',
      code: 'PATCH /v1/orders/status',
      status: 'State: IN_PREP',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#080d16] p-4 text-left shadow-xl sm:p-5">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2.5 border-b border-white/[0.06] pb-3.5">
        <div className="flex items-center gap-2">
          <Utensils size={14} className="text-emerald-400" />
          <span className="text-xs font-semibold text-white">
            POS & Delivery Platform Bridge
          </span>
          <span className="font-mono text-[10px] text-slate-400">
            • Sub-2s Sync
          </span>
        </div>

        <div className="flex items-center gap-1.5 rounded border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-mono text-slate-300">
          <Wifi size={10} className="text-emerald-400" />
          <span>Local Failover Buffer: Active</span>
        </div>
      </div>

      {/* Main Workflow Grid */}
      <div className="grid gap-3.5 lg:grid-cols-12 lg:items-center">
        {/* Step Flow List (7 Cols) */}
        <div className="space-y-2 lg:col-span-7">
          <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
            Automated Order Pipeline
          </div>

          <div className="grid gap-1.5">
            {steps.map((st, i) => (
              <button
                key={st.id}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`flex w-full items-center justify-between rounded-lg border p-2.5 text-left transition duration-150 ${
                  activeStep === i
                    ? 'border-white/20 bg-[#0d1424]'
                    : 'border-white/[0.05] bg-[#060a12] hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`font-mono text-[10px] ${
                      activeStep === i ? 'font-bold text-white' : 'text-slate-500'
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-white">{st.label}</div>
                    <div className="font-mono text-[10px] text-slate-400">{st.code}</div>
                  </div>
                </div>

                <div>
                  <span
                    className={`rounded px-1.5 py-0.5 font-mono text-[9px] uppercase ${
                      activeStep === i
                        ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    {st.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Simulation Thermal Receipt (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-lg border border-white/[0.08] bg-[#0c1220] p-3.5 font-mono text-[11px] text-slate-300">
            <div className="mb-2.5 flex items-center justify-between border-b border-white/[0.06] pb-2 text-[10px]">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <Receipt size={12} className="text-emerald-400" />
                POS TICKET #TLB-8914
              </span>
              <span className="text-emerald-400">AUTO-DISPATCHED</span>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-white">
                <span>1x Artisan Truffle Burger</span>
                <span>AED 48.00</span>
              </div>
              <div className="pl-2 text-[10px] text-slate-400">
                + Extra Aged Cheddar (AED 4.00)
              </div>
              <div className="pl-2 text-[10px] text-amber-300/80">
                * Note: Sauce on the side
              </div>

              <div className="flex justify-between pt-1 font-semibold text-white">
                <span>1x Hand-Cut Rosemary Fries</span>
                <span>AED 18.00</span>
              </div>

              <div className="border-t border-dashed border-white/20 pt-2 text-[10px] text-slate-400">
                <div className="flex justify-between">
                  <span>Channel:</span>
                  <span className="text-white">Talabat Delivery</span>
                </div>
                <div className="flex justify-between">
                  <span>Courier ETA:</span>
                  <span className="font-bold text-white">14 Mins</span>
                </div>
                <div className="flex justify-between">
                  <span>Idempotency Key:</span>
                  <span className="text-slate-400">#9f8a...c3e1</span>
                </div>
              </div>
            </div>

            <div className="mt-2.5 border-t border-white/[0.06] pt-2 text-center text-[10px] font-sans text-emerald-300">
              ✓ Direct Ingestion — Zero Manual Tablet Re-entry
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-2.5 text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={12} className="text-emerald-400" />
          Store-and-forward queue eliminates dropped orders during local network drops.
        </span>
        <span className="font-mono text-emerald-300">100% Ticket Accuracy</span>
      </div>
    </div>
  );
}
