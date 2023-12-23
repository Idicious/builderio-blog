import builder, { useIsPreviewing, BuilderComponent } from "@builder.io/react";
import { BuilderContent } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";

import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Card from "../../components/Card/Card";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page
  const page = await builder
    .get("blog-post", {
      userAttributes: {
        slug: params?.slug,
      },
    })
    .toPromise();

  // Return the page content as props
  return {
    props: {
      page: page || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
  // Get a list of all pages in Builder
  const blogPosts = await builder.getAll("blog-post");

  // Generate the static paths for all pages in Builder
  return {
    paths: blogPosts.map((page) => `/blog/${page.data?.slug}`),
    fallback: "blocking",
  };
}

// Define the Page component
export default function Page({ page }: { page: BuilderContent | null }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        <title>{page?.data?.title}</title>
      </Head>
      <Card header={page?.data?.title || ""}>
        <pre>{JSON.stringify(page?.data, null, 2)}</pre>
      </Card>
    </>
  );
}
