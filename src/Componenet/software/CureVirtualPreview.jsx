// src/Componenet/software/CureVirtualPreview.jsx
import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Shield,
  Activity,
  CheckCircle2,
  ChevronRight,
  Filter,
  Search,
  User,
} from 'lucide-react';

export default function CureVirtualPreview() {
  const [selectedRole, setSelectedRole] = useState('provider');

  const appointments = [
    { id: 'CV-1042', patient: 'Sarah Jenkins', type: 'Virtual Consultation', time: '10:30 AM', status: 'In Session', duration: '30 min', room: 'Consult-A' },
    { id: 'CV-1043', patient: 'Michael Vance', type: 'Follow-up Review', time: '11:15 AM', status: 'Scheduled', duration: '20 min', room: 'Consult-B' },
    { id: 'CV-1044', patient: 'Elena Rostova', type: 'Clinical Intake', time: '01:00 PM', status: 'Confirmed', duration: '45 min', room: 'Intake-01' },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#080d16] p-4 text-left shadow-xl sm:p-5">
      {/* Clean Desktop Window Frame Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-3.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="ml-2 flex items-center gap-1.5 rounded border border-white/[0.06] bg-black/40 px-2.5 py-0.5 text-[11px] font-mono text-slate-300">
            <Shield size={11} className="text-blue-400" />
            <span>portal.curevirtual.app</span>
          </div>
        </div>

        {/* Minimalist Segmented Role Switcher */}
        <div className="flex items-center rounded-lg border border-white/[0.08] bg-[#050811] p-0.5 text-[11px]">
          <button
            type="button"
            onClick={() => setSelectedRole('provider')}
            className={`rounded-md px-2.5 py-1 font-medium transition ${
              selectedRole === 'provider'
                ? 'bg-white/10 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Provider View
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole('patient')}
            className={`rounded-md px-2.5 py-1 font-medium transition ${
              selectedRole === 'patient'
                ? 'bg-white/10 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Patient View
          </button>
        </div>
      </div>

      {/* Main Workspace Grid */}
      <div className="grid gap-3.5 sm:grid-cols-12">
        {/* Left: Schedule & Queue (8 Cols) */}
        <div className="space-y-3 sm:col-span-8">
          {/* Workspace Title & Stats Strip */}
          <div className="rounded-lg border border-white/[0.06] bg-[#0c1220] p-3.5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-blue-400">
                  {selectedRole === 'provider' ? 'Clinical Workspace' : 'Patient Care Portal'}
                </span>
                <h4 className="text-sm font-semibold text-white">
                  {selectedRole === 'provider' ? "Today's Consultation Schedule" : 'Upcoming Care Sessions'}
                </h4>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live Sync
                </span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-3 text-left">
              <div>
                <div className="text-[10px] font-mono text-slate-400">Total Booked</div>
                <div className="text-xs font-semibold text-white">8 Patients</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400">Avg Slot</div>
                <div className="text-xs font-semibold text-white">25 Mins</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400">Intake State</div>
                <div className="text-xs font-semibold text-sky-300">100% Validated</div>
              </div>
            </div>
          </div>

          {/* Consultation Queue List */}
          <div className="rounded-lg border border-white/[0.06] bg-[#070b14] p-3">
            <div className="mb-2 flex items-center justify-between text-[11px]">
              <span className="font-mono text-slate-400">SCHEDULED PATIENT QUEUE</span>
              <span className="font-mono text-slate-500">UTC-05:00</span>
            </div>

            <div className="space-y-1.5">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="flex items-center justify-between rounded-md border border-white/[0.04] bg-[#0b101c] px-3 py-2 text-xs transition hover:border-white/20"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] text-slate-500">{apt.id}</span>
                    <span className="font-medium text-white">{apt.patient}</span>
                    <span className="hidden text-[11px] text-slate-400 sm:inline">• {apt.type}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-slate-400">{apt.time}</span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[9px] font-mono uppercase ${
                        apt.status === 'In Session'
                          ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                          : 'border border-white/10 bg-white/5 text-slate-300'
                      }`}
                    >
                      {apt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Technical Guard Panel (4 Cols) */}
        <div className="space-y-3 sm:col-span-4">
          <div className="rounded-lg border border-white/[0.06] bg-[#0b101c] p-3 text-left">
            <div className="text-[10px] font-mono tracking-wider uppercase text-blue-400">
              Form Architecture
            </div>
            <div className="mt-1 text-xs font-semibold text-white">Client-Side Intake Guard</div>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
              Multi-step state validation prevents empty or unvalidated clinical notes from reaching dispatch.
            </p>

            <div className="mt-3 space-y-1.5 border-t border-white/[0.06] pt-2 text-[10px] font-mono">
              <div className="flex items-center justify-between text-slate-300">
                <span>Routing:</span>
                <span className="text-sky-300">Client SPA</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>State Guard:</span>
                <span className="text-sky-300">Schema Guard</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Render Time:</span>
                <span className="text-emerald-400">&lt; 850ms</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/[0.06] bg-[#080d17] p-2.5 text-center">
            <div className="text-[10px] font-mono text-slate-400">Render Lifecycle</div>
            <div className="text-base font-bold text-white">60 FPS</div>
            <div className="text-[9px] font-mono text-slate-500">Zero Resizing Jank</div>
          </div>
        </div>
      </div>
    </div>
  );
}
