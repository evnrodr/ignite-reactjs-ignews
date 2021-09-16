import React from "react";
import Head from "next/head";
import Prismic from "@prismicio/client";
import styles from "./styles.module.scss";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>15 de setembro de 2021</time>
            <strong>Discussing the future of Web Development</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              quos minus voluptatum!
            </p>
          </a>
          <a href="">
            <time>15 de setembro de 2021</time>
            <strong>Discussing the future of Web Development</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              quos minus voluptatum!
            </p>
          </a>
          <a href="">
            <time>15 de setembro de 2021</time>
            <strong>Discussing the future of Web Development</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              quos minus voluptatum!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "publication")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  console.log(response);

  return {
    props: {},
  };
};
