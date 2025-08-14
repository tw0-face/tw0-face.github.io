import styles from './styles.module.css';
import clsx from 'clsx';


function Certifications() {
  return (
    <section id="certifications" className={styles.section}>

      <h2>Certificates</h2>

      <div className={clsx(styles.container, styles.certifications__container)}>

      <article className={styles.certifications__item}>
          <div className={styles.image}>
            {/* https://images.credly.com/size/340x340/images/572de0ba-2c59-4816-a59d-b0e1687e45ee/image.png */}
            <img src="img/certs/rhcsa.png" alt="RHCSA"/>
          </div>
          <h3>Red Hat Certified System Administrator (RHCSA)</h3>
        </article>

        <article className={styles.certifications__item}>
          <div className={styles.image}>
            {/* https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png */}
            <img src="img/certs/cka.png" alt="CKA"/>
          </div>
          <h3>CKA: Certified Kubernetes Administrator</h3>
          <div className="mask__efect"></div>
        </article>

        <article className={styles.certifications__item}>
          <div className={styles.image}>
            {/* https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png */}
            <img src="img/certs/saa.png" alt="AWS-SAA"/>
          </div>
          <h3>AWS Certified Solutions Architect – Associate</h3>
        </article>

      </div>
    </section>
  );
}

export default Certifications;
