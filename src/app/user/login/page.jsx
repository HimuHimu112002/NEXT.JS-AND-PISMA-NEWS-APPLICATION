import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import LoginForm from '@/user/LoginForm';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const Page = () => {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if(typeof token != 'undefined'){
        redirect("/")
    }
    return (
        <PlainLayout>
            <LoginForm/>
        </PlainLayout>
    );
};

export default Page;