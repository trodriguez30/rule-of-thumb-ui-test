import React from "react";
import { Helmet } from "react-helmet";
import background from "../../assets/img/bg-people.@2x.png";
const HOST_URL = "https://rule-of-thumb-ui-test.vercel.app";
function SEO() {
  return (
    <Helmet>
      <title>Rule Of Thumbs</title>
      <meta
        name="description"
        content="Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. "
        data-react-helmet="true"
      />
      <meta
        property="og:title"
        content="Rule Of Thumbs"
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content="Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. "
        data-react-helmet="true"
      />
      <meta
        property="og:image"
        content={`${HOST_URL}${background}`}
        data-react-helmet="true"
      />
      <meta property="og:type" content="website" data-react-helmet="true" />
      <meta property="og:url" content={HOST_URL} data-react-helmet="true" />
      <meta
        property="twitter:title"
        content="Rule Of Thumb"
        data-react-helmet="true"
      />
      <meta
        property="twitter:description"
        content="Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. "
        data-react-helmet="true"
      />
      <meta
        property="twitter:image"
        content={`${HOST_URL}${background}`}
        data-react-helmet="true"
      />
      <meta
        property="twitter:card"
        content="summary_large_image"
        data-react-helmet="true"
      />
    </Helmet>
  );
}

export default SEO;
