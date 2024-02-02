import PlainLayout from '@/components/master/Plain-Layout';
import UserComments from '@/components/news/UserComments';
import { cookies } from 'next/headers';
import React from 'react';

async function getData(cookies){
    let option = {method: 'GET', headers:{'Cookie':cookies}, cache: 'no-store'}
    let headers ={
        'id': 1
    }
    let Comments = (await (await fetch(`${process.env.HOST}/api/comments/manage`,{headers})).json())['data']
    return {Comments:Comments}
}
const Page = async () => {
    const cookieStore = cookies();
    const data = await getData();
    return (
        <PlainLayout>
            <UserComments data={data['Comments']}/>
        </PlainLayout>
    );
};

export default Page;