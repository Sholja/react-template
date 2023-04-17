const lodash = {
  values: (obj) => Object.keys(obj).map((key) => obj[key]),
  find: (array = [], callback) => array.find((item) => callback(item)),
  filter: (array = [], callback) => array.filter((item) => callback(item)),
  findIndex: (array = [], callback) => array.findIndex((item) => callback(item)),
  isObjectEmpty: (obj) => !obj || !!(Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype),
  map: (array = [], callback) => array.map((item) => callback(item)),
};

export default lodash;
