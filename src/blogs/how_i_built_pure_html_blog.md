# (WIP) How I build pure html blog?

I had been working on developing some personal website with Gatsby, mid way through I said to myself, 'Your requirements are really simple. You dont need gatsby, nextjs or other static site generating framework... probably'. Dont get me wrong, site generators like Gatsbyjs, Nextjs or remix_run are great tools and if you want more done in your personal blog like analytics, payment gateway, search, rss feed, these services are probably your best fit. They provide array of plugins and themes that's easily pluggable which I did not need.  Also I am not a html purist who is against frontend framework like react and javascript. We have come to an era of web apps where we have access to complex software solutions inside browser regardless of OS or device. And this can be mostly attributed to the progress in javascript and frontend framework eco system.

> You dont need to learn gatsby, nextjs <br/>
>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...probably

Bottom line, I wanted simple html website without too many javascript dependencies and configs. So I scraped what I had in progress with gatsby website and started listing out what my requirements.

## Features I needed:
- I only need html and css based blog for now
- I write in md and chugs out html blogs
- Lists latest blogs
- It shows created date and last modified date
- looks pretty decent
- is responsive and accessible
- seo optimized

## Libraries:
- [marked](https://github.com/markedjs/marked)
- [linkedom](https://github.com/WebReflection/linkedom)
- [highlight.js](https://highlightjs.org/)

##


```typescript
const marked = require("marked")
marked.use({ renderer: createRenderer(setTitle) })
marked('### some title') // <h3>some title</h3>
```
