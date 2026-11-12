import React, { Suspense, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Check, ShieldCheck, Gauge, Component, ChevronLeft, ChevronRight, Cloud, Code2, Database, Globe2, Layers, MonitorSmartphone, ShoppingBag, Smartphone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../Componenet/Hero';
import SoftwareShowcaseSection from '../Componenet/SoftwareShowcaseSection';
import './Home.css';

const TestimonialSection = React.lazy(() => import('../Componenet/TestimonialSection'));

const services = [
  { number:'01', icon:Globe2, label:'ENGINEERING', title:'Web & Platform Engineering', description:'High-performance digital platforms designed for growth, clarity and a seamless customer experience.', image:'/premium-home/web-development-photo.webp', imageAlt:'Source code displayed on a computer screen', route:'/services/web_customization', tags:['Custom web platforms','Scalable architecture'] },
  { number:'02', icon:Smartphone, label:'MOBILE PRODUCTS', title:'Mobile Product Development', description:'Purposeful mobile experiences that bring beautiful interaction design and robust engineering together.', image:'/premium-home/mobile-product-photo.webp', imageAlt:'A real smartphone displaying a mobile application on a desk', route:'/services/app_customization', tags:['iOS & Android','Cross-platform apps'] },
  { number:'03', icon:ShoppingBag, label:'DIGITAL COMMERCE', title:'Commerce Engineering', description:'Distinctive, conversion-minded storefronts built to make every discovery and purchase feel effortless.', image:'/premium-home/commerce-photo.webp', imageAlt:'A customer making a digital payment at a retail checkout', route:'/services/shopify', tags:['Shopify','Custom commerce'] },
  { number:'04', icon:Layers, label:'DESIGN & EXPERIENCE', title:'UI/UX & Digital Experience', description:'Research-led interfaces, connected journeys and design systems that make complex products intuitive.', image:'/premium-home/product-design-photo.webp', imageAlt:'A designer sketching user interface wireframes on paper', route:'/services/ui-ux', tags:['Product design','Design systems'] },
];
const technologyIcons = { web: 'react', mobile: 'android', data: 'postgresql', cloud: 'docker' };
const stacks = [
  {id:'web', image:'/premium-home/web-development-photo.webp', imageAlt:'Source code on a computer screen', name:'Web platforms', icon:Code2, title:'Engineered for the web. Designed to evolve.', desc:'A carefully selected frontend and backend ecosystem for intuitive, maintainable digital platforms.', groups:[['FRONTEND','React','Next.js','Vue','TypeScript','Tailwind CSS'],['BACKEND','Node.js','Django','Laravel','GraphQL']]},
  {id:'mobile', image:'/premium-home/mobile-product-photo.webp', imageAlt:'A smartphone displaying a mobile application', name:'Mobile apps', icon:MonitorSmartphone, title:'Beautifully built for every screen.', desc:'Native and cross-platform development with performance, accessibility and usability at the core.', groups:[['NATIVE','Swift','Kotlin','UIKit','Jetpack'],['CROSS-PLATFORM','Flutter','React Native','Ionic']]},
  {id:'data', image:'/premium-home/technology-data.webp', imageAlt:'A laptop displaying data analytics charts', name:'Data & databases', icon:Database, title:'Better foundations for smarter products.', desc:'Structured data, resilient storage and integration choices tailored to real operational demands.', groups:[['RELATIONAL','PostgreSQL','MySQL','MSSQL'],['NOSQL & CACHE','MongoDB','Firebase','Redis']]},
  {id:'cloud', image:'/premium-home/technology-cloud.webp', imageAlt:'Server racks and network equipment in a data center', name:'Cloud & DevOps', icon:Cloud, title:'Reliable infrastructure. Ready to scale.', desc:'Modern delivery and deployment workflows designed with uptime, security and maintainability in mind.', groups:[['CLOUD','AWS','Azure','Google Cloud'],['DEVOPS','Docker','Kubernetes','Terraform','Jenkins']]},
];


const steps = [
  {title:'Discover', eyebrow:'UNDERSTAND THE CHALLENGE', desc:'Align goals, users, opportunities and the outcomes that matter before beginning design.', image:'/premium-home/process-discovery.webp', imageAlt:'A team collaborating around a table'},
  {title:'Design', eyebrow:'GIVE IDEAS SHAPE', desc:'Translate complexity into flows, interfaces and a consistent digital experience.', image:'/premium-home/product-design-photo.webp', imageAlt:'A designer sketching interface wireframes'},
  {title:'Build', eyebrow:'ENGINEER WITH PURPOSE', desc:'Turn the approved direction into maintainable, responsive, production-grade software.', image:'/premium-home/web-development-photo.webp', imageAlt:'Software source code on a computer screen'},
  {title:'Validate', eyebrow:'REFINE WITH CONFIDENCE', desc:'Test accessibility, usability and performance before the release reaches your users.', image:'/premium-home/mobile-product-photo.webp', imageAlt:'A mobile application displayed on a smartphone'},
  {title:'Launch', eyebrow:'GO LIVE, THE RIGHT WAY', desc:'Deliver a coordinated launch with technical readiness and a dependable rollout.', image:'/premium-home/technology-cloud.webp', imageAlt:'Server racks supporting application deployment'},
  {title:'Improve', eyebrow:'KEEP MOVING FORWARD', desc:'Use feedback and real product needs to prioritize continuous improvements.', image:'/premium-home/technology-data.webp', imageAlt:'A laptop displaying product analytics reports'},
];

function Services() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();
  const rootRef = useRef(null);
  const showNext = (direction) => setActive(current => (current + direction + services.length) % services.length);
  const paused = !playing || hovered || focused || reducedMotion;
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive(current => (current + 1) % services.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused]);
  const service = services[active];
  const Icon = service.icon;
  return (
    <section className="mt-services mt-services-v3" id="capabilities" aria-labelledby="mt-services-title">
      <div className="mt-shell">
        <div className="mt-section-top mt-services-intro">
          <div className="mt-heading">
            <span className="mt-eyebrow"><span className="mt-dot"/> WHAT WE CREATE</span>
            <h2 id="mt-services-title" className="mt-heading-light">Digital experiences.<br/><em>Built to make a difference.</em></h2>
            <p className="mt-copy-light">From enterprise-grade platforms to elegant mobile products, we design and engineer solutions shaped by the people who use them.</p>
          </div>
          <div className="mt-slider-heading-actions">
            <span className="mt-counter"><b>0{active+1}</b><span>/ 0{services.length}</span></span>
            <button type="button" className="mt-slide-arrow" onClick={() => showNext(-1)} aria-label="Previous service"><ChevronLeft size={20}/></button>
            <button type="button" className="mt-slide-arrow" onClick={() => showNext(1)} aria-label="Next service"><ChevronRight size={20}/></button>
            <button type="button" className="mt-slide-auto" aria-label={playing ? 'Pause automatic service slides' : 'Play automatic service slides'} aria-pressed={!playing} onClick={() => setPlaying(v=>!v)}>{playing ? 'Pause' : 'Play'}</button>
          </div>
        </div>
        <div ref={rootRef} className="mt-featured-slider" aria-roledescription="carousel" aria-label="Our services" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
          <div className="mt-slider-visual">
            <AnimatePresence mode="wait">
              <motion.img key={service.image} src={service.image} alt={service.imageAlt || ''} decoding="async" loading="eager" initial={reducedMotion?false:{opacity:0,scale:1.065}} animate={{opacity:1,scale:1}} exit={reducedMotion?{}:{opacity:0,scale:1.025}} transition={{duration:.55,ease:[.22,1,.36,1]}} />
            </AnimatePresence>
            <div className="mt-slider-visual-fade"/>
            <div className="mt-slider-visual-top"><span>MT NEXUS / EXPERTISE</span><span>{service.number} — 04</span></div>
            <div className="mt-slider-visual-bottom"><span>STRATEGY</span><span>DESIGN</span><span>ENGINEERING</span></div>
          </div>
          <div className="mt-slider-detail">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={service.number} initial={reducedMotion?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={reducedMotion?{}:{opacity:0,y:-12}} transition={{duration:.3}}>
                <span className="mt-slider-kicker"><Icon size={18}/>{service.label}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="mt-slider-offer-label">WHAT WE DELIVER</div>
                <div className="mt-slider-tags">{service.tags.map(tag => <span key={tag}><Check size={15}/>{tag}</span>)}</div>
                <Link to={service.route} className="mt-slider-cta">Explore this service <ArrowUpRight size={19}/></Link>
              </motion.div>
            </AnimatePresence>
            <div className="mt-slider-dots" role="group" aria-label="Choose a service slide">
              {services.map((item,i) => <button type="button" key={item.number} className={i===active?'is-active':''} aria-label={'Show '+item.title} aria-current={i===active?'true':undefined} onClick={() => setActive(i)}><span/></button>)}
            </div>
          </div>
        </div>
        <div className="mt-service-index" aria-label="All service links">
          {services.map((item,i) => { const SmallIcon=item.icon;return <button type="button" key={item.number} className={'mt-index-item '+(i===active?'is-active':'')} onClick={()=>setActive(i)} aria-pressed={i===active}><span>0{i+1}</span><SmallIcon size={19}/><strong>{item.title}</strong><ArrowUpRight className="mt-index-arrow" size={17}/></button> })}
        </div>
      </div>
    </section>
  );
}

