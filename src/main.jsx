import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {siWhatsapp} from 'simple-icons/icons';
import {MapPin} from 'lucide-react';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);
// Los perfiles sociales pueden configurarse en .env antes de publicar.
const WA = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/595982766121';
const IG = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/777automotivecde/';
const FB = import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/people/777-Automotive/61585448434868/';
const GOOGLE_MAPS = 'https://share.google/I4kVGgefAP3qqXHle';
const MAP_EMBED = 'https://maps.google.com/maps?cid=16968087522545904581&hl=es&z=16&output=embed';
function whatsappLink(message) {
  const url = new URL(WA);
  url.searchParams.set('text', `Hola, vine por el sitio web de 777 Automotive. ${message}`);
  return url.toString();
}
const brands = '★ S10 ★ HILUX ★ FORTUNER ★ ACCESORIOS ★ REPUESTOS ★ ATENCIÓN A TODO PARAGUAY Y FRONTERA ';
const Instagram=()=> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none"/></svg>;
const Facebook=()=> <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.4l.6-4h-4V9c0-.7.3-1 1-1Z"/></svg>;
const WhatsApp=()=> <svg className="whatsapp-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={siWhatsapp.path}/></svg>;

function InstagramGallery(){
  const gallery = useRef();
  const [state, setState] = useState('loading');
  useEffect(()=>{
    const container = gallery.current;
    let disposed = false;
    let ready = false;
    let deadline;
    let sdk;
    const fail = ()=>{
      if(disposed || ready) return;
      clearTimeout(deadline);
      setState('error');
    };
    const checkEmbed = ()=>{
      if(disposed) return;
      const frame = container.querySelector('iframe');
      if(!frame) return;
      frame.title = 'Publicaciones de 777 Automotive en Instagram';
      frame.tabIndex = -1;
      // Instagram sets this height after measuring its rendered profile grid.
      if(Number(frame.getAttribute('height')) >= 518){
        ready = true;
        clearTimeout(deadline);
        setState('ready');
      }
    };
    const blockquote = document.createElement('blockquote');
    blockquote.className = 'instagram-media';
    blockquote.dataset.instgrmPermalink = IG;
    blockquote.dataset.instgrmVersion = '14';
    const link = document.createElement('a');
    link.href = IG;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Ver el perfil de 777 Automotive en Instagram';
    blockquote.append(link);
    container.append(blockquote);
    const resize = new ResizeObserver(([entry])=>{
      container.style.setProperty('--embed-scale', entry.contentRect.width / 540);
    });
    resize.observe(container);
    const mutation = new MutationObserver(checkEmbed);
    mutation.observe(container,{childList:true,subtree:true,attributes:true,attributeFilter:['height']});
    const process = ()=>{
      if(disposed) return;
      try {
        window.instgrm?.Embeds.process();
        checkEmbed();
      } catch { fail(); }
    };
    const intersection = new IntersectionObserver(entries=>{
      if(!entries.some(entry=>entry.isIntersecting)) return;
      intersection.disconnect();
      deadline = setTimeout(fail,20000);
      if(window.instgrm){ process(); return; }
      sdk = document.getElementById('instagram-sdk');
      if(!sdk){
        sdk = document.createElement('script');
        sdk.id = 'instagram-sdk';
        sdk.src = 'https://www.instagram.com/embed.js';
        sdk.async = true;
        sdk.addEventListener('load',process);
        sdk.addEventListener('error',fail);
        document.body.append(sdk);
      } else {
        sdk.addEventListener('load',process);
        sdk.addEventListener('error',fail);
      }
    },{rootMargin:'300px'});
    intersection.observe(container);
    return ()=>{
      disposed = true;
      clearTimeout(deadline);
      resize.disconnect();
      mutation.disconnect();
      intersection.disconnect();
      sdk?.removeEventListener('load',process);
      sdk?.removeEventListener('error',fail);
      container.replaceChildren();
    };
  },[]);
  return <div className="instagram-gallery" data-state={state} aria-busy={state === 'loading'}>
    <div className="instagram-embed" ref={gallery} aria-hidden={state !== 'ready'}/>
    {state !== 'ready' && <div className="instagram-status" role="status">
      <p>{state === 'error' ? 'No pudimos cargar las publicaciones de Instagram.' : 'Cargando publicaciones de Instagram…'}</p>
      <a href={IG} target="_blank" rel="noopener noreferrer">Ver perfil en Instagram <Instagram/></a>
    </div>}
  </div>;
}

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
          {trigger:'.categories',targets:['.categories .section-head h2','.categories .section-head p','.category-card'],from:{y:42,scale:.985}},
          {trigger:'.wholesale',targets:['.wholesale h2','.wholesale-offer','.wholesale-support','.wholesale .button'],from:{y:36}},
          {trigger:'.instagram',targets:['.instagram .section-head h2','.instagram .section-head p','.instagram-copy .button'],from:{y:38,scale:.99}},
          {trigger:'.contact',targets:['.contact h2','.contact-city','.contact-details','.contact .button'],from:{y:36}},
          {trigger:'footer',targets:['.footer-top h2','.footer-top .button','.footer-bottom > *'],from:{y:36}}
        ];
        reveals.forEach(({trigger,targets,from})=>{
          const elements=(Array.isArray(targets)?targets:[targets]).flatMap(selector=>gsap.utils.toArray(selector));
          gsap.from(elements,{...from,duration:.9,stagger:.11,ease:'power4.out',clearProps:'transform',scrollTrigger:{trigger,start:'top 82%',once:true}});
        });
        ScrollTrigger.refresh();
      }
    });
    const move=e=>{if(reduce)return;const r=hero.current.getBoundingClientRect();gsap.to(truck.current,{xPercent:-((e.clientX-r.left)/r.width-.5)*1.2,yPercent:-((e.clientY-r.top)/r.height-.5)*.7,duration:.8,ease:'power3.out'});} ;
    hero.current.addEventListener('mousemove',move);
    return()=>{if(raf)cancelAnimationFrame(raf);lenis?.destroy();ctx.revert();hero.current?.removeEventListener('mousemove',move)};
  },[]);
  return <>
    <header className="header"><a rel="noopener noreferrer" target="_blank" className="brand" href="#inicio" aria-label="777 Automotive, inicio"><img src="/assets/777_AUTOMOTIVE_LOGO.png" alt="777 Automotive"/></a><a rel="noopener noreferrer" target="_blank" className="icon-link" href={whatsappLink('Quisiera más información sobre sus productos.')} aria-label="Contactar por WhatsApp"><WhatsApp/></a></header>
    <main>
      <section className="hero" id="inicio" ref={hero}>
        <div className="hero-copy">
          <div className="reveal"><h1>EXPERTOS EN<br/><span>ACCESORIOS</span><br/>Y REPUESTOS</h1></div>
          <div className="hero-support"><p>Piezas y accesorios para tu S10, Hilux, Fortuner y más, con atención a todo Paraguay y frontera.</p><a rel="noopener noreferrer" target="_blank" className="button primary" href={whatsappLink('Quisiera una cotización para mi vehículo.')}>COTIZAR POR WHATSAPP <WhatsApp/></a></div>
        </div>
        <div className="truck-wrap"><img ref={truck} className="truck" src="/assets/hero-showroom.jpg" alt="Pickup negra premium equipada en un showroom luminoso"/></div>
        <div className="scroll-cue"><span></span> DESLIZA PARA VER MÁS</div>
      </section>
      <section className="marquee" aria-label="Marcas, productos y cobertura"><div>{brands.repeat(4)}</div></section>
      <section className="categories" id="categorias">
        <div className="section-head"><h2>TODO PARA TU<br/>PRÓXIMO CAMINO.</h2><p>Selección especializada para rendimiento, protección y estilo.</p></div>
        <div className="category-grid">
          <a rel="noopener noreferrer" target="_blank" href={whatsappLink('Quisiera conocer las opciones de accesorios para mi vehículo.')} className="category-card accessories"><div className="category-media" aria-hidden="true"/><div className="category-content"><div><span>Exterior · Interior · Performance</span><h3>ACCESORIOS</h3></div><span className="category-action">CONSULTAR POR WHATSAPP <WhatsApp/></span></div></a>
          <a rel="noopener noreferrer" target="_blank" href={whatsappLink('Quisiera consultar la disponibilidad de repuestos para mi vehículo.')} className="category-card parts"><div className="category-media" aria-hidden="true"/><div className="category-content"><div><span>Motor · Suspensión · Carrocería</span><h3>REPUESTOS</h3></div><span className="category-action">CONSULTAR POR WHATSAPP <WhatsApp/></span></div></a>
        </div>
      </section>
      <section className="wholesale" id="mayoristas" aria-labelledby="wholesale-title">
        <div className="wholesale-copy">
          <h2 id="wholesale-title">¿SOS<br/><span>MAYORISTA?</span></h2>
          <p className="wholesale-offer">Tenemos precios y condiciones especiales para <strong>mayoristas.</strong></p>
          <p className="wholesale-support">Consultá las condiciones para tu próxima compra de accesorios y repuestos.</p>
          <a rel="noopener noreferrer" target="_blank" className="button primary" href={whatsappLink('Soy mayorista y quisiera conocer los precios y condiciones especiales.')}>CONSULTAR CONDICIONES <WhatsApp/></a>
        </div>
        <figure className="wholesale-media">
          <img src="/assets/mayoristas.webp" alt="Imagen ilustrativa de accesorios, repuestos y cajas de distribución automotriz" loading="lazy" decoding="async" width="1536" height="1024"/>
        </figure>
      </section>
      <section className="instagram" id="instagram">
        <div className="instagram-copy">
          <div className="section-head"><h2>DESDE EL<br/>GARAGE.</h2><p>Proyectos, novedades y piezas que transforman cada vehículo.</p></div>
          <a rel="noopener noreferrer" target="_blank" href={IG} className="button outline">SÍGUENOS EN INSTAGRAM <Instagram/></a>
        </div>
        <InstagramGallery/>
      </section>
      <section className="contact" id="contacto" aria-labelledby="contact-title">
        <div className="contact-copy">
          <h2 id="contact-title">UBICACIÓN<br/>Y CONTACTO.</h2>
          <p className="contact-city">Ciudad del Este, Paraguay</p>
          <dl className="contact-details">
            <div><dt>Dirección</dt><dd>Km 4 Barrio Che La Reina,<br/>calle R.I 2 de Mayo</dd></div>
            <div><dt>WhatsApp</dt><dd><a rel="noopener noreferrer" target="_blank" className="contact-whatsapp" href={whatsappLink('Quisiera información para visitar la tienda.')}><WhatsApp/> +595 982 766121</a></dd></div>
            <div><dt>Correo electrónico</dt><dd><a rel="noopener noreferrer" target="_blank" href="mailto:777automotivecde@gmail.com">777automotivecde@gmail.com</a></dd></div>
          </dl>
          <a className="button primary" href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer">ABRIR EN GOOGLE MAPS <MapPin aria-hidden="true"/></a>
        </div>
        <div className="contact-map">
          <iframe src={MAP_EMBED} title="Ubicación de 777 Automotive en Ciudad del Este" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
        </div>
      </section>
    </main>
    <footer>
      <div className="footer-top">
        <div className="footer-copy">
          <h2>¿LISTO PARA<br/><span>EQUIPAR TU AUTO?</span></h2>
        </div>
        <a rel="noopener noreferrer" target="_blank" className="button primary large" href={whatsappLink('Quisiera más información sobre sus productos.')}>HABLAR POR WHATSAPP <WhatsApp/></a>
      </div>
      <div className="footer-bottom">
        <img src="/assets/777_AUTOMOTIVE_LOGO.png" loading="lazy" alt="777 Automotive"/>
        <nav><a rel="noopener noreferrer" target="_blank" href={FB} aria-label="Facebook"><Facebook/></a><a rel="noopener noreferrer" target="_blank" href={IG} aria-label="Instagram"><Instagram/></a></nav>
      </div>
    </footer>
  </>
}
createRoot(document.getElementById('root')).render(<App/>);
