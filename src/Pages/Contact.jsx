import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  MessageSquareText,
  Phone,
  UserRound,
} from 'lucide-react';
import { supabase } from '../supabaseClient';

const topHeroImage =
  'https://images.unsplash.com/photo-1774953037913-af0cf688491a?auto=format&fit=crop&w=2000&q=82';

const contactImage =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const { error } = await supabase.from('messages').insert([formData]);

      if (error) throw error;

      setStatus('success');

      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: '',
      });

      window.setTimeout(() => {
        setStatus(null);
      }, 4000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[15px] text-[#111827] outline-none transition placeholder:text-slate-400 focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10';

  return (
    <main
      className="min-h-screen overflow-x-clip bg-white text-[#111827]"
      style={{
        fontFamily:
          '"Plus Jakarta Sans", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* TOP CONTACT HERO — gives the navbar breathing room */}
      <section className="relative overflow-hidden bg-[#111827] pt-24 sm:pt-28 lg:pt-32">
        <div className="relative min-h-[310px] sm:min-h-[360px]">
          <img
            src={topHeroImage}
            alt="Modern professional office interior"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#111827]/70" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,.95)_0%,rgba(17,24,39,.75)_42%,rgba(17,24,39,.35)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,.10)_0%,rgba(17,24,39,.25)_55%,rgba(17,24,39,.85)_100%)]" />

          <div className="relative mx-auto flex min-h-[310px] max-w-[1320px] items-end px-5 pb-12 sm:min-h-[360px] sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[820px] text-white"
            >
              <div className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.08em] text-[#2dd4bf]">
                <span className="h-px w-8 bg-[#0d9488]" />
                Contact MT Nexus Global
              </div>

              <h1 className="mt-5 text-[38px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[52px] lg:text-[64px]">
                Let’s talk about what you’re building.
              </h1>

              <p className="mt-4 max-w-[660px] text-[15px] leading-7 text-white/75 sm:text-[16px]">
                Share the challenge, idea or opportunity. We’ll help clarify the next step.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HERO / CONTACT */}
      <section className="-mt-8 px-5 pb-16 sm:-mt-10 sm:px-8 sm:pb-20 lg:-mt-12 lg:px-12 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(17,24,39,.08)] lg:grid-cols-[.92fr_1.08fr]"
          >
            {/* LEFT: image + contact context */}
            <div className="relative min-h-[520px] overflow-hidden bg-[#111827] lg:min-h-[760px]">
              <img
                src={contactImage}
                alt="Professional team collaborating in a modern workspace"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#111827]/45" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,.08)_0%,rgba(17,24,39,.25)_42%,rgba(17,24,39,.95)_100%)]" />

              <div className="relative flex h-full min-h-[520px] flex-col justify-between p-7 text-white sm:p-9 lg:min-h-[760px] lg:p-11">
                <div>
                  <div className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.08em] text-[#2dd4bf]">
                    <span className="h-px w-8 bg-[#0d9488]" />
                    Contact MT Nexus Global
                  </div>

                  <h1 className="mt-7 max-w-[620px] text-[44px] font-medium leading-[0.98] tracking-[-0.05em] sm:text-[58px] lg:text-[70px]">
                    Start with the problem.
                    <span className="block text-[#60a5fa]">
                      We’ll shape the path forward.
                    </span>
                  </h1>

                  <p className="mt-6 max-w-[560px] text-[15px] leading-8 text-white/80 sm:text-[17px]">
                    Tell us what you’re trying to build, improve or solve. We’ll help
                    clarify the right product, design and technical direction.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href="https://wa.me/923262927567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur-md transition hover:bg-black/45"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/[0.07] text-[#2dd4bf]">
                        <Phone size={17} strokeWidth={1.8} />
                      </div>

                      <div>
                        <div className="text-[10px] font-medium text-white/50">
                          WhatsApp us
                        </div>
                        <div className="mt-1 text-sm font-semibold text-white">
                          +92 326 2927567
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="mailto:mtnexusglobal@gmail.com" className="group rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur-md transition hover:bg-black/45">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/[0.07] text-[#2dd4bf]">
                        <Mail size={17} strokeWidth={1.8} />
                      </div>

                      <div>
                        <div className="text-[10px] font-medium text-white/50">
                          Email us
                        </div>
                        <div className="mt-1 break-all text-sm font-semibold text-white">
                          mtnexusglobal@gmail.com
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: form */}
            <div className="p-7 sm:p-9 lg:p-11 xl:p-14">
              <div className="max-w-[650px]">
                <div className="text-[11px] font-semibold tracking-[0.08em] text-[#0d9488]">
                  Project enquiry
                </div>

                <h2 className="mt-4 text-[32px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#111827] sm:text-[40px]">
                  Tell us what you’re working on.
                </h2>

                <p className="mt-4 max-w-[580px] text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                  Share a little context and we’ll get back to you to discuss the next
                  step.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-9 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold text-slate-700">
                      Your name
                    </span>

                    <div className="relative">
                      <UserRound
                        size={17}
                        strokeWidth={1.8}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className={`${fieldClass} pl-11`}
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold text-slate-700">
                      Phone number
                    </span>

                    <div className="relative">
                      <Phone
                        size={17}
                        strokeWidth={1.8}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        placeholder="Phone number"
                        className={`${fieldClass} pl-11`}
                      />
                    </div>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold text-slate-700">
                    Email address
                  </span>

                  <div className="relative">
                    <Mail
                      size={17}
                      strokeWidth={1.8}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={`${fieldClass} pl-11`}
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold text-slate-700">
                    Company
                    <span className="ml-1 font-normal text-slate-400">(optional)</span>
                  </span>

                  <div className="relative">
                    <Building2
                      size={17}
                      strokeWidth={1.8}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      placeholder="Company name"
                      className={`${fieldClass} pl-11`}
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold text-slate-700">
                    Project details
                  </span>

                  <div className="relative">
                    <MessageSquareText
                      size={17}
                      strokeWidth={1.8}
                      className="pointer-events-none absolute left-4 top-4 text-slate-400"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about the project, challenge or opportunity..."
                      className={`${fieldClass} min-h-[150px] resize-y pl-11`}
                    />
                  </div>
                </label>

                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      role="status"
                      aria-live="polite"
                      className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />
                      <span>
                        Message sent successfully. We’ll contact you soon.
                      </span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      <AlertCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-red-600"
                      />
                      <span>
                        We couldn’t send your message. Please try again.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-6 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-55"
                >
                  {isSubmitting ? 'Sending message…' : 'Send message'}

                  {!isSubmitting && (
                    <ArrowRight size={16} strokeWidth={1.8} />
                  )}
                </button>

                <p className="text-center text-[11px] leading-5 text-slate-400">
                  By submitting this form, you’re asking MT Nexus Global to contact
                  you about your enquiry.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT EXPECTATIONS */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-7 sm:grid-cols-3">
          {[
            ['01', 'Clear next steps', 'We’ll review the enquiry and respond with the most useful next step.'],
            ['02', 'Direct conversation', 'You’ll speak with the team responsible for understanding and shaping the work.'],
            ['03', 'No pressure', 'The first conversation is about fit, scope and clarity — not a hard sell.'],
          ].map(([number, title, text]) => (
            <div key={number} className="border-t border-slate-200 pt-5">
              <div className="text-[10px] font-semibold text-[#0d9488]">
                {number}
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[#111827]">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp */}
      <a
        href="https://wa.me/message/7KI5VLR44GFUL1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MT Nexus Global on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-white/70 bg-white shadow-[0_14px_35px_rgba(23,20,41,.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,20,41,.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C8CFF] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <img
          src="/WhatsApp_Image_2026-03-10_at_2.06.44_AM-removebg-preview.webp"
          alt=""
          className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          loading="lazy"
        />
      </a>
    </main>
  );
};

export default Contact;
