// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;




import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend base ESLint configs for Next.js and TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Disable no-unused-vars rule for TypeScript
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply this rule to TypeScript files
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Turn off the unused vars rule
    },
  },
];

export default eslintConfig;
