cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/src/firefoxos/notification.js",
        "id": "cordova-plugin-dialogs.dialogs-impl",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-dialogs": "1.1.1",
    "cordova-plugin-whitelist": "1.0.0"
}
// BOTTOM OF METADATA
});