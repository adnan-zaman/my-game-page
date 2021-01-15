import React from "react";
import Form from "../components/Form";
import { TextField } from "../components/FormFields";

export default function Login(props) {
  return (
    <>
      <h1>hi guys</h1>
      <Form>
        <TextField value="duder" />
        <TextField value="rooder" />
        <TextField value="awoor" />
        <TextField value="loler" />
      </Form>
    </>
  );
}

export function getServerSideProps(context) {
  return {
    props: JSON.parse(JSON.stringify(context.res.locals)),
  };
}
