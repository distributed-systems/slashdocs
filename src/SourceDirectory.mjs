import SourceObject from './SourceObject.mjs';
import SourceFile from './SourceFile.mjs';
import fs from 'fs';
import path from 'path';

const { promises: { readdir, stat, readFile } } = fs;



export default class SourceDirectory extends SourceObject {


    constructor({
        path,
        isRoot,
    }) {
        super({
            path,
            isRoot,
            isDirectory: true,
        });

        this.files = [];
        this.directories = [];
    }





    addFile(file) {
        this.files.push(file);
    }


    addDirectory(directory) {
        this.directories.push(directory);
    }



    
    /**
     * read all files in the directory passed to the constructor. store the in a
     * map.
     */
    async load() {
        await this.loadDirectory(this.path);
    }



    /**
     * recursively load all files from a directory
     * 
     * @private
     *
     * @param      {string}   directoryPath    The directory path to load
     * @return     {Promise}
     */
    async loadDirectory(directoryPath) {
        const files = await readdir(directoryPath);

        await Promise.all(files.map(async(file) => {
            const filePath = path.join(directoryPath, file);
            const stats = await stat(filePath);

            if (stats.isDirectory()) {
                const subDirectory = new SourceDirectory({
                    path: filePath,
                });

                await subDirectory.load();
                
                this.addDirectory(subDirectory);
            } else if (stats.isFile()) {
                const sourceFile = new SourceFile({
                    path: filePath,
                });

                this.addFile(sourceFile);
            }
        }));
    }
}
