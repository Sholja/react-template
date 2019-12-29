const ReducerTemplate = () => {
  const getName = featureName => {
    return featureName.replace(/-([a-z])/gi, (all, letter) => {
      return letter.toUpperCase();
    });
  };

  const create = (featureName, addActionTypes) => {
    return `${addActionTypes ? `import ${getName(featureName)}ActionTypes from '../constants/action-types'\n\n` : ''}const ${getName(featureName)}State = {};

export const ${getName(featureName)}Reducer = (state = ${getName(featureName)}State, payload) => {
    switch (payload.type) {
    default:
        return state;
    }
};
`;
  };

  return Object.freeze({
    create,
  });
};

module.exports = ReducerTemplate;
