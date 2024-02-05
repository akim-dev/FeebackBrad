import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <h4>About Page</h4>
      <p>This is About Page</p>
      <Link to="/">back to Home</Link>
    </Card>
  );
}

export default AboutPage;
