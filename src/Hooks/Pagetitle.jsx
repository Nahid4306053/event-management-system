import React from "react";
import { Helmet } from "react-helmet";
export default function Pagetitle({children}) {

  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}
