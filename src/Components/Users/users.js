import React, { Component } from "react";
import { useParams } from "react-router-dom";
const Users=()=>{
  const params =useParams()
  console.log(params);
  return<div>id : {params.id}, name : {params.name}</div>
}

export default Users;
