import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import { TagList, Tags } from '@site/src/data/projects';
import { sortBy } from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function TagItem({ label, description, color }) {
  
  return (
    <li className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{ backgroundColor: color }} />
    </li>
  );
}

function ShowcaseCardTag({ tags }) {
  const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }));

  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag)
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => (
        <TagItem key={index} {...tagObject} />
      ))}
    </>
  );
}

function ShowcaseCard({ project }) {
  return (
    <li key={project.title} className={clsx('card shadow--md', styles.card)}>
      <div className={clsx('card__image', styles.showcaseCardImage)}>
        <Image src={project.preview} alt={project.title} img={project.preview} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link
              href={project.website ? project.website : project.source}
              className={styles.showcaseCardLink}
            >
              {project.title}
            </Link>
          </Heading>
          {project.source && (
            <Link
              href={project.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn
              )}
            >
              source
            </Link>
          )}
        </div>
        <p className={styles.showcaseCardBody}>{project.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={project.tags} />
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);
