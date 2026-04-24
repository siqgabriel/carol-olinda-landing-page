import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Header from '@/components/home-creative-agency/Header';
import Footer from '@/components/common/Footer';
import Script from 'next/script';
import Services from '@/components/home-creative-agency/Services';
import Intro from '@/components/home-creative-agency/Intro';
import Portfolio from '@/components/home-creative-agency/Portfolio';
import Intro2 from '@/components/home-creative-agency/Intro2';
import Testimonials from '@/components/home-creative-agency/Testimonials';


export const metadata = {
  title: 'Carol Olinda | Transformação Organizacional, Liderança e Cultura',

  description:
    'Carol Olinda atua no desenvolvimento de líderes e organizações, impulsionando cultura, aprendizagem e transformação com foco em resultados sustentáveis. Especialista em liderança, T&D e estratégia organizacional.',

  keywords: [
    'Carol Olinda',
    'liderança',
    'desenvolvimento de líderes',
    'treinamento e desenvolvimento',
    'T&D',
    'cultura organizacional',
    'transformação organizacional',
    'aprendizagem corporativa',
    'RH estratégico',
    'consultoria em liderança'
  ],

  authors: [{ name: 'Carol Olinda' }],
  creator: 'Carol Olinda',

  metadataBase: new URL('https://www.carololinda.com.br'),

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Carol Olinda | Liderança e Transformação Organizacional',
    description:
      'Desenvolvimento de líderes, cultura organizacional e aprendizagem estratégica para empresas que querem evoluir com consistência.',
    url: 'https://www.carololinda.com.br',
    siteName: 'Carol Olinda',
    images: [
      {
        url: '/assets/imgs/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carol Olinda',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Carol Olinda | Liderança e Cultura Organizacional',
    description:
      'Transformação organizacional com foco em liderança, aprendizagem e cultura.',
    images: ['/assets/imgs/og-image.jpg'],
  },

  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
      'https://db.onlinewebfonts.com/c/1be24cb794e05db5c90a6b24da7ed1c2?family=Black+Mango',
    ]),
  },
};

export default function Home() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Services />
            <Intro />
            <Portfolio />
            <Intro2 />
            <Testimonials />
          </main>
          <Footer />
        </div>
      </div>

      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

      <Script src="/assets/js/scripts.js"></Script>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Carol Olinda',
            url: 'https://www.carololinda.com.br',
            jobTitle: 'Especialista em Desenvolvimento de Liderança e Cultura Organizacional',
            description:
              'Atua no desenvolvimento de líderes e transformação organizacional, com foco em aprendizagem, cultura e estratégia.',
            sameAs: [
              'https://www.linkedin.com/in/ana-caroline-olinda-ribeiro-3b256a2a/', // depois coloca o real
              'https://www.instagram.com/carol_olinda_ribeiro/',
            ],
          }),
        }}
      />
    </body>
  );
}