function ValueBand(){const values=[{icon:Component,kicker:'01 / CLARITY',title:'Design with intent',body:'Interfaces grounded in real user needs, clear journeys and reusable patterns.'},{icon:Gauge,kicker:'02 / PERFORMANCE',title:'Built to perform',body:'Responsive, accessible experiences supported by thoughtful engineering.'},{icon:ShieldCheck,kicker:'03 / LONGEVITY',title:'Ready to evolve',body:'Maintainable foundations that support iteration after the first release.'}];return <section className="mt-value" aria-label="What guides our work"><div className="mt-shell"><div className="mt-value-heading"><span>OUR APPROACH</span><p>More than good-looking screens. <strong>Digital products with substance.</strong></p></div><div className="mt-value-grid">{values.map(({icon:Icon,kicker,title,body})=><article className="mt-value-item" key={title}><div className="mt-value-icon"><Icon size={23}/></div><span>{kicker}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>}

function Technology() {
  const [active,setActive]=useState('web');
  const reduce=useReducedMotion();
  const selected=stacks.find(s=>s.id===active);
  return (
    <section className="mt-tech" id="technologies">
      <div className="mt-shell">
        <div className="mt-section-top">
          <div className="mt-heading">
            <span className="mt-eyebrow"><span className="mt-dot"/> THE TECHNOLOGY BEHIND THE EXPERIENCE</span>
            <h2>The right technology.<br/><em>For the right reasons.</em></h2>
            <p>Thoughtful technology choices create digital products that are faster to use, easier to scale and simpler to maintain.</p>
          </div>
          <span className="mt-side-note">BUILT FOR REAL-WORLD DELIVERY · {String(stacks.findIndex((item) => item.id === active) + 1).padStart(2, '0')} / 04</span>
        </div>
        <div className="mt-tech-layout">
          <div className="mt-tech-tabs" role="tablist" aria-label="Technology categories">
            {stacks.map((s,i)=>{
              return (
                <button
                  id={'mt-tab-'+s.id}
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={active===s.id}
                  aria-controls="mt-tech-panel"
                  tabIndex={active===s.id?0:-1}
                  onKeyDown={e=>{
                    if(e.key==='ArrowDown'||e.key==='ArrowRight'||e.key==='ArrowUp'||e.key==='ArrowLeft'){
                      e.preventDefault();
                      const next=(i+((e.key==='ArrowDown'||e.key==='ArrowRight')?1:-1)+stacks.length)%stacks.length;
                      setActive(stacks[next].id);
                      document.getElementById('mt-tab-'+stacks[next].id)?.focus();
                    }
                    if(e.key==='Home'||e.key==='End'){
                      e.preventDefault();
                      let n=e.key==='Home'?0:stacks.length-1;
                      setActive(stacks[n].id);
                      document.getElementById('mt-tab-'+stacks[n].id)?.focus();
                    }
                  }}
                  onClick={()=>setActive(s.id)}
                  className={'mt-tech-tab '+(active===s.id?'is-active':'')}
                >
                  <span className="mt-tab-count">0{i+1}</span>
                  <span className="mt-tab-icon"><img src={`/technology-icons/${technologyIcons[s.id]}.svg`} alt="" width="28" height="28" /></span>
                  <span className="mt-tab-name">{s.name}</span>
                  <ArrowUpRight size={18} className="mt-tab-arrow"/>
                </button>
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              role="tabpanel"
              id="mt-tech-panel"
              aria-labelledby={'mt-tab-'+active}
              key={active}
              initial={reduce?false:{opacity:0,y:14}}
              animate={{opacity:1,y:0}}
              exit={reduce?{}:{opacity:0,y:-10}}
              transition={{duration:.24}}
              className="mt-tech-panel"
            >
              <div className="mt-tech-photo"><img src={selected.image} alt={selected.imageAlt} loading="lazy" decoding="async" width="1200" height="500" /></div>
              <div className="mt-tech-panel-top">
                <div className="mt-tech-panel-icon"><img src={`/technology-icons/${technologyIcons[selected.id]}.svg`} alt="" width="28" height="28" /></div>
                <span>MT NEXUS / TECHNOLOGY</span>
              </div>
              <h3>{selected.title}</h3>
              <p>{selected.desc}</p>
              <div className="mt-tech-group-grid">
                {selected.groups.map(group=>(
                  <div className="mt-tech-group" key={group[0]}>
                    <span>{group[0]}</span>
                    {group.slice(1).map(tech=>(
                      <div key={tech}><Check size={15}/>{tech}</div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-tech-panel-bottom">
                Production-minded. Experience-led.
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 60%', 'end 55%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, mass: .35 });
  const progressHeight = useTransform(progress, [0, 1], ['0%', '100%']);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const candidates = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio);
      if (candidates.length) setActive(Number(candidates[0].target.dataset.step));
    }, { rootMargin: '-23% 0px -35% 0px', threshold: [0, .25, .5, .75] });
    stepRefs.current.filter(Boolean).forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  const jump = (index) => {
    setActive(index);
    stepRefs.current[index]?.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'center' });
  };
  const selected = steps[active];
  return <section className="mt-process mt-process-story" id="process-section" ref={sectionRef} aria-labelledby="mt-process-title">
    <div className="mt-shell">
      <div className="mt-section-top mt-process-story-intro">
        <div className="mt-heading"><span className="mt-eyebrow"><span className="mt-dot"/> THE WAY WE WORK</span>
          <h2 id="mt-process-title" className="mt-heading-light">From the first spark.<br/><em>To lasting momentum.</em></h2>
          <p className="mt-copy-light">A clear, collaborative journey that connects discovery, design, engineering and thoughtful delivery. Scroll to explore every stage.</p>
        </div>
        <span className="mt-story-count">OUR PROCESS <strong>01 ? 06</strong></span>
      </div>
      <div className="mt-story-layout">
        <div className="mt-story-steps">
          <div className="mt-story-track" aria-hidden="true"><motion.div style={{height:progressHeight}} /></div>
          {steps.map((step, i) => <article className={'mt-story-step '+(active===i?'is-current':'')} key={step.title} ref={el=>{stepRefs.current[i]=el}} data-step={i}>
            <button type="button" className="mt-story-step-button" onClick={()=>jump(i)} aria-current={active===i?'step':undefined}>
              <span className="mt-story-index">0{i+1}</span>
              <span className="mt-story-step-body"><span className="mt-story-kicker">{step.eyebrow}</span><strong>{step.title}</strong><span className="mt-story-desc">{step.desc}</span></span>
              <ArrowUpRight size={19} aria-hidden="true"/>
            </button>
            <div className="mt-story-mobile-image"><img src={step.image} alt={step.imageAlt} loading="lazy"/><span>0{i+1} / 06</span></div>
          </article>)}
        </div>
        <div className="mt-story-visual-col"><div className="mt-story-sticky">
          <div className="mt-story-art" aria-live="off">
            <AnimatePresence initial={false} mode="sync">
              <motion.img key={selected.image} src={selected.image} alt={selected.imageAlt} className="mt-story-image" initial={reduceMotion?false:{opacity:0,scale:1.065}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.025}} transition={{duration:reduceMotion?0:.65,ease:[.22,1,.36,1]}} />
            </AnimatePresence>
            <div className="mt-story-image-gradient" />
            <div className="mt-story-visual-top"><span>MT NEXUS / DELIVERY FRAMEWORK</span><span>{String(active+1).padStart(2,'0')} ? 06</span></div>
            <div className="mt-story-visual-caption" key={'caption-'+active}>
              <span>{selected.eyebrow}</span><h3>{selected.title}<span className="mt-story-period">.</span></h3><p>{selected.desc}</p>
              <div className="mt-story-progress-bars" aria-label={`Stage ${active+1} of 6`}>{steps.map((step,i)=><button key={step.title} type="button" onClick={()=>jump(i)} aria-label={`View ${step.title}`} aria-current={active===i?'step':undefined} className={i<=active?'is-filled':''}/>)}</div>
            </div>
          </div>
          <div className="mt-story-under"><span><span className="mt-dot"/> SCROLL-DRIVEN STORY</span><span>DESIGNED TO DELIVER</span></div>
        </div></div>
      </div>
    </div>
  </section>;
}

export default function Home(){
  return (
    <main className="mt-home">
      <HeroSection/>
      <Services/>
      <SoftwareShowcaseSection />
      <Technology/>
      <Process/>
      <Suspense fallback={<div className="mt-loading" role="status">Loading…</div>}>
        <TestimonialSection/>
      </Suspense>
    </main>
  );
}
