import { builder } from "@builder.io/sdk";
import { signOut } from "next-auth/react";
import { RenderBuilderContent } from "../../components/builder";
import { Session } from "./Session";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export async function generateStaticParams() {
  const pages = await builder.getAll("page", {
    options: {
      noTargeting: true,
    },
  });

  return pages.map((page) => ({
    page: page.data?.url.split("/").filter(Boolean),
  }));
}

export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      <Session />
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
    </>
  );
}
