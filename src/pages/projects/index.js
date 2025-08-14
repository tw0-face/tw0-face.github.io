import "../../../sentry.config"
import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import {
  groupByProjects,
  projectTypeMap,
  projectDescriptionMap
} from '@site/src/data/projects';
import ShowcaseCard from './_components/ShowcaseCard';
import styles from './index.module.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';

function ShowcaseCards() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="margin-top--lg container">
        <div className="my-4" />
        {Object.entries(groupByProjects).map(([key, value]) => {
          return (
            <div key={key} className="container">
              <div className="my-4">
                <span className={clsx('category-title', styles['category-title'])}>
                  <Tippy
                    maxWidth={800}
                    animation="scale-subtle"
                    placement="top"
                    content={projectDescriptionMap[key]}
                  >
                    <span>{projectTypeMap[key]}</span>
                  </Tippy>
                </span>
              </div>
              <ul className={clsx('clean-list', styles.cardList)}>
                {value.map((project) => (
                  <ShowcaseCard key={project.title} project={project} />
                ))}
              </ul>
              <br></br>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const TITLE = 'Projects';

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
    </section>
  );
}

export default function Showcase() {
  return (
    <Layout title={TITLE}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <div style={{ display: 'flex', marginLeft: 'auto' }} className="container"></div>
        <ShowcaseCards />
      </main>
    </Layout>
  );
}
