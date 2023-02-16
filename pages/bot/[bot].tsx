import Layout from "@/components/layout";
import { Button } from "theme-ui";
import { useRouter } from "next/router";
import fetch from "node-fetch";

export default function Bots(props: {data: any}) {
    useRouter()
    return (
        <Layout>
            Data: {props.data.data}
        </Layout>
    )
}
export async function getServerSideProps(context: any) {
    var urlScheme = "http://";
    if (process.env.NODE_ENV === "production") urlScheme = "https://";
    else urlScheme = "http://";
    const res = await fetch(`${urlScheme}${context.req.headers.host}/api/stats/${context.params.bot}/get`);
    const resJSON: any = await res.json();
    return {
      props: {
        data: resJSON
      }, // will be passed to the page component as props
    }
  }