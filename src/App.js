import React from "react";
import Container from "@material-ui/core/Container";
import GraphView from "./graph";

const data1 = {
  nodes: [
    { index: 0, name: "Liikevaihto", value: 100, hours: "100%" },
    { index: 1, name: "Kiinteät kulut", value: 75, hours: "75%" },
    { index: 2, name: "Muuttuvat kulut", value: 10, hours: "10%" },
    { index: 3, name: "Palkkakulut", value: 69, hours: "69%" },
    { index: 4, name: "Muut kiinteät", value: 6, hours: "6%" },
    { index: 5, name: "Kate", value: 15, hours: "15%" }
  ],
  links: [
    { source: 0, target: 1, value: 75, hours: "75%" },
    { source: 0, target: 2, value: 10, hours: "10%" },
    { source: 1, target: 3, value: 69, hours: "69%" },
    { source: 1, target: 4, value: 6, hours: "6%" },
    { source: 0, target: 5, value: 15, hours: "15%" }
  ]
};

export default function App() {
  return (
    <Container maxWidth="xl">
      <GraphView data={data1} />
    </Container>
  );
}
