import {useParams} from 'react-router-dom';
import {NAV,TOOLS} from './data.js';
import {Reveal} from './ui.jsx';
const LIVE='https://lflp-lagos.com/';
const AEFE='Administered under the Agence pour l’Enseignement Français à l’Étranger (AEFE), part of the French Ministry of Foreign Affairs.';
/* Only facts confirmed on lflp-lagos.com. Everything else renders a marked placeholder. */
const P={
'our-story':{layout:'timeline',intro:'From a small association school in 1958 to a full French lycée in Lagos.',events:[[1958,'The French School of Lagos is founded by the Association Française du Nigeria (AFN). It first operates from several locations in Ikoyi and Victoria Island.'],[1987,'The current school is built with the help of the French Ministry of Foreign Affairs.'],[1991,'An agreement with the new AEFE links the school to the French authorities, which give it financial support to run.'],[1997,'The French School officially becomes the “Lycée Français”.']]},
'why-lflp':{intro:'A genuine French school from start to finish.',text:['The Lycée Français of Lagos is one of the 494 school establishments depending on the AEFE in the world.',AEFE]},
'who-are-we':{intro:'A well-established institution in the Lagos school landscape, founded in 1958.',text:['Training your child at the French school Louis Pasteur in Lagos from kindergarten to senior school is an informed step.','The education system puts the child at the heart of pedagogy, training enlightened and critical citizens of the world.']},
'afn-management-team':{intro:'The Association Française du Nigeria (AFN) founded the school in 1958 and manages it.',text:['Team names and roles are on the live page.']},
'primary-school':{intro:'Kindergarten and primary school at LFLP.'},'middle-school':{intro:'Collège: the middle school years.'},'high-school':{intro:'Lycée: the high school years, leading to the Baccalauréat.'},
'exams-qualifications':{intro:'The Baccalauréat (Advanced Level) is recognised worldwide.',text:['Students can be admitted into prestigious universities anywhere in the world with their Baccalauréat.']},
'language-policy':{intro:'French is the main teaching language, alongside many others.',text:['English, Spanish, Arabic, German and many others are taught, some on demand.']},
'educational-guidance':{intro:'The LFLP University Guidance Team informs, supports and guides students in choosing their future.'},
'arts':{intro:'Arts at LFLP.'},'sports':{intro:'Sports at LFLP.'},
'after-school-activities':{intro:'Over 40 extra-curricular activities to develop well-balanced lifestyles, acquire new skills and discover new passions.'},
'adn-aefe-exchange-programme':{intro:'The ADN-AEFE exchange programme.'},
'facilities':{intro:'Facilities intended to improve students’ health and engagement.',text:['Over 500 international students learn here. We nurture each student’s academic performance, curiosity and creativity.']},
'useful-information':{intro:'Practical information for families.',tools:1},
'testimonials':{intro:'What our community says.'},'academic-calendar':{intro:'The academic calendar (Calendrier académique).'},'groupe-humanitaire':{intro:'The LFLP humanitarian group.'},'news':{layout:'news',intro:'The latest from the International French School Lagos.'},'health':{intro:'Health at LFLP.'},
'visit-lflp':{intro:'See the school for yourself.',cta:1},'apply-to-lflp':{intro:'Registration is completed through the Eduka portal.',cta:1,eduka:1},'fees':{intro:'Tuition and registration fees.'},
'beyond-lflp':{intro:'Where LFLP graduates go next.',text:['Students can be admitted into prestigious universities anywhere in the world. The LFLP University Guidance Team supports their choices.']},'alumni-testimonials':{intro:'Words from our graduates.'},
'contact':{layout:'contact',intro:'Get in touch with the school.'},'careers':{layout:'careers',intro:'Join the LFLP team.'}};
const NEWS=[['Success in Baccalauréat, graduation and prom','12 June 2026','success-in-baccalaureat-graduation-and-prom'],['LFLP funday on the theme Nature’s Playground','31 May 2026','lflp-funday-on-the-theme-natures-playground'],['The CM2 between Paris and Bretagne','15 May 2026','the-cm2-between-paris-and-bretagne'],['The 4ème students explore Paris','17 April 2026','the-4eme-students-explore-paris']];
const META={contact:['Contact','Contact'],careers:['Careers','Careers']};
const Todo=({slug})=><div className="todo"><b>Content to migrate</b><p>The full text and images for this page have not been copied over yet. Nothing has been invented.</p><a href={LIVE+slug+'/'}>View the current page on lflp-lagos.com</a></div>;
export default function Page(){const{slug}=useParams();const p=P[slug];let sec='School',title=slug;
for(const[t,l]of NAV)for(const[n,h]of l)if(h==='#/'+slug){sec=t;title=n}
if(META[slug])[sec,title]=META[slug];
if(!p)return<section className="wrap ph"><h1>Page not found</h1><a className="btn" href="#/">Back home</a></section>;
const sib=NAV.find(([t])=>t===sec)?.[1]||[];
return<><header className="phead"><div className="wrap"><nav aria-label="Breadcrumb"><a href="#/">Home</a> / {sec}</nav><h1>{title}</h1><p>{p.intro}</p></div></header>
<div className={`wrap pbody ${sib.length?'':'solo'}`}>{sib.length>0&&<aside className="side" aria-label={sec}><h2>{sec}</h2>{sib.map(([n,h])=><a key={h} href={h} aria-current={h==='#/'+slug?'page':undefined}>{n}</a>)}</aside>}
<article>
{p.layout==='timeline'&&<ol className="tl">{p.events.map(([y,t])=><Reveal as="li" key={y}><b>{y}</b><p>{t}</p></Reveal>)}</ol>}
{p.layout==='news'&&<div className="ngrid1">{NEWS.map(([t,d,s])=><a key={s} href={LIVE+s+'/'}><time>{d}</time><h3>{t}</h3></a>)}</div>}
{p.layout==='contact'&&<div className="contact"><address><h3>Address</h3>16 Younis Bashorun Street,<br/>Victoria Island Annex,<br/>PO Box 72172, Lagos, Nigeria<h3>Phone</h3><a href="tel:+2347071357661">+234 707 135 7661</a><br/><a href="tel:+2347001235272">+234 700 123 5272</a><h3>Email</h3><a href="mailto:lyceefrancais@lflp-lagos.com">lyceefrancais@lflp-lagos.com</a><h3>Map</h3><a href="https://goo.gl/maps/RC9iPR59CMs">Open in Google Maps</a></address>
<form onSubmit={e=>{e.preventDefault();const f=new FormData(e.target);location.href=`mailto:lyceefrancais@lflp-lagos.com?subject=${encodeURIComponent(f.get('s'))}&body=${encodeURIComponent(f.get('m')+'\n\n'+f.get('n'))}`}}><label>Your name<input name="n" required/></label><label>Subject<input name="s" required/></label><label>Message<textarea name="m" rows="6" required/></label><button className="btn">Send by email <i aria-hidden>→</i></button></form></div>}
{p.layout==='careers'&&<><p>The school lists recruitment on its site under “We are recruiting / On recrute”.</p><Todo slug="careers"/></>}
{p.text?.map(t=><p key={t} className="prose">{t}</p>)}
{p.tools&&<ul className="tools">{TOOLS.map(([n,h])=><li key={n}><a href={h}>{n}</a></li>)}</ul>}
{p.eduka&&<a className="btn" href="https://lflplagos.eduka.school/login">Apply on Eduka <i aria-hidden>→</i></a>}
{p.cta&&<p className="prose">Questions first? <a href="#/contact">Contact the school</a>.</p>}
{!p.layout&&!['who-are-we','why-lflp'].includes(slug)&&<Todo slug={slug}/>}
</article></div></>}
