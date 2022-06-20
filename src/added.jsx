import React, { Component, useState } from 'react';
import LinkedList from './Linked_List';
const ll=new LinkedList();
function Add() {
const [Add,setAdd]=useState([])

const adder=()=>{
    setAdd([...Add,<p>hello</p>,<p>hello</p>])
}
    return ( <div>
<button onClick={adder}>add</button>
<div>{Add.map((name)=>(<li>{name}</li>))}</div>
    </div> );
}

export default Add;