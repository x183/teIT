import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import teaList from "../data/teaList.json";
import TeaList from "../components/TeaList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Te</title>
        <meta
          name="description"
          content='A site for viewing the tea sortiment in "Hubben 2.2\"'
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Te</h1>
      </main>
    </>
  );
}
