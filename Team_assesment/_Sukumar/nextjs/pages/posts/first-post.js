import { Link } from "@mui/material";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Firstpost() {
    return(
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>first post</h1>
            <h2>
                <Link href='/'>
                
               <a> hey! hello there</a>
                </Link> 
                 </h2>
        </Layout>
    )
}