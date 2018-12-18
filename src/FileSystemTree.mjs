import SourceDirectory from './SourceDirectory.mjs'; 
import assert from 'assert';


export default class FileSystemTree {



    /**
     * set up the tree
     *
     * @param      {string}  path    the root path to search doc files in for
     */
    constructor(path) {
        assert(path, `Missig argument 0 'path'!`);
        this.path = path.endsWith('/') ? path : `${path}/`;
    }



    
    /**
     * read all files in the directory passed to the constructor. store the in a
     * map.
     */
    async load() {
        this.root = new SourceDirectory({
            path: this.path,
            isRoot: true,
        });

        await this.root.load();
    }
}
