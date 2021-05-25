import React from "react";
import { Helmet } from "react-helmet";
import background from "../../assets/img/bg-people.@2x.png";
function SEO() {
  return (
    <Helmet
      htmlAttributes={{ lang: "es" }}
      title="Rule Of Thumbs"
      meta={[
        {
          name: "description",
          content:
            "Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc.",
        },
        {
          name: "keywords",
          content:
            "controversial, people, trending, politics, business, media, entertainment",
        },
        {
          property: "og:url",
          content: "https://rule-of-thumb-ui-test.vercel.app/",
        },
        {
          property: "og:title",
          content: "Rule Of Thumb",
        },
        {
          name: "og:description",
          content:
            "Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc.",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: "@trodriguez30",
        },
        {
          name: "twitter:title",
          content: "Rule Of Thumbs",
        },
        {
          name: "twitter:description",
          content:
            "Tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc.",
        },
      ].concat([
        { property: "og:image", content: background },
        { name: "twitter:image", content: background },
      ])}
    />
  );
}

export default SEO;
