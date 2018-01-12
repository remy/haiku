import Head from 'next/head';
export default ({ children, title = 'Haiku' }) => (
  <div id="root">
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width" />
      <link
        href="https://cdn.jsdelivr.net/npm/hack-font/build/web/hack.min.css"
        rel="stylesheet"
      />
      <link href="/static/style.css" rel="stylesheet" />
    </Head>
    <main>{children}</main>
  </div>
);
