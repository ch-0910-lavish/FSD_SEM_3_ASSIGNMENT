function handleCallback(callback) {
    let called = false;

    return function () {
        if (called) {
            return;
        }

        called = true;
        callback();
    };
}

function sendResponse() {
    console.log("Response sent successfully!");
}

const safeCallback = handleCallback(sendResponse);

// Calling callback multiple times
safeCallback();
safeCallback();
safeCallback();