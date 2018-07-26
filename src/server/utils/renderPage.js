const renderPage = (html, preloadedState, headers) => {
  return (`
    <!doctype html>
      <html>
        <head>
          <title>${headers.title}</title>
          <meta name="robots" content="noindex,nofollow">
          <meta name="title" content="${headers.title}">
          <meta name="description" content="${headers.description}">
          <meta property="og:url" content="${headers.url}" />
          <meta property="og:title" content="${headers.title}" />
          <meta property="og:description" content="${headers.description}" />
          ${headers.image ?
            `<meta property="og:image" content=${headers.image} />` : ''
          }
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="CallistoSupport" />
          <meta name="twitter:title" content="${headers.title}" />
          <meta name="twitter:description" content="${headers.description}" />
          <meta
            name="google-site-verification"
            content="4vOPk-f3ZKRulW2kk0HxXcR1ok_7XeHVw9oG4M8dcGU"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossorigin="anonymous"
          >
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0,
            maximum-scale=1, minimum-scale=1, shrink-to-fit=no">
          <link rel="stylesheet" href="/main.css" type="text/css"/>
        </head>
        <body>
           <div id="callisto-network">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/vendor.js" type="text/javascript"></script>
          <script src="/main.js" type="text/javascript"></script>
        </body>
    </html>
  `);
}

export default renderPage;
