/* eslint-disable no-console */
const helper = require('../utils/helper');

class AppLogger {
    constructor(corelationId) {
        this._corelation_id = corelationId;
        if (!this._corelation_id) {
            this._corelation_id = helper.generateRandomString(20);
        }
    }

    getCorelationId() {
        return this._corelation_id;
    }

    info(action, message, data) {
        const obj = this._loggerObject('info', action, message, data);
        console.info(obj);
    }

    warn(action, message, data) {
        const obj = this._loggerObject('warn', action, message, data);
        console.warn(obj);
    }

    error(action, message, data, errorStack) {
        const obj = this._loggerObject('error', action, message, data, errorStack);
        console.error(obj);
    }

    debug(action, message, data) {
        const obj = this._loggerObject('debug', action, message, data);
        console.debug(obj);
    }

    _loggerObject(type, action, message, data, errorStack = null) {
        // let text = `timestamp=${new Date().toISOString()}, severity=${type},correlation_id=${
        //   this._corelation_id
        // } `;

        let text = `severity=${type},correlation_id=${this._corelation_id} `;

        /**
         * commented for testing
         */
        //  text += `severity=${type},`;
        // text += `timestamp=${new Date().toISOString()}`;

        text += `action=${action}, `;

        text += ` message=${message}, `;

        if (data) text += ` data=${JSON.stringify(data)}`;

        if (errorStack) text += ` errorStack=${errorStack}`;

        return text;
    }
}

module.exports = AppLogger;
