import React from "react";
import { Helmet } from "react-helmet";
import background from '../../assets/img/bg-people.@2x.png'
function SEO() {
  return (
    <Helmet>
      <title>Rule Of Thumb</title>
      <meta name="description" content="Nested component" />
      <meta
        data-react-helmet="true"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        data-react-helmet="true"
        name="twitter:site"
        content="@trodriguez30"
      />
      <meta
        name="twitter:creator"
        content="Tatiana Rodríguez"
        data-react-helmet="true"
      />
      <meta
        name="twitter:title"
        content="Rule Of Thumbs"
        data-react-helmet="true"
      />
      <meta
        name="twitter:description"
        content="Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc."
        data-react-helmet="true"
      />
      <meta
        name="twitter:image"
        content={background}
        data-react-helmet="true"
      />
      ​
      <meta property="og:site_name" content="Rule Of Thumbs" data-react-helmet="true" />
      <meta
        property="og:title"
        content="Rule Of Thumb"
        data-react-helmet="true"
      />
      <meta
        property="og:url"
        content="https://rule-of-thumb-ui-test.vercel.app/"
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content="tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc."
        data-react-helmet="true"
      />
      <meta
        property="og:image"
        content={background}
        data-react-helmet="true"
      />
      <meta
        property="og:image:alt"
        content="Rule Of Thum Background"
        data-react-helmet="true"
      />
      <meta property="og:type" content="website" data-react-helmet="true" />
    </Helmet>
  );
}

export default SEO;
