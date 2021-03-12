module.exports = function(api) {
  api.cache(true);

  const presets = ["@vue/cli-plugin-babel/preset"];
  const plugins = [
    [
      "wildcard",
      {
        exts: ["md"]
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
