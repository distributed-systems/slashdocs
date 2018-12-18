


/**
 * representation of a source object from the docs folder. individual renderers
 * can claim this file so that is not used by other renderers anymore.
 *
 */
export default class SourceObject {



    // indicates it this file was claimed by a specific renderer
    get isClaimed() {
        return this._claimed;
    }



    /**
     * set up the file
     *
     * @param      {string}  path    path to the file on the disk
     */
    constructor({
        path,
        isRoot = false,
        isDirectory = false,
    }) {
        this._claimed = false;

        if (!isRoot) {
            let parts;

            if (isDirectory) {
                parts = /\/(?<order>\d{3}\.\d{3})[:-](?<name>[^\/]+)$/gi.exec(path);
            } else {
                parts = /\/(?<order>\d{3}\.\d{3})[:-](?<name>[^\/]+)\.(?<extension>[^\.\/]+)$/gi.exec(path);
            }

            if (!parts) {
                throw new Error(`File ${path} has an invalid name. Expected the pattern /\d{3}\.\d{3}[:-][^\/]*\.[^\./]+/gi`);
            } else {
                this.path = path;
                this.name = parts.groups.name;
                this.order = parts.groups.order;

                if (!isDirectory) {
                    this.extension = parts.groups.extension;
                }
            }
        } else {
            this.path = path;
        }
    }



    /**
     * claim this file so that it cannot e used by other renderers anymore
     *
     * @param      {Object}  renderer  instance of the claiming renderer
     */
    claim(renderer) {
        this.claimer = renderer;
        this._claimed = true;
    }
}
