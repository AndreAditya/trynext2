// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Static Website</title>
        <meta
          name="description"
          content="A simple static website using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Static UHUY Website</h1>
        <p>This is a simple static site built with Next.js!</p>
      </main>
    </div>
  );
}
