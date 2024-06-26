const cls = require('cls-hooked');
const uuid = require('uuid');

const store = cls.createNamespace(`correlation-id-namespace`);
const CORRELATION_ID_KEY = `correlation-id`;

const withId = (fn, id) => {
  store.run(() => {
    store.set(CORRELATION_ID_KEY, id || uuid.v4());
    fn();
  });
};

const getId = () => store.get(CORRELATION_ID_KEY);

module.exports = {
  withId,
  getId,
  bindEmitter: store.bindEmitter.bind(store),
  bind: store.bind.bind(store),
};
