/*
 * --------------------------------------------------------------------------- *
 * File: App.tsx                                                               *
 * Project: website                                                            *
 * Created Date: 24 Jul 2023                                                   *
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

import { Heading, Image } from "@chakra-ui/react";
import "./App.css";
import Information from "./components/Information";

import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Image boxSize="100%" objectFit="cover" src="https://madhurabhakti.org/assets/gulabraomaharaj01.png" />
      <Heading py="50px" style={{ fontWeight: "normal" }}>
        गुलाबराव महाराज
      </Heading>
      <Information />
      <ContactMe />
    </>
  );
}

export default App;
