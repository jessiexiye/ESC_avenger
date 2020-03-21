// Define your configuration
let options =  {
    "rainbow": {
        //        "host": "official",                      // Can be "sandbox" (developer platform), "official" or any other hostname when using dedicated AIO
                "host": "sandbox"                      // Can be "sandbox" (developer platform), "official" or any other hostname when using dedicated AIO
    },
    "credentials": {
        "login": "",  // The Rainbow email account to use
        "password": ""   // The Rainbow associated password to use
    },
    // Application identifier

    "application": {
        "appID": "", // Need to create your own application on the hub.openrainbow.com platform
        "appSecret": ""
    },
    // */

    // Proxy configuration
    /*"proxy": {
        "host": "xx.xx.xx.xx",
        "port": 8080,
        "protocol": "http"
    }, // */

    // Logs options
    "logs": {
        "enableConsoleLogs": true,              // Default: true
        "enableFileLogs": false,                // Default: false
        "color": true,
        "level": "info",
        "customLabel": "StarterKit",
        "system-dev": {
            "internals": false,
            "http": false
        }, // */
        "file": {
            "path": "d:\\SUTD",     // Default path used
            "customFileName": "R-SDK-Node-StarterKit",
            //"level": 'info',                    // Default log level used
            "zippedArchive" : false
        }
    },
    // IM options
    "im": {
        "sendReadReceipt": false,   // True to send the 'read' receipt automatically
        "messageMaxLength": 1024,
        "sendMessageToConnectedUser": true,
        "conversationsRetrievedFormat": "small",
        "storeMessages": false,
        "nbMaxConversations": 15,
        "rateLimitPerHour": 1000
    }
}

module.exports = {
    options
}