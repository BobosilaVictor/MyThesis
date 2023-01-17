import { Accordion, Button } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../navigation";
const ModalContent = () => {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Accordion
      variant="filled"
      chevronPosition="left"
      defaultValue="customization"
    >
      <Accordion.Item value="list">
        <Accordion.Control>List of Projects</Accordion.Control>
        <Accordion.Panel>Find the cure for cancer</Accordion.Panel>
        <Accordion.Panel>P versus NP problem</Accordion.Panel>
        <Accordion.Panel>NC = P problem</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="availability">
        <Accordion.Control>Availability</Accordion.Control>
        <Accordion.Panel>Check if its available</Accordion.Panel>
        <Accordion.Panel>
          <Calendar multiple value={value} onChange={setValue} />
        </Accordion.Panel>
      </Accordion.Item>
      <Link to={AppRoutes.CHAT}>
        <Button> Chat </Button>
      </Link>
    </Accordion>
  );
};

export default ModalContent;
