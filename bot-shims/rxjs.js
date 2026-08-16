// rxjs shim
export class BehaviorSubject {
    constructor(v) { this._value = v; }
    get value() { return this._value; }
    next(v) { this._value = v; }
    subscribe(fn) { if (fn) fn(this._value); return { unsubscribe: () => {} }; }
    pipe(...fns) { return fns.reduce((v, fn) => fn(v), this); }
}
export const isAuthorizing$ = new BehaviorSubject(true);
