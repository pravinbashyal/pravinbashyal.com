# How I build pure html blog?

Static site generators like Gatsbyjs, Nextjs or remix_run serves my need but I actually did not want to add too many javascript dependencies and complex configs. My requirements were plain simple. I wanted to write stuffs in md file which gets converted to html files and few more automations.

### Features I needed:
- i only need html, css for now
- can write in md and converts to html
- builds md of changed files
- lists latest blogs
- has created date and last modified date

### Libraries:
- [marked]()
- [linkedom]()


```
import { world } from 'test'
const hello = world()
```
