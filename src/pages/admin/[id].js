import Head from "next/head";
import FileDetail from "@components/immigration/FileDetail";

export default function AdminFileDetailPage() {
  return (
    <>
      <Head>
        <title>Client File | 6ix City Immigration Inc.</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/immigration.css" />
      </Head>
      <FileDetail />
    </>
  );
}
