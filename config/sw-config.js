module.exports = {
  cache: {
    cacheId: "ebutuoy",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "ebutuoy",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
