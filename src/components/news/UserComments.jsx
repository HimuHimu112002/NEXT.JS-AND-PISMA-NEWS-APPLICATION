"use client"
import React, {useState} from 'react';
const UserComments = (props) => {
    
    return (
        <div className="container">
            <div className="mb-3 py-5">
                    <ul className="list-group bg-transparent list-group-flush">
                        {
                           props.data.map((item,i)=>{
                               return  <li key={i} className="list-group-item bg-transparent border-bottom mb-4">
                                   <h3 className="text-danger">
                                       <i className="bi bi-person-circle text-danger"></i> User Comment: {item['des']}
                                   </h3>
                               </li>
                           })
                        }
                    </ul>
            </div>
        </div>
    );
};

export default UserComments;