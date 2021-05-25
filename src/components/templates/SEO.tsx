import React from "react";
import { Helmet } from "react-helmet";
import background from "../../assets/img/bg-people.@2x.png";
function SEO() {
  return (
    <Helmet>
      <title>Rule Of Thumb</title>
      <meta
        name="description"
        content="Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@trodriguez30" />
      <meta name="twitter:creator" content="Tatiana Rodríguez" />
      <meta name="twitter:title" content="Rule Of Thumbs" />
      <meta
        name="twitter:description"
        content="Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc."
      />
      <meta name="twitter:image" content={background} />
      ​
      <meta
        property="og:site_name"
        content="Rule Of Thumbs"
        data-react-helmet="true"
      />
      <meta property="og:title" content="Rule Of Thumb" />
      <meta
        property="og:url"
        content="https://rule-of-thumb-ui-test.vercel.app/"
      />
      <meta
        property="og:description"
        content="tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc."
      />
      <meta property="og:image" content={background} />
      <meta property="og:image:alt" content="Rule Of Thum Background" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default SEO;
