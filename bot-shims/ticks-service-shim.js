// Simplified TicksService for the trade engine
import { observer as globalObserver } from '../bot-app/src/external/bot-skeleton/utils/observer.js';

export default class TicksService {
    constructor() {
        this.ticks = new Map();
        this.candles = new Map();
        this.tickListeners = new Map();
        this.ohlcListeners = new Map();
        this.subscriptions = new Map();
        this.ticks_history_promise = null;
    }

    requestPipSizes() {
        return Promise.resolve(this.pip_sizes || {});
    }

    async request(options) {
        return [];
    }

    monitor(options) {
        return Promise.resolve('monitor_key');
    }

    async stopMonitor(options) {}

    observe() {}

    forget() {
        return Promise.resolve();
    }

    forgetCandleSubscription() {
        return Promise.resolve();
    }

    unsubscribeFromTicksService() {
        return Promise.resolve();
    }
}
