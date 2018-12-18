


export default class Builder {

    
    get type() {
        return 'builder';
    }


    /**
     * set up the class
     *
     * @param      {Object}  arg1                options object
     * @param      {Object   arg1.renderFactory  factory that provides renderers
     */
    constructor({
        renderFactory,
    }) {
        this.renderFactory = renderFactory;
    }



    /**
     * set up the builder
     *
     * @return     {Promise}
     */
    async load() {

    }


    /**
     * prepare the renderer, set it up and make it ready for the build step
     *
     * @return     {Promise} 
     */
    async prepare() {

    }


    /**
     * build the docs from the source
     *
     * @return     {Promise}  
     */
    async build() {

    }


    /**
     * link the the docs, resolve references
     *
     * @return     {Promise}
     */
    async link() {

    }
}