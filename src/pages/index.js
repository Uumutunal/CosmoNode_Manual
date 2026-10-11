import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Carousel from '../components/HomepageFeatures/Carousel';


function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <span className={styles.heroEyebrow}>
          PROCEDURAL 3D TOOLKIT FOR UNITY
        </span>

        <Heading as="h1" className={styles.heroTitle}>
          CosmoNode
        </Heading>

        <p className={styles.heroLead}>
          A modular node-based 3D modelling toolkit for artists and developers.
        </p>

        <p className={styles.heroDescription}>
          Create, modify, and generate procedural geometry directly inside
          Unity, with full support for runtime workflows.
        </p>

        <div className={styles.heroActions}>
          <a
            className={styles.assetStoreButton}
            href="https://assetstore.unity.com/packages/tools/modeling/cosmonode-runtime-procedural-geometry-367350"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <span>Get CosmoNode on the Unity Asset Store →</span>
          </a>
        </div>

        <div className={styles.heroMeta}>
          <span>80+ Nodes</span>
          <span>•</span>
          <span>Runtime Support</span>
          <span>•</span>
          <span>Unity Native</span>
        </div>
      </div>

      <div className={styles.heroGlow} />
    </header>
  );
}




export default function Home() {
  
const slides = [
  { src: 'img/building.PNG', alt: 'CosmoNode node-based modelling workflow' },
  { src: 'img/3.PNG', alt: 'CosmoNode node-based modelling workflow' },
  { src: 'img/5.PNG', alt: 'CosmoNode node-based modelling workflow' },
];
  return (
    <Layout
      title="CosmoNode"
      description="A modular node-based 3D toolkit for artists and developers."
    >
      <HomepageHeader />

      <main className={styles.section}>
        <div className={styles.intro}>

          <Heading as="h2" className={styles.sectionTitle}>
            What is CosmoNode?
          </Heading>

          <p className={styles.lead}>
            CosmoNode is a node-based procedural 3D modelling system designed
            to bring the flexibility of tools like Geometry Nodes directly
            into the Unity Editor.
          </p>

          <p>
            Instead of manually modelling every variation, geometry is created
            through a visual node graph. Each node performs a specific
            operation, allowing you to generate, transform, modify, scatter,
            and combine geometry without leaving Unity.
          </p>
        </div>

        <div className={styles.imageFeature}>
          <img
            src="img/1.PNG"
            alt="CosmoNode procedural node graph"
          />
        </div>

        <div className={styles.contentBlock}>
          <Heading as="h3">Build, Iterate, Experiment.</Heading>

          <p>
            Procedural workflows make experimentation much faster. Change a
            parameter, connect another node, or replace an operation and the
            entire result can update automatically.
          </p>

          <p>
            This makes CosmoNode useful for creating variations, experimenting
            with shapes, and building reusable procedural setups for games and
            interactive applications.
          </p>
        </div>
{/*
        <div className={styles.imageFeature}>
          <img
            src="img/building.PNG"
            alt="CosmoNode node-based modelling workflow"
          />
        </div>
*/}
        <div className={styles.imageFeature}>
          <Carousel images={slides} />
        </div>

        <div className={styles.contentBlock}>
          <Heading as="h3">Everything inside Unity</Heading>

          <p>
            CosmoNode is designed around a simple idea: procedural modelling
            should be part of the development workflow rather than a separate
            step.
          </p>

          <p>
            Create your geometry, preview the result, modify parameters, and
            integrate the generated assets directly into your Unity project.
            CosmoNode also supports runtime evaluation, allowing procedural
            geometry to be generated while your application is running.
          </p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureNumber}>80+</div>
            <h3>Nodes</h3>
            <p>
              A growing collection of nodes for geometry, transforms,
              scattering, UVs, mathematics, and more.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureNumber}>Procedural</div>
            <h3>Generation</h3>
            <p>
              Build reusable graphs that can generate countless variations
              from a small set of parameters.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureNumber}>Runtime</div>
            <h3>Support</h3>
            <p>
              Evaluate procedural graphs at runtime and create dynamic
              geometry directly inside your application.
            </p>
          </div>
        </div>
        
        <div className={styles.contentBlock}>
          <Heading as="h3">From simple operations to complex systems</Heading>

          <p>
            CosmoNode includes mesh generation and editing, subdivision,
            booleans, scattering, UV operations, curve tools, instancing,
            transformations, and mathematical operations.
          </p>

          <p>
            The goal is not to replace traditional modelling tools, but to
            provide a procedural layer that makes creating and modifying
            geometry faster, more flexible, and easier to automate.
          </p>
        </div>

        <div className={styles.finalBlock}>
          <Heading as="h3">Active Development</Heading>

          <p>
            CosmoNode is regularly updated with more contenti bug fixes and enhancements. 
          </p>

          <p>
            Follow to keep updated with the latest news.
          </p>
        </div>
      </main>
    </Layout>
  );
}


