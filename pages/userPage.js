import { useState } from "react";

export default function UserPage(props) {}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
