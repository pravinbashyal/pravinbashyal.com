# (WIP) How I build pure html blog?

I had been working on developing some personal website with Gatsby, mid way through I said to myself, 'Your requirements are really simple. You dont need static website framework... probably'. Dont get me wrong, site generators like Gatsbyjs, Nextjs or remix_run are great tools and if you want more done in your personal blog like analytics, payment gateway, search, rss feed, these services are probably your best fit. They provide array of plugins and themes that's easily pluggable which I did not need.  Also I am not a html purist carrying flame and pitchfork agains against javascript and frontend framework like react. We have come to an era of web apps where we have access to complex software solutions inside browser regardless of OS or device. And this can be mostly attributed to the progress in javascript and frontend eco system.

> You dont need  static website framework<br/>
>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...probably

Bottom line, I wanted simple html website without too many javascript dependencies and configs. So I scraped what I had in progress with gatsby and started listing out what my requirements were.

## Features I needed:
1. I only need html and css based blog for now
2. I write md and chugs out html blogs
3. Lists latest blogs
4. It shows created date and last modified date
5. looks pretty decent
6. is responsive and accessible
7. seo optimized

## Libraries and tools used:
- [marked](https://github.com/markedjs/marked)
- [linkedom](https://github.com/WebReflection/linkedom)
- [highlight.js](https://highlightjs.org/)
- [lighthouse](https://developers.google.com/web/tools/lighthouse)

Through different improvements and iterations what I have right now can be found in my [github repo](https://github.com/pravinbashyal/pravinbashyal.com). Please do raise an issue or leave a feedback.

### Low javascript dependency
_I only need html and css based blog for now_

My `package.json`:

```json
{
  "name": "pravinbashyal.com",
  "private": true,
  "description": "Pravin Bashyal - Personal website",
  "version": "0.1.0",
  "license": "MIT",
  "scripts": {
    "build": "cd src && find . -name '*.md' | xargs -I % sh -c 'mkdir -p ../public/$(../bin/parseName.js --path %) &&  ../bin/createHtmlPage.js % ../public' && echo home directory list && ls && cd .. && find . -name '*.html' && cp src/robots.txt public/",
    "build:diff": "./bin/files.js | xargs -I % sh -c 'mkdir -p public/$(./bin/parseName.js --path %) && ./bin/createHtmlPage.js % public' && echo home directory list && ls && find . -name '*.html'"
  },
  "dependencies": {},
  "devDependencies": {
    "highlight.js": "^10.7.2",
    "linkedom": "^0.7.1",
    "marked": "^2.0.1",
    "prettier": "^1.17.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/pravinbashyal/pravinbashyal.com"
  },
  "bugs": {}
}
```

### Write markdown; Chug out html
This section will cover two of my requirements:
- I write in md and chugs out html blogs

### Lists latest blog

### looks decent enough
- typography
- code highlighting
- quotes

###

```typescript
const marked = require("marked")
marked.use({ renderer: createRenderer(setTitle) })
marked('### some title') // <h3>some title</h3>
```
