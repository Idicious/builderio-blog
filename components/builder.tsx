"use client";

import { Builder, builder } from "@builder.io/sdk";
import {
  BuilderComponent,
  useIsPreviewing,
  withChildren,
} from "@builder.io/react";
import DefaultErrorPage from "next/error";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderPageProps {
  content: any;
}

export function RenderBuilderContent({ content }: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If `content` has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="page" />;
  }
  // If the `content` is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}

Builder.registerComponent(withChildren(dynamic(() => import("./Card/Card"))), {
  name: "Card",
  inputs: [
    {
      name: "header",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(
  dynamic(() => import("./Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);
