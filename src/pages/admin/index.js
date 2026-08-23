import Head from "next/head";
import Accelerator from "@components/immigration/Accelerator";

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Client Files | 6ix City Immigration Inc.</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/immigration.css" />
      </Head>
      <Accelerator />
    </>
  );
}
