const ComponentTemplate = () => {
  const getComponentName = featureName => {
    featureName = featureName.replace(/^\w/, c => c.toUpperCase());
    return featureName.replace(/-([a-z])/gi, (all, letter) => {
      return letter.toUpperCase();
    });
  };

  const create = featureName => {
    return `import React from 'react';

const ${getComponentName(featureName)} = () => (
    <>
        <h1>NiGi created component ${getComponentName(featureName)}</h1>
    </>
);

export default ${getComponentName(featureName)};
  `;
  };

  return Object.freeze({
    create,
    getComponentName,
  });
};

module.exports = ComponentTemplate;
