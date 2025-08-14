import skills from '@site/src/data/skills.json';
import styles from './styles.module.css';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';


export default function Skills() {
  const { withBaseUrl } = useBaseUrlUtils()
    return (
      <>
        <section id="tools">
        <h2>Skills</h2>
        <div className={`${styles.mt8} ${styles.grid} ${styles.gridCols4} ${styles.gap05} ${styles.mdGridCols6} ${styles.lgMt0} ${styles.lgGridCols8}`}>
        {skills
        .sort((a, b) => {
            return a.name.localeCompare(b.name);
        })
        .map(({ name, href, image }) => (
          <div key={href} className={`${styles.colSpan1} ${styles.flex} ${styles.justifyCenter} ${styles.py2} ${styles.px2} ${styles.textCenter}`}>
            <a
                href={href}
                rel="noreferrer"
                target="_blank"
                alt={`Discover DocSearch on the ${name} documentation`}
            >
                <img
                  className={`${styles.inlineBlock} ${styles.h10} ${styles.w10}`}
                  src={withBaseUrl(image)}
                  alt={`Discover DocSearch on the ${name} documentation`}
                />
                <div className={`${styles.textDescription} ${styles.uppercase} ${styles.textXs} ${styles.py2} ${styles.fontSemibold}`}>{name}</div>
            </a>
            </div>
        ))}
        </div>
        </section>
      </>
    );
}

