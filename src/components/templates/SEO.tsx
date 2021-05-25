import React from "react";
import { Helmet } from "react-helmet";
import background from "../../assets/img/bg-people.@2x.png";
const HOST_URL = 'https://rule-of-thumb-ui-test.vercel.app/'
function SEO() {
  return (
    <Helmet>
      <title>Rule Of Thumbs</title>
      <meta name="description" content="Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. " />
      <meta
        property="og:title"
        content="Rule Of Thumbs"
      />
      <meta property="og:description" content="Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. " />
      <meta
        property="og:image"
        itemProp="image"
        content={`${HOST_URL}/${background}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={HOST_URL} />
      <meta
        property="twitter:title"
        content="Rule Of Thumb"
      />
      <meta property="twitter:description" content="Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. " />
      <meta
        property="twitter:image"
        itemProp="image"
        content={`${HOST_URL}/${background}`}
      />
      <meta property="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default SEO;
