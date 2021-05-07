# (WIP) How I build pure html blog?

I had been working on developing some personal website with Gatsby, mid way through I said to myself, 'Your requirements are really simple. You dont need static website framework... probably'. Dont get me wrong, site generators like Gatsbyjs, Nextjs or remix_run are great tools and if you want more done in your personal blog like analytics, payment gateway, search, rss feed, these services are probably your best fit. They provide array of plugins and themes that's easily pluggable which I did not need.  Also I am not a html purist carrying flame and pitchfork agains against javascript and frontend framework like react. We have come to an era of web apps where we have access to complex software solutions inside browser regardless of OS or device. And this can be mostly attributed to the progress in javascript and frontend eco system.

> You dont need  static website framework<br/>
>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...probably

Bottom line, I wanted simple html website without too many javascript dependencies and configs. So I scraped what I had in progress with gatsby and started listing out what my requirements were.

## Requirements
1. basic html and css blog
2. I write markdown and chugs out html blogs
3. It shows created date and last modified date
4. looks pretty decent
5. is responsive and accessible
6. seo optimized
7. lists latest blogs
8. builds fast

## Libraries and tools
- [marked](https://github.com/markedjs/marked)
- [linkedom](https://github.com/WebReflection/linkedom)
- [highlight.js](https://highlightjs.org/)
- [lighthouse](https://developers.google.com/web/tools/lighthouse)

Through different improvements and iterations what I have right now can be found in my [github repo](https://github.com/pravinbashyal/pravinbashyal.com). Please do raise an issue or leave a feedback.

## Processes
Now lets break down how these requirements were met.

### _1. basic html and css blog_

I started out with basic html builder using javascript string templates and html build from [marked](https://github.com/markedjs/marked). I created a basic function `createHtmlFrame` that adds html wrappers to html generated from markdown file, which we will follow up on next point.

```typescript
const createHtmlFrame = ({ content }) =>
  `
  <html>
  <head></head>
  <body>
    <header></header>
    <main>
      <article>
        ${content}
      </article>
    </main>
    <footer>
    </footer>
  </body>
  </html>
  `
```

So when I write following md:

```markdown
# hello

world
```

Following would be output:
```html
  <html>
    <head></head>
    <body>
    <header></header>
    <main>
      <article>
        <h1>
          Hello
        </h1>
        <p>
          world
        </p>
      </article>
    </main>
    <footer>
    </footer>
    </body>
  </html>
```

### _2. I write markdown and chugs out html blogs_

This section will cover two of my requirements:
- I write in md and chugs out html blogs

```typescript
const marked = require("marked")
marked.use({ renderer: createRenderer(setTitle) })
marked('### some title') // <h3>some title</h3>
```
### _3. It shows created date and last modified date_

### _4. looks pretty decent_
- typography
- code highlighting
- quotes

### _5. is responsive and accessible_
### _6. seo optimized_
### _7. lists latest blogs_

## What I gained

This resulted in very little javascript dependencies.

My `package.json`:

```json
{
  .
  .
  .
  "dependencies": {
    "highlight.js": "^10.7.2",
    "linkedom": "^0.7.1",
    "marked": "^2.0.1"
  },
  .
  .
  .
}
```

**fast build**
~ 30 seconds

## Other workarounds

### Use imgur for images

Currently images are hosted in imgur. I guess this can also be optimized to use [WebP](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image) version instead of jpeg version. Also [Picture html element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) is highly recommended to be used in the website. However for now I have opted to host some optimized image and imgur and link them as follows

```markdown
![alt text](https://link-to-image)
```


### How does it scale?
no idea. will see as we go. i dont plan to write blogs that often. maybe a blog per month or so. so it should be okay for 2-3 years. It was done as experiment anyways.

### Lighthouse score

This website has excellent lighthouse score as shown in the screenshot below for this particular page.

![screenshot for lighthouse score for link:https://www.pravinbashyal.com/blogs/how_i_built_pure_html_blog.html](https://i.imgur.com/7oqQOb7.jpg)

### Build time

Currently the build time is pretty fast. Most of the builds run under 30s. However as there are only couple of files to transform, this might increase with the number of blogs. I will have to keep an eye on how this scales over time.

![screenshot for build time](https://i.imgur.com/UliHRhN.jpg)
