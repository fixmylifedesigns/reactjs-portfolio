import React, { useState } from "react";
export default function BusinessCard() {
  const [info] = useState({
    name: "Irving Duran",
    title: "Full Stack Developer",
    phone: "(347) 265-5234",
    email: "irving@duranirving.com",
    website: "http://www.duranirving.com",
    location: "Brooklyn, New York"
  });
  return (
    <div>
      <h1>Hi I'm {info.name}</h1>
    </div>
  );
}