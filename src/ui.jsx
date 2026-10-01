import {useEffect,useRef,useState} from 'react';
export function useIn(){const r=useRef(),[on,set]=useState(false);useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){set(true);o.disconnect()}},{threshold:.2});o.observe(r.current);return()=>o.disconnect()},[]);return[r,on]}
export function Reveal({children,className='',as:T='div'}){const[r,on]=useIn();return<T ref={r} className={`reveal ${on?'in':''} ${className}`}>{children}</T>}
