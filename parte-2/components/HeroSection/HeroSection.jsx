'use client';

/**
 * HeroSection Component
 * 
 * Hero section para landing page de curso de Python e IA
 * Estilo inspirado no template Optimus - modern, minimal, bold
 */

import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

// Icone de seta para o CTA
const ArrowIcon = () => (
  <svg
    className={styles.arrowIcon}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// Icone de play para o CTA secundario
const PlayIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

// Icone de check para os bullets
const CheckIcon = () => (
  <svg
    className={styles.checkIcon}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="10" fill="rgba(139, 92, 246, 0.15)" />
    <path
      d="M8 12l3 3 5-6"
      stroke="#a855f7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Dados dos bullets
const bulletItems = [
  '+40 horas de conteudo direto ao ponto',
  'Projetos com Python + IA desde o modulo 1',
  'Suporte da comunidade com +20.000 alunos',
  'Certificado reconhecido pelo mercado',
];

// Logos de empresas/parceiros (exemplo)
const brandLogos = [
  { name: 'Google', text: 'GOOGLE' },
  { name: 'Microsoft', text: 'MICROSOFT' },
  { name: 'Amazon', text: 'AMAZON' },
  { name: 'Meta', text: 'META' },
  { name: 'Apple', text: 'APPLE' },
  { name: 'Netflix', text: 'NETFLIX' },
];

// Metricas de sucesso
const metrics = [
  { value: '+20k', label: 'alunos formados', company: 'COMUNIDADE' },
  { value: '97%', label: 'taxa de conclusao', company: 'ENGAJAMENTO' },
  { value: '+500', label: 'projetos criados', company: 'PRATICA' },
  { value: '4.9', label: 'avaliacao media', company: 'SATISFACAO' },
];

/**
 * Componente de particulas animadas
 */
function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particleCanvas} />;
}

/**
 * Componente principal HeroSection
 */
function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background elements */}
      <div className={styles.backgroundGradient} aria-hidden="true" />
      <ParticleField />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.container}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Vagas abertas para a turma de 2026</span>
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          <span className={styles.headlineRow}>Aprenda
            <span className={styles.highlight}> Python</span>
          </span>
          <span className={styles.headlineRow}>e construa
            <span className={styles.highlight}> projetos reais com IA</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className={styles.subheadline}>
          O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolacão.
        </p>

        {/* Bullets em grid */}
        <div className={styles.bulletGrid}>
          {bulletItems.map((item, index) => (
            <div key={index} className={styles.bulletItem}>
              <CheckIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className={styles.ctaGroup}>
          <button className={styles.ctaPrimary}>
            Quero comecar agora
            <ArrowIcon />
          </button>
          <button className={styles.ctaSecondary}>
            <PlayIcon />
            Ver o que vou aprender
          </button>
        </div>

        {/* Metrics ticker */}
        <div className={styles.metricsContainer}>
          <div className={styles.metricsTrack}>
            {[...metrics, ...metrics].map((metric, index) => (
              <div key={index} className={styles.metricCard}>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
                <div className={styles.metricCompany}>{metric.company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className={styles.brandsSection}>
          <p className={styles.brandsLabel}>Alunos contratados por</p>
          <div className={styles.brandsTrack}>
            <div className={styles.brandsScroll}>
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <span key={index} className={styles.brandLogo}>
                  {brand.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

