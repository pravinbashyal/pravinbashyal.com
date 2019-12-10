import React from "react"

function Day1({}) {
  return (
    <main>
      <h1>Day 1 (Up and running with Gatsby)</h1>
      <p>
        one thing I have been procrastrinating is spinning up my portfolio and
        blog website using gatsby I saw 100 days of coding in twitter I
        committed to do 100 minutes a day everyday for 100 days goals: to create
        portfolio to improve open source touch, and expose myself improve the
        skills convert the job to habit
      </p>
      <pre>
        <code>
          yarn add gatsby-plugin-typography react-typography typography
        </code>
      </pre>
      <a href="http://kyleamathews.github.io/typography.js/">
        http://kyleamathews.github.io/typography.js/
      </a>
      <pre>- confusing</pre>
      <quote>
        To use, first install the package npm install --save react-typography
        then import them into your html.js file.
      </quote>
      <p>it was a bit confusing because i did not know about html.js</p>
      <quote>
        src/html.jsx is responsible for everything other than where Gatsby lives
        in the {"<body />"}
        In this file, you can modify the {"<head>"} metadata and general
        structure of the document and add external links. Typically you should
        omit this from your site as the default html.js file will suffice. If
        you need more control over server rendering, then it’s valuable to have
        an html.js.
      </quote>
      <a>https://www.gatsbyjs.org/docs/custom-html/</a>
      <quote>
        Gatsby uses a React component to server render the {"<head>"} and other
        parts of the HTML outside of the core Gatsby application. Gatsby also
        sets a default value for the {"<noscript>"} tag there.
      </quote>
      <pre>
        <code>cp .cache/default-html.js src/html.js</code>
      </pre>
      <p>initial content of html.js</p>
      <pre>
        <code>
          {' import React from "react"'}
          {' import PropTypes from "prop-types"'}
          {""}

          {"export default function HTML(props) {"}
          {"return ("}
          {"<html {...props.htmlAttributes}>"}
          {"<head>"}
          {'<meta charSet="utf-8" />'}
          {'<meta httpEquiv="x-ua-compatible" content="ie=edge" />'}
          {"<meta"}
          {'name="viewport"'}
          {'content="width=device-width, initial-scale=1, shrink-to-fit=no"'}
          {"/>"}
          {"{props.headComponents}"}
          {"</head>"}
          {"<body {...props.bodyAttributes}>"}
          {"{props.preBodyComponents}"}
          {'<noscript key="noscript" id="gatsby-noscript">'}
          {"This app works best with JavaScript enabled."}
          {"</noscript>"}
          {"<div"}
          {"key={`body`}"}
          {'id="___gatsby"'}
          {"dangerouslySetInnerHTML={{ __html: props.body }}"}
          {"/>"}
          {"{props.postBodyComponents}"}
          {"</body>"}
          {"</html>"}
          {")"}
          {"}"}

          {"HTML.propTypes = {"}
          {"htmlAttributes: PropTypes.object,"}
          {"headComponents: PropTypes.array,"}
          {"bodyAttributes: PropTypes.object,"}
          {"preBodyComponents: PropTypes.array,"}
          {"body: PropTypes.string,"}
          {"postBodyComponents: PropTypes.array,"}
          {"}"}
        </code>
      </pre>
      <p>
        as this first day I am just looking into spinning up a page in gatsby, I
        will not go deep into the html.js but simply copy values from the
        typography documentation I skipped lots of react and css tutorials as I
        am a react developer. However there were some key insights I think this
        will be useful in future
      </p>
      <quote>
        You can programmatically create pages using “page template components”.
        All pages are React components but very often these components are just
        wrappers around data from files or other sources.
      </quote>
      https://www.gatsbyjs.org/docs/building-with-components/#page-template-components
    </main>
  )
}

export default Day1
