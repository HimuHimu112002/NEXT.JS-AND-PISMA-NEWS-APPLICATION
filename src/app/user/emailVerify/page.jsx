import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import EmailVerifyForm from '@/user/EmailVerifyForm';
import { cookies } from 'next/headers';

const Page = () => {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if(typeof token != 'undefined'){
        redirect("/")
    }
    return (
        <PlainLayout>
            <EmailVerifyForm/>
        </PlainLayout>
    );
};

export default Page;