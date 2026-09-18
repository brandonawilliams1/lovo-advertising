// import { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import Benefits from './components/Benefits';
// import Collage from './components/Collage';
// import CTA from './components/CTA';
// import Social from './components/Social';
// import About from './components/About';
// import ContactModal from './components/ContactModal';
// import { useScrollReveal } from './hooks/useScrollReveal';

// export default function App() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [page, setPage] = useState('home');
//   useScrollReveal(page);

//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash === '#about') {
//       setPage('about');
//       window.scrollTo(0, 0);
//     }
//   }, []);

//   const navigateHome = () => {
//     setPage('home');
//     window.location.hash = '';
//     window.scrollTo(0, 0);
//   };

//   const navigateAbout = () => {
//     setPage('about');
//     window.location.hash = '#about';
//     window.scrollTo(0, 0);
//   };

//   if (page === 'about') {
//     return (
//       <>
//         <Header onNavigateAbout={navigateAbout} onNavigateHome={navigateHome} />
//         <main>
//           <About onNavigateHome={navigateHome} onOpenModal={() => setModalOpen(true)} />
//         </main>
//         <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
//       </>
//     );
//   }

//   return (
//     <>
//       <Header onNavigateAbout={navigateAbout} onNavigateHome={navigateHome} />
//       <main>
//         <Hero onOpenModal={() => setModalOpen(true)} />
//         <Services />
//         <Benefits />
//         <Collage />
//         <CTA onOpenModal={() => setModalOpen(true)} />
//         <Social onNavigateAbout={navigateAbout} />
//       </main>
//       <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
//     </>
//   );
// }
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Collage from './components/Collage';
import CTA from './components/CTA';
import Social from './components/Social';
import About from './components/About';
import ContactModal from './components/ContactModal';
import { useScrollReveal } from './hooks/useScrollReveal';

const SITE_URL = 'https://lovoadvertising.com';

const PAGE_META = {
  '/': {
    title: 'LoVo Advertising | Mobile LED Truck Advertising in Chicago',
    description:
      "Boost local visibility with LoVo Advertising's mobile LED truck ads, business showcase loops, and community events powered by GPS tracking, AI analytics, and design.",
  },
  '/about': {
    title: 'About LoVo Advertising | Chicago-Owned Mobile LED Trucks',
    description:
      'LoVo Advertising is a Chicago-owned mobile LED truck advertising company built around neighborhood campaigns, community events, and measurable impressions.',
  },
};

function setPageMeta(pathname) {
  const meta = PAGE_META[pathname] || PAGE_META['/'];
  document.title = meta.title;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) descriptionTag.setAttribute('content', meta.description);

  const ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (ogTitleTag) ogTitleTag.setAttribute('content', meta.title);

  const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
  if (ogDescriptionTag) ogDescriptionTag.setAttribute('content', meta.description);

  const ogUrlTag = document.querySelector('meta[property="og:url"]');
  if (ogUrlTag) ogUrlTag.setAttribute('content', `${SITE_URL}${pathname}`);

  const canonicalTag = document.querySelector('link[rel="canonical"]');
  if (canonicalTag) canonicalTag.setAttribute('href', `${SITE_URL}${pathname}`);
}

function HomePage({ onOpenModal }) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return (
    <main>
      <Hero onOpenModal={onOpenModal} />
      <Services />
      <Benefits />
      <Collage />
      <CTA onOpenModal={onOpenModal} />
      <Social />
    </main>
  );
}

function AboutPage({ onOpenModal }) {
  const navigate = useNavigate();
  return (
    <main>
      <About onNavigateHome={() => navigate('/')} onOpenModal={onOpenModal} />
    </main>
  );
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  useScrollReveal(location.pathname);

  useEffect(() => {
    setPageMeta(location.pathname);
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  const openModal = () => setModalOpen(true);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage onOpenModal={openModal} />} />
        <Route path="/about" element={<AboutPage onOpenModal={openModal} />} />
      </Routes>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
