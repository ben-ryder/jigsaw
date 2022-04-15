import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// Config for base component library (@ben-ryder/jigsaw/base)
const baseConfig = {
    input: "src/base.ts",
    output: [
        {
            file: "base/cjs/index.js",
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "base/esm/index.js",
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
    ],
};
const baseTypesConfig = {
    input: "base/esm/types/base.d.ts",
    output: [{ file: "base/index.d.ts", format: "esm" }],
    plugins: [dts()],
};

// Config for styled component library (@ben-ryder/jigsaw/styled)
const styledConfig = {
    input: "src/styled.ts",
    output: [
        {
            file: "styled/cjs/index.js",
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "styled/esm/index.js",
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
    ],
};
const styledTypesConfig = {
    input: "base/esm/types/styled.d.ts",
    output: [{ file: "styled/index.d.ts", format: "esm" }],
    plugins: [dts()],
};

// Final Export
export default [
    baseConfig,
    baseTypesConfig,
    styledConfig,
    styledTypesConfig,
]
