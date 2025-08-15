import "../../sentry.config"
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from '@theme/Layout';
import styles from './index.module.css';
import React from 'react';
import { useTrail, animated, useSpring } from "@react-spring/web";
import {Container} from '@site/src/components/Container'
import Skills from '@site/src/components/Skills';
import Certifications from '@site/src/components/Certifications';
import Projects from '@site/src/components/Projects'

var ABOUT="I am a Kubernetes Fan and a Cloud-native enthusiast, Always looking for something new to learn. I have solid skills in Linux, CI/CD, Kubernetes, GitOps, and cloud."
function HomepageHeader() {
  
  const {siteConfig} = useDocusaurusContext();
  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(8em)" },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600,
  });
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });
  return (

    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12 mt-8 md:mt-0 w-full">
                <div class="lg:w-1/2 flex justify-center lg:justify-start mt-8 md:mt-0">
                    <div class="relative animate-fade-in-up" >
                        <div class="relative">
                            <div class="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 shadow-2xl">
                                <div class="w-full h-full rounded-full overflow-hidden">
                                    <animated.img src={useBaseUrl("img/me.jpeg")} alt="Mostafa Rashed" style={animatedHero} class={styles.rounded} />
                                </div>
                            </div>
                            <div class="absolute inset-0 -z-10">
                                <div class="w-full h-full rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 text-center lg:text-left w-full mt-8 md:mt-0">
                    <animated.div style={animatedTexts[0]}>
                    <div class="mb-4 mt-4 md:mt-0">
                        <span class="font-medium text-lg block">Hello, I'm</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight hero__title">{siteConfig.title}</h1>
                    </animated.div>
                    <animated.div style={animatedTexts[1]}>
                    <h2 class="text-2xl md:text-3xl lg:text-4xl mb-6">
                        <span className="hero__subtitle">{siteConfig.tagline}</span>
                    </h2>
                    </animated.div>
                    <animated.div style={animatedTexts[2]}>
                    <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ">{ABOUT}</p>
                    </animated.div>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <Container background={'light'} padding={['top', 'bottom']} className="">
          <Certifications />
        </Container>
        <Container background={'dark'} padding={['top', 'bottom']} className="">
          <Skills />
        </Container>
        <Container background={'light'} padding={['top', 'bottom']} className="">
          <Projects />
        </Container>
      </main>
    </Layout>
  );
}
