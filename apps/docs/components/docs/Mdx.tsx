import { evaluateSync } from "@mdx-js/mdx";
import * as provider from "@mdx-js/react";
import { useMDXComponents } from "nextra/mdx";
import React from "react";
import * as runtime from "react/jsx-runtime";

export function Mdx({ children }: { children?: string }) {
    if (!children) return null;

    const { default: MDXContent } = evaluateSync(children, {
        ...runtime,
        ...provider,
        useMDXComponents,
        format: "mdx",
        development: false,
        Fragment: React.Fragment
    });

    return <MDXContent />;
}