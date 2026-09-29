import { useState, useEffect, useRef } from 'react';
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

function trackPageview(pathname) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: pathname,
    page_title: document.title,
    page_location: `${SITE_URL}${pathname}`,
  });
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
  const isFirstLoad = useRef(true);
  useScrollReveal(location.pathname);

  useEffect(() => {
    setPageMeta(location.pathname);
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    // The gtag('config', ...) call in index.html already sends a page_view
    // for the URL the site loaded on, so skip firing a duplicate here.
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    trackPageview(location.pathname);
  }, [location.pathname]);

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
