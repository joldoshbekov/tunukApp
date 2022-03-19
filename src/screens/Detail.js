import React from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
  let { id } = useParams();


  return (
    <div>hello detail {id}</div>
  )
}

export {Detail} ;