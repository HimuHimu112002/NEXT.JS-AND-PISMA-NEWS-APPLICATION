import React from 'react';
import AppNavBar from "@/components/master/AppNavBar";
import Footer from "@/components/master/Footer";
import {Toaster} from "react-hot-toast";
import { cookies, headers } from 'next/headers';
import {PrismaClient} from "@prisma/client";

async function getData(){
    // let socials= (await (await fetch(`${process.env.HOST}/api/social`)).json())['data']
    // let categories= (await (await fetch(`${process.env.HOST}/api/category`)).json())['data']

    const prisma=new PrismaClient();
    let socials= await prisma.socials.findMany()
    let categories= await prisma.categories.findMany()

    return {socials:socials,categories:categories}
}


const PlainLayout = async (props) => {
    const data = await getData();

    const cookieStore = cookies()
    const token = cookieStore.get('token')

    let isLogin = false
    isLogin = typeof token !="undefined"

    return (
        <>
            <AppNavBar isLogin={isLogin} data={data}/>
                {props.children}
                <Toaster position="bottom-center"/>
            <Footer data={data}/>
        </>
    );
};

export default PlainLayout;