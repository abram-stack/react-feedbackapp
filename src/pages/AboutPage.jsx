import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <h1>Hello this is about page</h1>
      <Link to='/'>back to main</Link>
    </Card>
  );
}

export default AboutPage;
