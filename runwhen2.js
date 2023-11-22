/* 
	Run When JS
		- Javascript code dependency checker	
	See: https://github.com/rafaelgandi/RunWhen
	LM: 2023-11-23 06:09:48
	Version: 2
 */

const runwhen = (() => {
    return (checkerFn, timeout = 30e3) => {
        if (typeof checkerFn !== 'function') {
            throw new Error(`RunWhen: Checker function needs to be a function that returns a boolean.`);
        }
        const startTime = new Date().getTime();
        const endTime = startTime + timeout;
        return new Promise((resolve, reject) => {
            (function loop() {
                if (new Date().getTime() >= endTime) {
                    reject('RunWhen: Timeout happend.');
                    return;
                }
                if (!checkerFn?.()) {
                    requestAnimationFrame(loop);
                    return;
                }
                resolve();
            })();
        });
    };
})();