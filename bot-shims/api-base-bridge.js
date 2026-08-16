// api-base bridge — provides the api_base singleton that the trade engine uses.
// It delegates all API calls to the BotAPIAdapter which wraps DerivClient.

class ApiBaseBridge {
    constructor() {
        this.api = null;
        this.token = '';
        this.account_info = {};
        this.pip_sizes = {};
        this.is_running = false;
        this.subscriptions = [];
    }

    setAdapter(adapter) {
        this.adapter = adapter;
        this.api = adapter.api;
        this.token = adapter.token || '';
        this.account_info = adapter.account_info || {};
    }

    createNewInstance() {}

    toggleRunButton() {}

    pushSubscription(sub) {
        this.subscriptions.push(sub);
    }
}

const api_base = new ApiBaseBridge();
export { api_base };
export default api_base;
