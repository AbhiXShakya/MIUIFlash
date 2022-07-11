import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <body className="font-metro dark:bg-black text-black dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
