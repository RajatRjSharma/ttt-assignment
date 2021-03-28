import Head from "next/head";
import RollNumber from "../components/RollNumber";

export default function Home() {
  return (
    <div>
      {" "}
      <Head>
        {"This is For Start "}
        <title>Result</title>
        <meta name="keywords" content="View Result by Roll Number " />
      </Head>
      <RollNumber />
    </div>
  );
}
