import { useState, useEffect } from 'react';
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

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState('home');
  useScrollReveal(page);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#about') {
      setPage('about');
      window.scrollTo(0, 0);
    }
  }, []);

  const navigateHome = () => {
    setPage('home');
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  const navigateAbout = () => {
    setPage('about');
    window.location.hash = '#about';
    window.scrollTo(0, 0);
  };

  if (page === 'about') {
    return (
      <>
        <Header onNavigateAbout={navigateAbout} onNavigateHome={navigateHome} />
        <main>
          <About onNavigateHome={navigateHome} onOpenModal={() => setModalOpen(true)} />
        </main>
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </>
    );
  }

  return (
    <>
      <Header onNavigateAbout={navigateAbout} onNavigateHome={navigateHome} />
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <Services />
        <Benefits />
        <Collage />
        <CTA onOpenModal={() => setModalOpen(true)} />
        <Social onNavigateAbout={navigateAbout} />
      </main>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
