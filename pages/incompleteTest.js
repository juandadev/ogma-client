import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/Layout";
import withAuth from "@auth";
import styles from "@styles/Results.module.scss";

function Home() {
  return (
    <Layout>
      <Head>
        <title>Ogma App</title>
        <meta
          name="description"
          content="Web app to practice for yout next job interview"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.results__main}>
        <div className={styles.results__info}>
          <h2 className={styles.results__title}>Quiz incompleted!</h2>
          <h2 className={styles.results__title}>
            Review your notes and try again!
          </h2>
          <Image
            width={600}
            height={600}
            src="/images/incompleteDesktop.png"
            alt="Complete test image"
          />
          <button type="button" className={styles.results__primaryBtn}>
            <Link href="/chooseTechnology">Try again</Link>
          </button>
          <button type="button" className={styles.results__secondaryBtn}>
            <Link href="/profile">Go back</Link>
          </button>
        </div>
      </main>
    </Layout>
  );
}

export default withAuth(Home, "root");
