module.exports.addPostcssPlugins = plugins => config => {
  const rules = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf;
  rules.forEach(
    r =>
      r.use &&
      r.use.forEach(u => {
        if (u.options && u.options.ident === "postcss") {
          delete u.options.ident
          const originalPlugins = u.options.plugins
          if (originalPlugins) {
            delete u.options.plugins
            u.options.postcssOptions = {
              plugins: [...originalPlugins(), ...plugins]
            }
          } else {
            u.options.postcssOptions = {
              plugins: [...plugins]
            }
          }
        }
      })
  );
  return config;
};
