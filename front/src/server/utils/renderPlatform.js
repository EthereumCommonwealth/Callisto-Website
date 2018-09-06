const renderPlatform = (html, preloadedState, hashManifest) => {
  return (`
    <!doctype html>
      <html>
        <head>
          <title>Audits Requests</title>
          <meta name="robots" content="noindex,nofollow">
          <meta name="title" content="Audits Requests">
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossorigin="anonymous"
          >
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0,
            maximum-scale=1, minimum-scale=1, shrink-to-fit=no">
          <link rel="stylesheet" href="${hashManifest[1]}" type="text/css"/>
        </head>
        <body>
           <div id="callisto-network">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="${hashManifest[2]}" type="text/javascript"></script>
          <script src="${hashManifest[0]}" type="text/javascript"></script>
        </body>
    </html>
  `);
}

export default renderPlatform;
