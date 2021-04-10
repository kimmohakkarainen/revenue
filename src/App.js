import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./protip";
import GraphView from "./graph";

const data1 = {
  nodes: [
    { index: 0, name: "Liikevaihto", value: 100, hours: "100%" },
    { index: 1, name: "Kiinteät kulut", value: 75, hours: "85%" },
    { index: 2, name: "Muuttuvat kulut", value: 10, hours: "3:00" },
    { index: 3, name: "Palkkakulut", value: 69, hours: "1:20" },
    { index: 4, name: "Muut kiinte", value: 6, hours: "1:40" },
    { index: 5, name: "Kate", value: 15, hours: "1:40" }
  ],
  links: [
    { source: 0, target: 1, value: 75, hours: "+1:00" },
    { source: 0, target: 2, value: 10, hours: "+2:00" },
    { source: 1, target: 3, value: 69, hours: "+1:20" },
    { source: 1, target: 4, value: 6, hours: "+1:40" },
    { source: 0, target: 5, value: 15, hours: "+1:40" }
  ]
};

export default function App() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <GraphView data={data1} />
      </Box>
    </Container>
  );
}
