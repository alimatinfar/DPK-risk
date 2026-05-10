import React from 'react';
import useGetQueryParam from "../../hooks/useGetQueryParam";
import QUERY_PARAMS from "../../constances/queryParams";

function SSOLoginPage() {

  const code = useGetQueryParam(QUERY_PARAMS.CODE)

  console.log({code})

  return (
    <div>sso login</div>
  );
}

export default SSOLoginPage;