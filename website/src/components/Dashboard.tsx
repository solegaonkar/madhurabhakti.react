/*
 * --------------------------------------------------------------------------- *
 * File: Dashboard.tsx                                                         *
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

import { SimpleGrid, Text, Heading, Card, CardBody, Divider, Input } from "@chakra-ui/react";

import { Data } from "../data";
import { useState } from "react";

interface Book {
  file: string;
  language: string;
  translator: string;
  author: string;
  series: string;
  title: string;
  extendedTitle: string;
  topic: string;
  original: string;
}
export default function Dashboard() {
  const books: Book[] = Data.books;
  const [search, setSearch] = useState("");

  const showPdf = (file: string) => {
    window.open(`https://madhurabhakti.org/pdf/${file}.pdf`, "_blank");
  };

  const matchBook = (book: Book) => {
    if (search === "") return true;
    if (book.title.toLowerCase().includes(search.toLowerCase())) return true;
    if (book.author.toLowerCase().includes(search.toLowerCase())) return true;
    if (book.translator.toLowerCase().includes(search.toLowerCase())) return true;
    if (book.extendedTitle.toLowerCase().includes(search.toLowerCase())) return true;
    return false;
  };

  return (
    <>
      <Input
        placeholder="Filter"
        mb="10"
        mt="10"
        border={{ base: "solid", md: "1px" }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <SimpleGrid spacing={10} minChildWidth={300}>
        {books &&
          books.filter(matchBook).map((book, i) => (
            <Card
              key={i}
              borderTop="4px"
              borderColor="red.600"
              bg="white"
              onClick={() => {
                showPdf(book.file);
              }}
              _hover={{ bg: "orange.100", cursor: "pointer" }}
            >
              <CardBody color="gray.500" textAlign={"left"}>
                <Heading as="h3" size="sm">
                  {book.title}
                </Heading>
                <hr />
                <Text>{book.author}</Text>
                <Text>{book.translator}</Text>
                <Text>{book.extendedTitle}</Text>
              </CardBody>

              <Divider borderColor="gray.200" />
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
}
