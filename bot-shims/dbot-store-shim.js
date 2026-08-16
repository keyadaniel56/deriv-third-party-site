// DBotStore shim — minimal stub
export default class DBotStore {
    static singleton = null;
    static setInstance(store) { return store; }
    static get instance() { return this.singleton; }
    constructor() {}
}
