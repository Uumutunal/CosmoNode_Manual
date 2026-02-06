import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <Heading as="h1">CosmoNode</Heading>
      <p>A modular node-based 3D modelling toolkit for artists and developers.</p>
      <p>Built for Unity.</p>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="CosmoNode"
      description="A modular node-based 3D toolkit for artists and developers.">
      
      <HomepageHeader />

      <main className={styles.section}>
      <Heading as="h2" className={styles.sectionTitle}>
         What is CosmoNode?
      </Heading>

        <p>
          CosmoNode is a node-based, procedural 3D modelling system designed to work
          directly inside the Unity Editor.
        </p>

        <p>
          Instead of manually modelling assets, geometry is created through a visual
          node graph where each node represents an operation such as generating,
          transforming, or modifying geometry.
        </p>

        <p>
          This approach makes it easy to iterate quickly, create variations, and build
          reusable setups — especially useful in game development workflows.
        </p>

        <p>
          With CosmoNode, artists and developers can create complex assets, experiment
          freely, and stay entirely inside Unity without relying on external tools.
        </p>
      </main>
    </Layout>
  );
}
