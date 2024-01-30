import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import SetPasswordForm from '@/user/SetPasswordForm';
import { cookies } from 'next/headers';

const Page = () => {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if(typeof token != 'undefined'){
        redirect("/")
    }
    return (
        <PlainLayout>
            <SetPasswordForm/>
        </PlainLayout>
    );
};

export default Page;