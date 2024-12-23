const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push("md", "mdx", "svg");

config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => !config.resolver.sourceExts.includes(ext),
);

config.transformer.babelTransformerPath = require.resolve("./transformer.js");

// This is not needed for NativeWind, it is configuration for Metro to understand monorepos
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");
config.watchFolders = [workspaceRoot];
config.resolver.disableHierarchicalLookup = true;
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, "node_modules"),
    path.resolve(workspaceRoot, "node_modules"),
];

const { withNativeWind } = require("nativewind/metro");

module.exports = withNativeWind(config, { input: "./global.css", projectRoot });
