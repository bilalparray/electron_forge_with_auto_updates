module.exports = {
  packagerConfig: {
    asar: true,
    icon: "src/assets/icons/ico.ico", // Specify the correct path to your icon file
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        icon: "src/assets/icons/ico.ico",
        setupIcon: "src/assets/icons/ico.ico",
        iconUrl: "https://renosoftwares.com/favicon.ico",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
