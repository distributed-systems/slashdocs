# SlashDocs

The SlashDocs Documentation Generator

- Build your docs from combination of source code analysis, jsdoc comments analysis and markdown files
- Completely modular and easy themable
- Creates static html files in a directory of your choosing
- Provides free cloud hosting for your opensource docs


Example:
- your source files are stored in the `src` directory
- your docs are stored in your `docs/src` directory
- you want to place your docs in the `docs` directory

contents of `docs/src`

src
├── 000.000-Introduction
│   ├─── 000.000-Introduction.md
│   ├─── 100.000-Architecture.md 
└── 100.000-APIDocs
    ├─── 000.000-Introduction.md
    └─── 100.000-example-1.md


```javascript
import SlashDocs, {
    APIDocsBuilder,
    FSDocsBuilder,
    MarkdownRenderer,
    TOCRenderer,
    ScaffoldingRenderer,
} from '@distributed-systems/slashdocs';
import LinaTheme from '@distributed-systems/slashdocs-theme-lina';


const docs = new SlashDocs();

// tell slashdocs where to look for the source documentation files for creating the docs 
docs.setSourcePath('path/to/docs/sources');

// use linas preferred styles
docs.use(new LinaTheme());

// build docs from the source code and the files found on the file system
docs.use(new APIDocsBuilder('path/to/source'));
docs.use(new FSDocsBuilder('path/to/docs/sources'));

// render the docs using the following renderers
docs.use(new MarkdownRenderer());
docs.use(new ScaffoldingRenderer());
docs.use(new TOCRenderer());

// go!
await docs.build('in/directory');
```