import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import PinVerifyForm from '@/user/PinVerifyForm';
import { cookies } from 'next/headers';

const Page = () => {

    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if(typeof token != 'undefined'){
        redirect("/")
    }
    return (
        <PlainLayout>
            <PinVerifyForm/>
        </PlainLayout>
    );
};

export default Page;