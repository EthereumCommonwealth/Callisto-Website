const renderPage = (html, preloadedState, headers, hashManifest, lang) => {
  return (`
    <!doctype html>
      <html lang=${lang}>
        <head>
          <title>${headers.title}</title>
          ${process.env.NODE_ENV !== 'production' ? '<meta name="robots" content="noindex,nofollow">' : ''}
          <meta name="title" content="${headers.title}">
          <meta name="description" content="${headers.description}">
          <meta property="og:url" content="${headers.url}" />
          <meta property="og:title" content="${headers.title}" />
          <meta property="og:description" content="${headers.description}" />
          <meta property="og:type" content="website" />
          ${headers.image ?
            `<meta property="og:image" content=${headers.image} />` :
            '<meta property="og:image" content="https://callisto.network/opengraphs/default-og.png" />'
          }
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="CallistoSupport" />
          <meta name="twitter:title" content="${headers.title}" />
          <meta name="twitter:description" content="${headers.description}" />
          <meta name="twitter:domain" content="callisto.network" />
          ${headers.image ?
            `<meta property="twitter:image:src" content=${headers.image} />` :
            '<meta property="twitter:image:src" content="https://callisto.network/opengraphs/default-og.png" />'
          }
          <!-- Google Tag Manager -->
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WB5DB4V');</script>
          <!-- End Google Tag Manager -->
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
          <link rel="canonical" href="${headers.url}" />
          <link rel="alternate" href="${headers.url}" hreflang="en" />
          <link rel="alternate" href="https://callisto.network/de${headers.baseUrl}" hreflang="de" />
          <link rel="alternate" href="https://callisto.network/es${headers.baseUrl}" hreflang="es" />
          <link rel="alternate" href="https://callisto.network/fr${headers.baseUrl}" hreflang="fr" />
          <link rel="alternate" href="https://callisto.network/ko${headers.baseUrl}" hreflang="ko" />
          <link rel="alternate" href="https://callisto.network/ru${headers.baseUrl}" hreflang="ru" />
          <link rel="alternate" href="https://callisto.network/zh${headers.baseUrl}" hreflang="zh-hans" />
          <meta name="viewport" content="width=device-width, initial-scale=1,
            maximum-scale=2, minimum-scale=1, shrink-to-fit=no">
          <link rel="stylesheet" href="${hashManifest[1]}" type="text/css"/>
          ${headers.fromBlog ? '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">' : ''}
          ${headers.fromBlog ? '<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>' : ''}
          ${headers.fromBlog ? '<script>hljs.initHighlightingOnLoad();</script>' : ''}
        </head>
        <body>
            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WB5DB4V"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->
            <div id="callisto-network">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <!-- Global site tag (gtag.js) - Google Ads: 794594304 -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-794594304"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-794594304');
          </script>
          <script src="${hashManifest[2]}" type="text/javascript"></script>
          <script src="${hashManifest[0]}" type="text/javascript"></script>
        </body>
    </html>
  `);
}

export default renderPage;
