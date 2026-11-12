import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SignatureSections.css';

// Editorial previews. Link to /blogs until real article slugs are available.
const articles = [
  {category:'ENGINEERING', title:'Building resilient APIs for modern platforms', summary:'Architecture patterns for traffic spikes, caching and dependable delivery.', readTime:'6 MIN READ', image:'/premium-home/insight-architecture.svg'},
  {category:'PERFORMANCE', title:'Making React experiences feel faster', summary:'A practical look at rendering, asset loading and Core Web Vitals.', readTime:'8 MIN READ', image:'/premium-home/insight-performance.svg'},
  {category:'COMMERCE', title:'Choosing the right headless commerce approach', summary:'A balanced perspective on storefront flexibility and operational complexity.', readTime:'5 MIN READ', image:'/premium-home/insight-commerce.svg'},
  {category:'DESIGN SYSTEMS', title:'Design systems that teams actually use', summary:'Reusable components, decisions and collaboration that scale.', readTime:'7 MIN READ', image:'/premium-home/insight-design.svg'},
];
export default function BlogSection(){const scroller=useRef(null);const [index,setIndex]=useState(0);const reduced=useReducedMotion();
 const scrollToIndex=next=>{const el=scroller.current;if(!el)return;const idx=Math.min(articles.length-1,Math.max(0,next));const card=el.children[idx];if(card)el.scrollTo({left:card.offsetLeft-el.offsetLeft,behavior:reduced?'instant':'smooth'});setIndex(idx)};
 const onScroll=()=>{const el=scroller.current;if(!el)return;const offsets=[...el.children].map(child=>Math.abs(child.offsetLeft-el.offsetLeft-el.scrollLeft));setIndex(offsets.indexOf(Math.min(...offsets)))};
 return <section className="nx-section nx-blogs" id="blogs" aria-labelledby="nx-blogs-heading"><div className="nx-container"><div className="nx-section-head nx-section-head--split"><div><span className="nx-eyebrow"><span/> IDEAS & INSIGHTS</span><h2 id="nx-blogs-heading">Thinking beyond<br/><em>the interface.</em></h2></div><div className="nx-blog-intro"><p>Perspectives on product design, performance and engineering decisions that shape better digital work.</p><Link to="/blogs" className="nx-inline-link">Explore insights <ArrowUpRight size={17}/></Link></div></div>
 <div className="nx-article-track" ref={scroller} onScroll={onScroll} tabIndex={0} aria-label="Article previews. Scroll horizontally to see more.">{articles.map((item,i)=><motion.article key={item.title} initial={reduced?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.4,delay:i*.06}} className="nx-article-card"><div className="nx-article-image"><img src={item.image} alt="" loading="lazy"/><span>0{i+1} / 04</span></div><div className="nx-article-body"><div className="nx-article-meta"><span><BookOpen size={13}/>{item.category}</span><span><Clock3 size={13}/>{item.readTime}</span></div><h3>{item.title}</h3><p>{item.summary}</p><Link to="/blogs" aria-label={`Explore insights: ${item.title}`}>Explore topic <ArrowUpRight size={17}/></Link></div></motion.article>)}</div>
 <div className="nx-article-bottom"><div className="nx-article-progress" aria-label={`Article ${index+1} of ${articles.length}`}>{articles.map((a,i)=><button type="button" key={a.title} aria-label={`Go to article ${i+1}`} aria-current={i===index?'true':undefined} className={i===index?'is-active':''} onClick={()=>scrollToIndex(i)}/>)}</div><div className="nx-nav-buttons"><button type="button" onClick={()=>scrollToIndex(index-1)} disabled={index===0} aria-label="Previous article"><ArrowLeft size={19}/></button><button type="button" onClick={()=>scrollToIndex(index+1)} disabled={index===articles.length-1} aria-label="Next article"><ArrowRight size={19}/></button></div></div>
 </div></section>}
