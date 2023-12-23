import { Builder, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  withChildren(dynamic(() => import("./components/Card/Card"))),
  {
    name: "Card",
    inputs: [
      {
        name: "header",
        type: "string",
        required: true,
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
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
