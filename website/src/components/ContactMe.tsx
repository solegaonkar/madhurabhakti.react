/*
 * --------------------------------------------------------------------------- *
 * File: ContactMe.tsx                                                         *
 * Project: website                                                            *
 * Created Date: 25 Jul 2023                                                   *
 * Author: Vikas K Solegaonkar (vikas@solegaonkar.com)                         *
 * Copyright(c) Vikas K Solegaonkar, 2023                                      *
 *                                                                             *
 * Last Modified: Wed Jul 26 2023                                              *
 * Modified By: Vikas K Solegaonkar                                            *
 *                                                                             *
 * HISTORY:                                                                    *
 * --------------------------------------------------------------------------- *
 * Date         By     Comments                                                *
 * --------------------------------------------------------------------------- *
 */

/* eslint-disable no-irregular-whitespace */

import { Card, CardBody, GridItem, Input, SimpleGrid, Button, Textarea, Heading } from "@chakra-ui/react";
import MapContainer from "./MapContainer";
import { useState } from "react";
import axios from "axios";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    await axios.post(
      "https://api.krazyminds.com/email",
      {
        name,
        email,
        phone,
        subject: "MadhuraBhakti.Org: Contact Us",
        message,
      },
      {
        headers: {
          "x-api-key": "60e4b6df-1612-46de-9c34-0ae634c60e2f",
        },
      }
    );
  };

  return (
    <>
      <SimpleGrid spacing={10} columns={2} textAlign={"left"}>
        <GridItem colSpan={2}>
          <Card borderTop="4px" borderColor="red.200" bg="orange.100">
            <CardBody color="gray.700">
              <Heading color="red.700" fontWeight="normal">
                संपर्क​ करा
              </Heading>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Card borderTop="4px" borderColor="orange.100" bg="white">
            <CardBody color="gray.700">
              <MapContainer />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Card borderTop="4px" borderColor="orange.100" bg="white">
            <CardBody color="gray.700">
              <Input
                placeholder="Name"
                mb="3"
                mt="3"
                border={{ base: "solid", md: "1px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Email"
                mb="3"
                mt="3"
                border={{ base: "solid", md: "1px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Phone"
                mb="3"
                mt="3"
                border={{ base: "solid", md: "1px" }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Textarea
                placeholder="Message"
                mb="3"
                mt="3"
                border={{ base: "solid", md: "1px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button colorScheme="orange" size="lg" width="full" mb="3" mt="10" onClick={() => sendMessage()}>
                Send
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default ContactMe;

//https://static.krazyminds.com/emailform/script.js
// <div id="email-form">60e4b6df-1612-46de-9c34-0ae634c60e2f</div>
// <script src="https://static.krazyminds.com/emailform/script.js"></script>
