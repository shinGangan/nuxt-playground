// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  ignores: [
    "**/coverage",
    // Note: 以下はdefaultで設定済み
    // - ref: https://github.com/nuxt/eslint/blob/main/packages/eslint-config/src/flat/configs/ignores.ts
    // '**/dist', '**/node_modules', '**/.nuxt', '**/.output',
  ],
  // Note: globalsはdefaultで設定済み
  // - ref: https://github.com/nuxt/eslint/blob/main/packages/eslint-config/src/flat/configs/javascript.ts
  rules: {
    "@typescript-eslint/explicit-function-return-type": "error",
  },
});
