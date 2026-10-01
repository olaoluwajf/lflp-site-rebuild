const S='https://lflp-lagos.com/';
export const HERO='https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2400&q=85';
export const LOGO=S+'wp-content/uploads/2022/01/LFLPLOGO-removebg-preview.png';
export const NAV=[
['About',[['A member of AEFE','why-lflp'],['Our story','our-story'],['Who are we?','who-are-we'],['Governance','our-governance'],['AFN management team','afn-management-team'],['French schools network','french-schools-networkaefe']]],
['Learning',[['Primary school','primary-school'],['Middle school','middle-school'],['High school','high-school'],['Exams & qualifications','exams-qualifications'],['Language policy','language-policy'],['Arts','arts'],['Sports','sports'],['Educational guidance','educational-guidance']]],
['School life',[['After school activities','after-school-activities'],['Exchange programme','adn-aefe-exchange-programme'],['Facilities','facilities'],['Useful information','useful-information']]],
['Community',[['Testimonials','testimonials'],['Academic calendar','academic-calendar'],['Groupe humanitaire','groupe-humanitaire'],['News','news'],['Health','health']]],
['Admissions',[['Visit LFLP','visit-lflp'],['Apply to LFLP','apply-to-lflp'],['Fees','fees']]],
['Alumni',[['Beyond LFLP','beyond-lflp'],['Alumni testimonials','alumni-testimonials']]]
].map(([t,l])=>[t,l.map(([n,s])=>[n,'#/'+s])]);
export const TOOLS=[['Eduka','https://lflplagos.eduka.school/login'],['Pronote','https://3380013c.index-education.net/pronote/pageetablissement.html'],['E-Sidoc/CDI','https://3380013c.esidoc.fr/'],['Hiboutheque','https://v2.hiboutheque.fr/mediatheques/1547-ecole-lyceelouispasteur-lagos-00/']];
// Only figures confirmed on the live site. n:null means the live site animates the value and it was not readable: fill in.
export const STATS=[[null,'%','Baccalauréat success (5 year average)'],[500,'+','Students'],[null,'+','Nationalities'],[17,'','Students per class, on average'],[40,'+','Extra-curricular activities'],[50,'%','Native teachers']];
export const APPROACH=[['French curriculum','A genuine French school from start to finish, with French as the main teaching language.'],['Multilingual education','English, Spanish, Arabic, German and more on demand, alongside French.'],['International community','Over 500 students learning together in Lagos.'],['Whole-child development','Academic performance, curiosity and creativity, supported by activities beyond class.']];
export const JOURNEY=['Kindergarten','Primary school','Middle school (Collège)','High school (Lycée)','Baccalauréat','University and beyond'];
export const LIFE=[['Sports','sports'],['Arts','arts'],['After school activities','after-school-activities'],['Exchange programme','adn-aefe-exchange-programme'],['Facilities','facilities'],['Community','groupe-humanitaire']];
export const NEWS=[['Success in Baccalauréat, graduation and prom','12 June 2026','success-in-baccalaureat-graduation-and-prom'],['LFLP funday on the theme Nature’s Playground','31 May 2026','lflp-funday-on-the-theme-natures-playground'],['The CM2 between Paris and Bretagne','15 May 2026','the-cm2-between-paris-and-bretagne'],['The 4ème students explore Paris','17 April 2026','the-4eme-students-explore-paris']].map(([t,d,s])=>[t,d,S+s+'/']);
const T=S+'wp-content/uploads/elementor/thumbs/';
export const GALLERY=['IMG_5279-re0wfsozqbiir3j63i1ylp7dfjk8pidhuvzcvlbofk','IMG_5282-re0wfuko3zl3ebgfsiv7qoqambaz4wkyj5abu58w34','IMG_5316-re0wfwgchnno1jdphjogvo97t31pkasf7elasp63qo','IMG_5498-re0wfyc0vbq8oraz6khq0ns4zusfzozvvnw9r93be8','IMG_5537-re0wg07p8zstbz88vlaz5nb26mj6f37cjx78pt0j1s','IMG_5688-re0wg23dmnvdz75ikm48amtzde9wuhet86i7ocxqpc'].map(f=>T+f+'.jpg');
