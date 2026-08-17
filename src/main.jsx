import React, {useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {siWhatsapp} from 'simple-icons/icons';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);
// Configure estos destinos en .env antes de publicar.
const WA = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/';
const IG = import.meta.env.VITE_INSTAGRAM_URL || '#instagram';
const FB = import.meta.env.VITE_FACEBOOK_URL || '#inicio';
const brands = '★ S10 ★ HILUX ★ FORTUNER ★ ACCESORIOS ★ REPUESTOS ★ ENVÍOS A TODO PARAGUAY Y BRASIL ';
const Instagram=()=> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none"/></svg>;
const Facebook=()=> <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.4l.6-4h-4V9c0-.7.3-1 1-1Z"/></svg>;
const WhatsApp=()=> <svg className="whatsapp-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={siWhatsapp.path}/></svg>;

function App(){
  const hero=useRef(), truck=useRef();
  useEffect(()=>{
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis=reduce?null:new Lenis({duration:1.1,smoothWheel:true});
    let raf; const tick=t=>{lenis?.raf(t);raf=requestAnimationFrame(tick)}; if(lenis){raf=requestAnimationFrame(tick);lenis.on('scroll',ScrollTrigger.update)}
    const ctx=gsap.context(()=>{
      if(!reduce){
        const tl=gsap.timeline();
        tl.fromTo(truck.current,{scale:1.08},{scale:1.03,duration:1.45,ease:'power4.out'});
        gsap.to(truck.current,{scale:1.1,opacity:0,y:30,ease:'none',scrollTrigger:{trigger:hero.current,start:'top top',end:'bottom top',scrub:true}});
        const reveals=[
          {trigger:'.marquee',targets:'.marquee',from:{scaleY:.78}},
          {trigger:'.categories',targets:['.categories .section-head h2','.categories .section-head p','.category-card'],from:{filter:'blur(6px)',y:42,scale:.985}},
          {trigger:'.instagram',targets:['.instagram .section-head h2','.instagram .section-head p','.insta-tile','.instagram > .button'],from:{filter:'blur(6px)',y:38,scale:.99}},
          {trigger:'footer',targets:['.footer-top h2','.footer-top .button','.footer-bottom > *'],from:{filter:'blur(6px)',y:36}}
        ];
        reveals.forEach(({trigger,targets,from})=>{
          const elements=(Array.isArray(targets)?targets:[targets]).flatMap(selector=>gsap.utils.toArray(selector));
          gsap.from(elements,{...from,duration:.9,stagger:.11,ease:'power4.out',clearProps:'transform,filter',scrollTrigger:{trigger,start:'top 82%',once:true}});
        });
        ScrollTrigger.refresh();
      }
    });
    const move=e=>{if(reduce)return;const r=hero.current.getBoundingClientRect();gsap.to(truck.current,{xPercent:-((e.clientX-r.left)/r.width-.5)*1.2,yPercent:-((e.clientY-r.top)/r.height-.5)*.7,duration:.8,ease:'power3.out'});} ;
    hero.current.addEventListener('mousemove',move);
    return()=>{if(raf)cancelAnimationFrame(raf);lenis?.destroy();ctx.revert();hero.current?.removeEventListener('mousemove',move)};
  },[]);
  return <>
    <header className="header"><a className="brand" href="#inicio" aria-label="777 Automotive, inicio"><img src="/assets/logo.jpg" alt="777 Automotive"/></a><a className="icon-link" href={WA} aria-label="Contactar por WhatsApp"><WhatsApp/></a></header>
    <main>
      <section className="hero" id="inicio" ref={hero}>
        <div className="hero-copy">
          <div className="reveal"><h1>EXPERTOS EN<br/><span>ACCESORIOS</span><br/>Y REPUESTOS</h1></div>
          <div className="hero-support"><p>Piezas y accesorios para tu S10, Hilux, Fortuner y más.</p><a className="button primary" href={WA}>COTIZAR POR WHATSAPP <WhatsApp/></a></div>
        </div>
        <div className="truck-wrap"><img ref={truck} className="truck" src="/assets/hero-showroom.jpg" alt="Pickup negra premium equipada en un showroom luminoso"/></div>
        <div className="scroll-cue"><span></span> DESLIZA PARA VER MÁS</div>
      </section>
      <section className="marquee" aria-label="Marcas, productos y cobertura"><div>{brands.repeat(4)}</div></section>
      <section className="categories" id="categorias">
        <div className="section-head"><h2>TODO PARA TU<br/>PRÓXIMO CAMINO.</h2><p>Selección especializada para rendimiento, protección y estilo.</p></div>
        <div className="category-grid">
          <a href={WA} className="category-card accessories"><div className="category-media" aria-hidden="true"/><div className="category-content"><div><span>Exterior · Interior · Performance</span><h3>ACCESORIOS</h3></div><span className="category-action">VER OPCIONES <WhatsApp/></span></div></a>
          <a href={WA} className="category-card parts"><div className="category-media" aria-hidden="true"/><div className="category-content"><div><span>Motor · Suspensión · Carrocería</span><h3>REPUESTOS</h3></div><span className="category-action">CONSULTAR STOCK <WhatsApp/></span></div></a>
        </div>
      </section>
      <section className="instagram" id="instagram">
        <div className="section-head"><h2>DESDE EL<br/>GARAGE.</h2><p>Proyectos, novedades y piezas que transforman cada vehículo.</p></div>
        <div className="instagram-grid">{[0,1,2,3].map(i=><a className={'insta-tile p'+i} href={IG} aria-label={'Publicación de Instagram '+(i+1)} key={i}><span><Instagram/></span></a>)}</div>
        <a href={IG} className="button outline">SÍGUENOS EN INSTAGRAM <Instagram/></a>
      </section>
    </main>
    <footer>
      <div className="footer-top"><h2>¿LISTO PARA<br/><span>EQUIPAR TU AUTO?</span></h2><a className="button primary large" href={WA}>HABLAR POR WHATSAPP <WhatsApp/></a></div>
      <div className="footer-bottom"><img src="/assets/logo.jpg" loading="lazy" alt="777 Automotive"/><p>Envíos Seguros: 🇵🇾 Paraguay y 🇧🇷 Brasil</p><nav><a href={FB} aria-label="Facebook"><Facebook/></a><a href={IG} aria-label="Instagram"><Instagram/></a></nav></div>
    </footer>
  </>
}
createRoot(document.getElementById('root')).render(<App/>);
