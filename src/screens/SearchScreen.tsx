import React, { useState, useCallback, useMemo, useEffect, useRef  } from 'react';
import { ArrowLeft, ChevronDown, MessageSquare, ChevronUp, Zap, AlertTriangle, Settings } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Header, Footer, HomeButton } from '../components/Layout';
import { fallasData, getFallaNames, type Falla, type Solucion } from '../data/fallas';
import '../proveedores.css';

interface SearchScreenProps {
  onBack: () => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({ onBack }) => {

   const [searchQuery, setSearchQuery] = useState('');
   const [blackScreen, setBlackScreen] = useState(false);

const searchInputRef = useRef<HTMLInputElement>(null);



  const handleGoHome = useCallback(() => {
        setSearchQuery('');
        onBack();
    }, [onBack]);


  // Scroll al inicio cuando se monta el componente o cambia la seleccion
 useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });

      const handleKeyDown = (e: KeyboardEvent) => {

        // Si ya está escribiendo en un input, no hacer nada
        const target = e.target as HTMLElement;

        if (
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA"
        ) {
            return;
        }

       if (e.key.toLowerCase() === "s") {
      setBlackScreen(true);
    }

        // F2 = buscar
        if (e.key === "F2") {
            e.preventDefault();
            searchInputRef.current?.focus();
            searchInputRef.current?.select();
        }

    };

    const handleKeyUp = (e: KeyboardEvent) => {

    if (e.key.toLowerCase() === "PrintScreen") {
      setBlackScreen(false);
    }

  };


  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);


  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("keyup", handleKeyUp);
  };


    
    

    document.addEventListener("keydown", handleKeyDown);

    return () =>
        document.removeEventListener("keydown", handleKeyDown);

  }, []);

  const fallaNames = useMemo(() => getFallaNames(), []);

 const filteredFallas = useMemo(() => {
  if (!searchQuery.trim()) return fallasData;

  const query = searchQuery.toLowerCase();

 return fallasData.filter((f) =>
  f.nombre.toLowerCase().includes(query) ||
  f.descripcion.toLowerCase().includes(query) ||
  f.ubicacion.toLowerCase().includes(query) ||
  (f.direccion ?? "").toLowerCase().includes(query)
);
}, [searchQuery]);




  return (
    <div className="min-h-screen flex flex-col">
      <Header showLogout={false} />

      {blackScreen && (
            <div className="black-screen">
              
            </div>
          )}

      <main className="flex-1 pt-24 pb-8 px-4">
        
<div className="hud-bg">

  <div className="hud-bg__grid"></div>

  <div className="hud-bg__scan"></div>

  <div className="hud-bg__vignette"></div>

</div>

        <div className="providers-page">

  <article className="provider-card provider-card--highlight">

    <div className="provider-card__top-glow"></div>

    <header className="provider-card__header">
      <div className="provider-card__badge">
        Bienvenido
      </div>

      <h2>
        📱 Lista de proveedores 📱
      </h2>

      <p className="provider-card__author">
        <strong style={{ color: 'var(--color-primary)' }}>
          By Lucas M. Tuillier — Founder of Novacell Repairs & Grow Educativa <br></br>En colaboración con Tecnicos BA
        </strong>
      </p>
    </header>

    <section className="contact-block">

      <div className="contact-block__icon">
   <MessageSquare> </MessageSquare>
      </div>

      <div className="contact-block__body">

        <h3>CONTACTO PROFE</h3>

        <a
          href="https://wa.me/5491127222169"
          target="_blank"
          rel="noopener noreferrer"
        >
          wa.me/5491127222169
        </a>

      </div>

    </section>

    <div className="admonition admonition--danger">

      <p>
        <strong>
          PROHIBIDA expresamente la distribucion de este contenido sin autorizacion ni aviso al autor del mismo. todo el contenido es de uso PRIVADO SOLO para quienes se contacten al numero en cuestion
        </strong>
      </p>

    </div>

    <div className="admonition admonition--note">

      <p className="admonition__title">
        Hacé tu aporte!!
      </p>

      <p>
        Cualquier contacto de proveedores que tengas, sea de confianza o no, o los hayas probado o no. podes mandarlo al contacto del profe! Seguí sumando para que tengamos una lista de proveedores más amplia
      </p>

    </div>

    <h2> Trabajos al gremio y Tecnicos de confianza:</h2>
    <br></br>
  
          <ul className="provider-list">
            <li className="provider">
              <span className="provider__name"><em>Mobilogic - Tomas V.</em></span>
              <span className="provider__loc">(Merlo)</span>
              <p className="provider__desc">Herramientas,Repuestos de calidad, Insumos, Asesoría y más</p>
              <a href="http://wa.me/5491133252726" target="_blank" rel="noopener">wa.me/5491133252726</a>
            </li>
            <li className="provider">
              <span className="provider__name"><em>El Point - Carim M</em></span>
              <span className="provider__loc">(Jose c Paz)</span>
              <p className="provider__desc">Venta de productos Apple y Iphone y más!</p>
              <a href="http://wa.me/5491126792677" target="_blank" rel="noopener">wa.me/5491126792677</a>
            </li>
            <li className="provider">
              <span className="provider__name"><em>Soluciones Técnicas MG - Matias A.</em></span>
              <span className="provider__loc">(José C Paz)</span>
              <p className="provider__desc">Reparaciones nivel software, Cuenta google,F4, Remotos y más</p>
              <a href="http://wa.me/5491124044642" target="_blank" rel="noopener">wa.me/5491124044642</a>
            </li>
            <li className="provider">
              <span className="provider__name"><em>NewPlayers_ - Leandro</em></span>
              <span className="provider__loc">(Ituzaingó)</span>
              <p className="provider__desc">Cambios de glass a pantallas</p>
              <a href="http://wa.me/5491159392017" target="_blank" rel="noopener">wa.me/5491159392017</a>
            </li>
          </ul>



    <hr className="divider" />

   <div className="search-control">

  <svg
    className="search-control__icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0a7 7 0 0114 0z"
    />
  </svg>

  <input
    ref={searchInputRef}
    className="search-control__input"
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Buscar proveedor..."
    autoComplete="off"
  />

  <span className="search-control__hint">
    F2
  </span>

</div>

<div className="search-stats">
  {searchQuery.trim() 
    ? `${filteredFallas.length} / ${fallasData.length} proveedores encontrados`
    : ""
  }
</div>

<p className="provider-card__author">
        <strong style={{ color: 'var(--color-error)' }}>
         Esta es una lista de proveedores de distintas partes de Buenos Aires, del país e incluso de fuera del mismo! Contiene links de páginas, Contactos, Links a whatsapp, ubicación y dirección. En caso que no cuente con algún dato, es posible que No esté al alcance. Algunos de estos fueron aportes de colegas y compañeros del curso, pero la gran mayoría tienen mucho trabajo de investigación y busqueda detrás por mi parte. Valoren el esfuerzo y dedicación que se le dá a cada contenido, y sobretodo a este, que es algo que en ningún otro curso lo dan. <br></br>Eviten difundir. <br></br>Ante la sospecha de Filtraciones el contenido puede eliminarse, perdiendo el beneficio de la lista
        </strong>
      </p>
  </article>

<section className="section">

  <h2 className="section__title section__title--green">
    🔥 Lista de proveedores 🔥
  </h2>

  <ul className="provider-list">

    {filteredFallas.length === 0 && (
      <li className="provider">
        <p className="provider__desc">
          No se encontraron proveedores con esa búsqueda.
        </p>
      </li>
    )}

    {filteredFallas.map((falla) => (

      <li key={falla.id} className="provider">

  <span className="provider__name">
    <em>{falla.nombre}</em>
  </span>

  <span className="provider__loc">
    ({falla.ubicacion})
  </span>

  {falla.descripcion && (
    <p className="provider__desc">
      {falla.descripcion}
    </p>
  )}

  {falla.telefono && (
    <>
      <p className="provider__label">Número:</p>

      <a
        href={falla.telefono}
        target="_blank"
        rel="noopener noreferrer"
      >
        {falla.telefono.replace("https://", "")}
      </a>
    </>
  )}

  {falla.direccion && (
    <>
      <p className="provider__label">Dirección:</p>
      <p>{falla.direccion}</p>
    </>
  )}

  {falla.mapa && (
    <>
      <p className="provider__label">Ubicación:</p>

      <a
        href={falla.mapa}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver ubicación
      </a>
    </>
  )}

  {falla.pagina && (
    <>
      <p className="provider__label">Página:</p>

      <a
        href={falla.pagina}
        target="_blank"
        rel="noopener noreferrer"
      >
        {falla.pagina.replace(/^https?:\/\//, "")}
      </a>
    </>
  )}

</li>

    ))}

  </ul>

</section>

</div>
        
        </main>



      <HomeButton onClick={handleGoHome} />
      <Footer />
    </div>
  );
};
