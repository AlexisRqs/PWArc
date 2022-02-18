const isLocalhost = Boolean(
    // ....
);
// Creates a super minimalist observable to notify the app when updates are available.
function O() {
    this.a = []
}
O.prototype = {
    subscribe: function (a) {
        a && (this.a.push(a), void 0 !== this.b && a(this.b))
    },
    next: function (a) {
        this.b = a;
        for (var
                b = 0, d = this.a; b < d.length; b++)(0, d[b])(a)
    }
};
var obs = new O();
window.swObservable = obs;
// ....
function registerValidSW(swUrl, obs) {
    // ....
    if (installingWorker.state === 'installed') {
        if (navigator.serviceWorker.controller) {
            console.log('New content is available; please refresh.');
            obs.next(true);
        } else {
            console.log('Content is cached for offline use.');
            obs.next(false);
        }
    }
    // ....
}