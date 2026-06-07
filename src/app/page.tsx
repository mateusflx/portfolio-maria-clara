import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import WhatsAppModal from '@/components/WhatsAppModal';

const WHATSAPP_URL =
  'https://wa.me/558393089267?text=Ol%C3%A1%2C%20Maria%20Clara!%0AVim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20e%20tenho%20interesse%20em%20conhecer%20seu%20trabalho.%20Podemos%20conversar%3F';
const INSTAGRAM_URL = 'https://www.instagram.com/mariaclaraglf/';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.04 4C9.43 4 4.06 9.37 4.06 15.98c0 2.11.55 4.17 1.6 5.99L4 28l6.2-1.63a11.9 11.9 0 0 0 5.84 1.49h.01c6.6 0 11.98-5.37 11.98-11.98C28.03 9.37 22.65 4 16.04 4Zm0 21.84h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.68.97.98-3.59-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.46 4.45-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.9-9.92 9.9Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.95c-3.15 0-3.52.01-4.76.07-.97.04-1.5.21-1.85.34-.46.18-.8.4-1.15.74-.34.35-.56.69-.74 1.15-.13.35-.3.88-.34 1.85-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.97.21 1.5.34 1.85.18.46.4.8.74 1.15.35.34.69.56 1.15.74.35.13.88.3 1.85.34 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.97-.04 1.5-.21 1.85-.34.46-.18.8-.4 1.15-.74.34-.35.56-.69.74-1.15.13-.35.3-.88.34-1.85.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.97-.21-1.5-.34-1.85a3.1 3.1 0 0 0-.74-1.15 3.1 3.1 0 0 0-1.15-.74c-.35-.13-.88-.3-1.85-.34-1.24-.06-1.61-.07-4.76-.07Zm0 3.32a4.57 4.57 0 1 1 0 9.14 4.57 4.57 0 0 1 0-9.14Zm0 7.54a2.97 2.97 0 1 0 0-5.94 2.97 2.97 0 0 0 0 5.94Zm5.82-7.74a1.07 1.07 0 1 1-2.14 0 1.07 1.07 0 0 1 2.14 0Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollReveal />
      <WhatsAppModal />

      <section id="hero" className="hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="blob blob-1" />
          <span className="blob blob-2" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal>
            <div className="hero-eyebrow">
              <span className="hero-badge">
                <span className="dot" /> Disponível para novas parcerias
              </span>
              <small className="hero-eyebrow-label">Social Media Premium</small>
            </div>
            <h1>
              Criação de conteúdo e <span className="highlight">estratégia digital</span> para marcas que querem destaque.
            </h1>
            <p>
              Sou Maria Clara Gama, profissional apaixonada por comunicação, marketing digital e criação de conteúdo. Trabalho com marcas para construir autoridade, gerar conexões reais e fortalecer resultados com presença visual sofisticada.
            </p>
            <div className="hero-actions">
              <a className="button whatsapp-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Solicitar Orçamento
              </a>
              <a className="button-secondary" href="#portfolio">
                Ver Projetos
              </a>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-photo">
              <Image
                src="/mc-1.jpeg"
                alt="Maria Clara Gama"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 45vw"
                className="hero-img"
              />
              <span className="photo-chip">3+ anos de experiência</span>
              <div className="photo-name">
                <span className="monogram">MC</span>
                <div>
                  <strong>Maria Clara Gama</strong>
                  <span>Social Media &amp; Estrategista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="section-title" data-reveal>
            <small>Sobre</small>
            <h2>Uma criadora de conteúdo com alma de estrategista.</h2>
          </div>
          <div className="about-grid">
            <div className="about-photo" data-reveal>
              <Image
                src="/mc-3.jpeg"
                alt="Maria Clara Gama"
                fill
                sizes="(max-width: 900px) 90vw, 40vw"
                className="about-img"
              />
            </div>
            <div className="about-content">
              <div className="card" data-reveal>
                <strong>Maria Clara Gama de Luna Freire França</strong>
                <p>
                  Sou especialista em social media e comunicação digital, dedicada a transformar perfis em narrativas visuais poderosas. Meu trabalho une design, copy e performance para fortalecer a autoridade de marcas e projetos.
                </p>
              </div>
              <div className="card" data-reveal>
                <strong>Meu foco</strong>
                <ul className="card-list">
                  <li>Parcerias estratégicas que aumentam autoridade.</li>
                  <li>Conteúdo relevante com estética premium.</li>
                  <li>Comunicação transparente e alinhada ao público.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section section-alt">
        <div className="container">
          <div className="section-title" data-reveal>
            <small>Serviços</small>
            <h2>Ofertas completas para sua presença digital.</h2>
          </div>
          <div className="grid-3">
            <article className="card card-hover" data-reveal>
              <span className="card-icon">📱</span>
              <strong>Social Media</strong>
              <p>Planejamento, criação e gestão de conteúdo que conecta e engaja.</p>
            </article>
            <article className="card card-hover" data-reveal>
              <span className="card-icon">✍️</span>
              <strong>Copywriting</strong>
              <p>Textos estratégicos para legendas, anúncios e comunicação da marca.</p>
            </article>
            <article className="card card-hover" data-reveal>
              <span className="card-icon">🎨</span>
              <strong>Design</strong>
              <p>Identidade visual e layouts elegantes para feed, stories e materiais digitais.</p>
            </article>
            <article className="card card-hover" data-reveal>
              <span className="card-icon">🎬</span>
              <strong>Edição de Vídeo</strong>
              <p>Reels e vídeos envolventes com ritmo, narrativa e estilo premium.</p>
            </article>
            <article className="card card-hover" data-reveal>
              <span className="card-icon">✨</span>
              <strong>Storymaker</strong>
              <p>Histórias visuais diárias que fortalecem a presença e a conexão com a audiência.</p>
            </article>
            <article className="card card-hover" data-reveal>
              <span className="card-icon">📈</span>
              <strong>Estratégia</strong>
              <p>Direção criativa e planejamento orientado a autoridade e resultados reais.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="tools" className="section">
        <div className="container">
          <div className="section-title" data-reveal>
            <small>Ferramentas</small>
            <h2>Softwares usados para criar resultados consistentes.</h2>
          </div>
          <div className="grid-4">
            <div className="tool-card" data-reveal>
              <span className="card-icon">🖌️</span>
              <strong>Canva</strong>
              <p>Design ágil com qualidade visual profissional.</p>
            </div>
            <div className="tool-card" data-reveal>
              <span className="card-icon">🪄</span>
              <strong>Photoshop</strong>
              <p>Edição detalhada e imagens tratadas para impacto visual.</p>
            </div>
            <div className="tool-card" data-reveal>
              <span className="card-icon">🎬</span>
              <strong>CapCut</strong>
              <p>Vídeos dinâmicos e conteúdos prontos para redes sociais.</p>
            </div>
            <div className="tool-card" data-reveal>
              <span className="card-icon">🤖</span>
              <strong>ChatGPT</strong>
              <p>Copy inteligente e estruturação de ideias para cada campanha.</p>
            </div>
            <div className="tool-card" data-reveal>
              <span className="card-icon">📣</span>
              <strong>Meta Ads</strong>
              <p>Anúncios eficientes com segmentação e performance em mente.</p>
            </div>
            <div className="tool-card" data-reveal>
              <span className="card-icon">🌐</span>
              <strong>WordPress</strong>
              <p>Páginas e blogs com presença profissional e relevante.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-alt">
        <div className="container">
          <div className="section-title" data-reveal>
            <small>Experiência</small>
            <h2>Resultados construídos em 3 anos de trabalho estratégico.</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item" data-reveal>
              <span className="timeline-year">2023</span>
              <h3>Gestão completa de redes sociais</h3>
              <p>Planejamento de conteúdo e campanhas para marcas de moda, beleza e lifestyle.</p>
            </div>
            <div className="timeline-item" data-reveal>
              <span className="timeline-year">2024</span>
              <h3>Projetos de branding digital</h3>
              <p>Desenvolvimento de identidade visual e presença online para perfis profissionais.</p>
            </div>
            <div className="timeline-item" data-reveal>
              <span className="timeline-year">2025</span>
              <h3>Resultados com engajamento e parcerias</h3>
              <p>Aumento de autoridade de clientes por meio de conteúdo estratégico e storytelling.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <div className="section-title" data-reveal>
            <small>Portfólio</small>
            <h2>Trabalhos criativos para marcas que querem se destacar.</h2>
          </div>
          <div className="grid-2">
            <article className="card project-card" data-reveal>
              <span className="tag">Beleza premium</span>
              <strong>Marca de beleza</strong>
              <p>Campanhas de conteúdo com visual elegante e narrativa emocional.</p>
            </article>
            <article className="card project-card" data-reveal>
              <span className="tag">Branding</span>
              <strong>Estúdio criativo</strong>
              <p>Posts e stories para fortalecer posicionamento e autoridade.</p>
            </article>
            <article className="card project-card" data-reveal>
              <span className="tag">Lançamento</span>
              <strong>Institucional digital</strong>
              <p>Conteúdo para lançamento de produto e aumento de percepção de valor.</p>
            </article>
            <article className="card project-card" data-reveal>
              <span className="tag">Creator</span>
              <strong>Perfil pessoal</strong>
              <p>Design de imagem e roteiro de conteúdo para influenciadoras e creators.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="education" className="section section-alt">
        <div className="container">
          <div className="section-title" data-reveal>
            <small>Formação</small>
            <h2>Conhecimento alinhado à prática criativa.</h2>
          </div>
          <div className="education-list">
            <div className="education-card" data-reveal>
              <h3>Marketing Digital</h3>
              <small>Curso completo em estratégia de redes sociais e comunicação digital.</small>
              <p>Aprendizado aplicado em criação de conteúdo, branding e anúncios para redes sociais.</p>
            </div>
            <div className="education-card" data-reveal>
              <h3>Comunicação e Conteúdo</h3>
              <small>Especialização em produção de textos e storytelling para marcas.</small>
              <p>Desenvolvimento de narrativas que traduzem valores em linguagem visual e verbal.</p>
            </div>
            <div className="education-card" data-reveal>
              <h3>Design Visual</h3>
              <small>Formação prática em ferramentas criativas e direção de arte digital.</small>
              <p>Uso do design para construir imagens de marca sofisticadas e consistentes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="section-title" data-reveal>
            <small>Contato</small>
            <h2>Pronta para fechar parcerias que fortalecem autoridade.</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card contact-card-primary" data-reveal>
              <div className="contact-photo">
                <Image
                  src="/mc-4.jpeg"
                  alt="Maria Clara Gama"
                  fill
                  sizes="(max-width: 900px) 90vw, 40vw"
                  className="contact-img"
                />
              </div>
              <div className="contact-info">
                <h3>Vamos conversar</h3>
                <p>Agende uma conversa e veja como sua marca pode ganhar ainda mais presença e credibilidade online.</p>
                <ul className="contact-list">
                  <li>
                    <span className="contact-ico">✉️</span>
                    <a href="mailto:contato@mariaclaragama.com">contato@mariaclaragama.com</a>
                  </li>
                  <li>
                    <span className="contact-ico">💬</span>
                    <a className="whatsapp-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
                  </li>
                  <li>
                    <span className="contact-ico">📸</span>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@mariaclaraglf</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-card" data-reveal>
              <strong>Objetivos</strong>
              <ul className="card-list">
                <li>Fechar parcerias estratégicas.</li>
                <li>Fortalecer autoridade digital.</li>
                <li>Construir presença consistente para marcas.</li>
              </ul>
              <a className="button whatsapp-link contact-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="brand">
            Maria Clara <span>Gama</span>
          </div>
          <p>Social Media · Estratégia Digital · Criação de Conteúdo</p>
          <div className="footer-social">
            <a
              className="social-icon whatsapp-link"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="social-svg" />
            </a>
            <a
              className="social-icon social-instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon className="social-svg" />
            </a>
          </div>
          <div className="footer-copy">
            <p>© 2026 Maria Clara Gama. Todos os direitos reservados.</p>
            <p>Este portfólio e seu conteúdo são protegidos por direitos autorais.</p>
            <p>
              Desenvolvido por <strong>MF Tech Solutions</strong>.
            </p>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-float whatsapp-link"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="whatsapp-float-icon" />
      </a>
    </main>
  );
}
