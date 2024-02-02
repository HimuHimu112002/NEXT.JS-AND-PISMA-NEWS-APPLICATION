import PlainLayout from '@/components/master/Plain-Layout';
import ProfileForm from '@/user/ProfileForm';
import React from 'react';
import { cookies } from 'next/headers';

// async function getData(cookies){
//     //let option = {method: 'GET', headers:{'Cookie':cookies}, cache: 'no-store'}
//     let headers ={
//         'id': 3
//     }
//     let Profile = (await (await fetch(`${process.env.HOST}/api/user/profile/update`,{headers})).json())['data']
//     return {Profile:Profile}
// }

const Page = async () => {
    //const data = await getData();
    return (
        <PlainLayout>
            <ProfileForm/>
        </PlainLayout>
    );
};

export default Page;