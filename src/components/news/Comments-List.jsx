"use client"
import React, {useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import CommentForm from "@/components/news/Comment-Form";

const CommentsList = (props) => {
    const [key,setKey]=useState("Comments")
    return (
        <div className="container">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k)=>setKey(k)} className="mb-3">
                <Tab eventKey="Comments" title="Comments">
                    <ul className="list-group bg-transparent list-group-flush">
                        {
                           props.data.map((item,i)=>{
                               return  <li key={i} className="list-group-item bg-transparent border-bottom mb-4">
                                   <h3 className="text-danger">
                                       <i className="bi bi-person-circle text-danger"></i> User Name: {item['users']['firstName']} {item['users']['lastName']}
                                   </h3>
                                   <h4 className="text-secondary text-bold">Comment: {item['des']}</h4>
                               </li>
                           })
                        }
                    </ul>
                </Tab>
                <Tab eventKey="Create" title="Create">
                    <CommentForm postID={props.postID} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default CommentsList;