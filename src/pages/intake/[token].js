import Head from "next/head";
import ClientIntake from "@components/immigration/ClientIntake";

export default function IntakePage() {
  return (
    <>
      <Head>
        <title>Client Questionnaire | 6ix City Immigration Inc.</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="stylesheet" href="/immigration.css" />
      </Head>
      <ClientIntake />
    </>
  );
}
