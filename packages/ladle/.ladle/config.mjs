export default {
  addons: {
    ladle: {
      enabled: false
    },
    source: {
      enabled: false
    },
    rtl: {
      enabled: false
    },
    theme: {
      enabled: false,
      defaultState: "light",
    },
    width: {
      enabled: true,
      options: {
        small: 576,
        medium: 768,
        large: 992,
        extraLarge: 1200,
      },
      defaultState: 0
    },
  },
};
