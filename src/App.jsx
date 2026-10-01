import {useEffect,useRef,useState} from 'react';
import {HashRouter,Routes,Route,useLocation} from 'react-router-dom';
import Page from './pages.jsx';
import {useIn,Reveal} from './ui.jsx';
import {HERO,LOGO,NAV,TOOLS,STATS,APPROACH,JOURNEY,LIFE,NEWS,GALLERY} from './data.js';
const A='https://lflp-lagos.com/';
function Counter({n,suffix}){const[r,on]=useIn(),[v,set]=useState(0);useEffect(()=>{if(!on||n==null)return;const s=performance.now();let f;const t=now=>{const p=Math.min((now-s)/1200,1);set(Math.round(n*(1-Math.pow(1-p,3))));if(p<1)f=requestAnimationFrame(t)};f=requestAnimationFrame(t);return()=>cancelAnimationFrame(f)},[on,n]);return<span ref={r}>{n==null?'TBC':v}{n!=null&&suffix}</span>}
function Btn({href,children,ghost}){return<a className={`btn ${ghost?'ghost':''}`} href={href}>{children}<i aria-hidden>→</i></a>}
function Navbar(){const[open,setOpen]=useState(null),[m,setM]=useState(false),[sc,setSc]=useState(false);
useEffect(()=>{const f=()=>setSc(scrollY>40);addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
useEffect(()=>{const h=()=>{setOpen(null);setM(false)};addEventListener('hashchange',h);return()=>removeEventListener('hashchange',h)},[]);
useEffect(()=>{const k=e=>e.key==='Escape'&&(setOpen(null),setM(false));addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[]);
return<header className={`nav ${sc?'compact':''}`} onMouseLeave={()=>setOpen(null)}>
<div className="util"><nav aria-label="School platforms">{TOOLS.map(([n,h])=><a key={n} href={h}>{n}</a>)}<a href={'#/contact'}>Contact</a></nav><span><a href={A}>English</a> | <a href={A+'?lang=fr'}>Français</a></span></div>
<div className="bar"><a href="#/" className="logo"><img src={LOGO} alt="LFLP Lagos"/></a>
<nav className="primary" aria-label="Main">{NAV.map(([t],i)=><button key={t} aria-expanded={open===i} onMouseEnter={()=>setOpen(i)} onFocus={()=>setOpen(i)} onClick={()=>setOpen(open===i?null:i)}>{t}</button>)}</nav>
<Btn href={'#/apply-to-lflp'}>Apply</Btn>
<button className="burger" aria-label="Menu" aria-expanded={m} onClick={()=>setM(!m)}><span/><span/></button></div>
<div className={`mega ${open!=null?'show':''}`}>{open!=null&&<ul>{NAV[open][1].map(([n,h])=><li key={n}><a href={h}>{n}</a></li>)}</ul>}</div>
<div className={`drawer ${m?'show':''}`}>{NAV.map(([t,l],i)=><details key={t}><summary>{t}</summary>{l.map(([n,h])=><a key={n} href={h}>{n}</a>)}</details>)}<Btn href={'#/apply-to-lflp'}>Apply to LFLP</Btn></div></header>}
function Hero(){return<section className="hero" id="top"><img src={HERO} alt="Students learning in a classroom" fetchpriority="high"/><div className="veil"/><div className="wrap">
<p className="eyebrow">Lycée Français Louis Pasteur</p><h1><span>An International Education.</span><span>A World of Possibilities.</span></h1>
<p className="lede">From kindergarten to senior school, LFLP Lagos provides a French education in an international environment, preparing students to thrive anywhere in the world.</p>
<div className="row"><Btn href="#why">Discover LFLP</Btn><Btn ghost href={'#/apply-to-lflp'}>Apply to LFLP</Btn></div></div><span className="scrollcue" aria-hidden/></section>}
function Stats(){return<section className="stats" aria-label="LFLP in figures"><div className="wrap grid6">{STATS.map(([n,s,l])=><Reveal key={l}><b><Counter n={n} suffix={s}/></b><small>{l}</small></Reveal>)}</div><p className="note">TBC: figures the live site animates and could not be read. Fill in from the school.</p></section>}
function Why(){return<section className="why wrap" id="why"><Reveal><h2>Why choose the French school in Lagos</h2><p>Founded in 1958, LFLP is a well-established institution in the Lagos school landscape.</p><blockquote>Providing collective responses to individual aspirations is what we do. <cite>Sylvain Malrieu, Principal</cite></blockquote><Btn href={'#/why-lflp'}>A member of AEFE</Btn></Reveal>
<Reveal className="figure"><div className="clip"><img loading="lazy" src={GALLERY[3]} alt="LFLP students"/></div><aside>Over 500 international students, learning in facilities that support health and engagement.</aside></Reveal></section>}
function Approach(){const[a,setA]=useState(0);return<section className="approach"><div className="wrap"><h2>Our approach</h2><div className="panels">{APPROACH.map(([t,d],i)=><button key={t} className={a===i?'on':''} aria-expanded={a===i} onMouseEnter={()=>setA(i)} onClick={()=>setA(i)}><em>{String(i+1).padStart(2,'0')}</em><h3>{t}</h3><p>{d}</p></button>)}</div></div></section>}
function Journey(){const r=useRef(),[p,setP]=useState(0);useEffect(()=>{const f=()=>{const b=r.current.getBoundingClientRect();setP(Math.max(0,Math.min(1,(innerHeight-b.top)/(innerHeight+b.height*.5))))};f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
return<section className="journey" ref={r}><div className="wrap"><h2>The academic journey</h2></div><div className="track"><ol style={{'--p':p}}>{JOURNEY.map((j,i)=><li key={j}><b>{i+1}</b>{j}</li>)}</ol></div></section>}
function Life(){return<section className="life wrap"><h2>School life</h2><div className="mosaic">{LIFE.map(([t,s],i)=><Reveal key={t} as="a" className={`card c${i}`}><img loading="lazy" src={GALLERY[i]} alt=""/><span>{t}<i aria-hidden>↗</i></span></Reveal>)}</div></section>}
function News(){const[f,...r]=NEWS;return<section className="news wrap"><h2>News from our school</h2><div className="ngrid"><a className="feat" href={f[2]}><time>{f[1]}</time><h3>{f[0]}</h3></a><div>{r.map(([t,d,h])=><a key={t} href={h}><time>{d}</time><h3>{t}</h3></a>)}</div></div><Btn ghost href={'#/news'}>View all news</Btn></section>}
function Gallery(){const[i,setI]=useState(null),x=useRef(0),n=GALLERY.length;
useEffect(()=>{if(i==null)return;const k=e=>{if(e.key==='Escape')setI(null);if(e.key==='ArrowRight')setI((i+1)%n);if(e.key==='ArrowLeft')setI((i+n-1)%n)};addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[i,n]);
return<section className="gallery wrap"><h2>Our community</h2><div className="masonry">{GALLERY.map((g,k)=><button key={g} onClick={()=>setI(k)} aria-label={`Open photo ${k+1}`}><img loading="lazy" src={g} alt={`LFLP community photo ${k+1}`}/></button>)}</div>
{i!=null&&<div className="lb" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={()=>setI(null)} onTouchStart={e=>x.current=e.touches[0].clientX} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-x.current;if(Math.abs(d)>50)setI((i+(d<0?1:n-1))%n)}}><button className="x" aria-label="Close">×</button><button className="pv" aria-label="Previous" onClick={e=>{e.stopPropagation();setI((i+n-1)%n)}}>‹</button><img src={GALLERY[i]} alt="" onClick={e=>e.stopPropagation()}/><button className="nx" aria-label="Next" onClick={e=>{e.stopPropagation();setI((i+1)%n)}}>›</button></div>}</section>}
function CTA(){return<section className="cta"><div className="wrap"><h2>Your child’s journey starts here.</h2><p>Visit the campus, apply, and see the fees.</p><div className="row"><Btn ghost href={'#/visit-lflp'}>Visit LFLP</Btn><Btn ghost href={'#/apply-to-lflp'}>Apply to LFLP</Btn><Btn ghost href={'#/fees'}>View fees</Btn></div></div></section>}
function Footer(){return<footer><div className="wrap fgrid"><div><img src={LOGO} alt="LFLP" width="120"/><p>The International French School Lagos, founded in 1958.</p></div>
{NAV.filter(([t])=>['Learning','Admissions','Community','About'].includes(t)).map(([t,l])=><nav key={t} aria-label={t}><h4>{t}</h4>{l.slice(0,5).map(([n,h])=><a key={n} href={h}>{n}</a>)}</nav>)}
<address><h4>Contact</h4>16 Younis Bashorun Street,<br/>Victoria Island Annex,<br/>Lagos, Nigeria<br/><a href="tel:+2347071357661">+234 707 135 7661</a><br/><a href="tel:+2347001235272">+234 700 123 5272</a><br/><a href="mailto:lyceefrancais@lflp-lagos.com">lyceefrancais@lflp-lagos.com</a></address></div>
<div className="wrap fbase"><span><a href={A}>English</a> / <a href={A+'?lang=fr'}>Français</a></span><a href={A+'legal-notice/'}>Legal Notice</a>{TOOLS.map(([n,h])=><a key={n} href={h}>{n}</a>)}<a href="https://www.facebook.com/lflplagos/">Facebook</a><a href="https://instagram.com/lflplagos">Instagram</a><a href="https://www.linkedin.com/company/lflplagos/">LinkedIn</a></div></footer>}
function Home(){return<><Hero/><Stats/><Why/><Approach/><Journey/><Life/><News/><Gallery/><CTA/></>}
function Top(){const{pathname}=useLocation();useEffect(()=>{scrollTo(0,0)},[pathname]);return null}
export default function App(){return<HashRouter><Top/><a className="skip" href="#main">Skip to content</a><Navbar/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/:slug" element={<Page/>}/></Routes></main><Footer/></HashRouter>}
