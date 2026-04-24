/**
 * Página principal da Landing Page
 * 
 * Importa e renderiza o componente HeroSection
 * para o curso de Python e IA
 */

import HeroSection from '../components/HeroSection/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
