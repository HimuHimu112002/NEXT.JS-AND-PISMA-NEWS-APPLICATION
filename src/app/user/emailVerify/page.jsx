import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import EmailVerifyForm from '@/user/EmailVerifyForm';

const Page = () => {
    return (
        <PlainLayout>
            <EmailVerifyForm/>
        </PlainLayout>
    );
};

export default Page;