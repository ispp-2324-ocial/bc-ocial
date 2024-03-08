import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    imgSrc: require('@site/static/img/Pin_Verde.png').default,
    description: (
      <>
        La base de gestión de conocimiento del grupo 2 de ISPP 23-24 se ha creado
        mediante el uso de docusaurus, facilitando así la gestión como código y 
        el acceso sencillo y en línea a la documentación generada en el proyecto.
      </>
    ),
  },
  {
    title: 'Estructura',
    imgSrc: require('@site/static/img/Pin_Azul.png').default,
    description: (
      <>
        La estructura que se va a utilizar para esta base de gestión del conocimiento se divide en:
        Actas: en la cual se va a guardar todas las actas de la reuniones y estará dividido en
        frontend o backend.
        Feedback, donde se recogerá todos los comentarios proporcionados por los profesores.
        Entregables pasados, donde estarán las carpetas con los documentos entregados en el pasado.
        Documentación, donde estarán todos los documentos actualizados en este sprint.
      </>
    ),
  },
  {
    title: 'Nuestra Landing Page',
    imgSrc: require('@site/static/img/Pin_Morado.png').default,
    description: (
      <>
        Nuestra Landing Page se encuentra alojada en <a href="https://ocial.es/">ocial.es</a>. En la que actualizaremos las novedades de la aplicación.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImg} role="img" style={{ width: '20%', height: '20%' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
