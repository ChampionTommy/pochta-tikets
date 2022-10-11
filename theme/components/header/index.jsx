import {
  Box,
  Container, Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode
} from '@chakra-ui/react';

import React from 'react';
import { FaSearch, FaTelegramPlane, FaGithub } from 'react-icons/fa';
import {ColorModeSwitcher} from "../../ColorModeSwitcher";
import h from '../../../styles/globals.module.scss';

export const Header = ({ onChange }) => {

  const handleNameChange = (event) => onChange(event.target.value);

  return (
    <header className={h.header}>
      <Container maxW='1200px'>
        <Box display='flex' justifyContent='space-between' mb={6}>
          <Heading>POCHTA ETHERNET TICKETS </Heading>
          <Flex>
            <a href="https://github.com/ChampionTommy">
              <IconButton
                  bg={useColorMode === "dark" ? "black" : "white"}
                  size="md"
                  fontSize="lg"
                  variant="solid"
                  marginLeft="2"
                  icon={<FaGithub />}
                  aria-label={"test"}
                  href={"ya.ru"}
              />
            </a>
            <a href="https://t.me/championtommy">
              <IconButton
                  bg={useColorMode === "dark" ? "black" : "white"}
                  size="md"
                  fontSize="lg"
                  variant="solid"
                  marginLeft="2"
                  icon={<FaTelegramPlane />}
                  aria-label={"test"}
                  href={"ya.ru"}
              />
            </a>
            <ColorModeSwitcher />
          </Flex>
        </Box>
        <Box bg={useColorMode === 'dark' ? 'black' : 'white'} borderRadius={10}>
          <InputGroup size='md'>
            <Input
              placeholder='Введите номер ОПС'
              type='search'
              onChange={handleNameChange}
              _focusVisible={{ shadow: 'md' }}
            />
            <InputRightElement width='2.5rem'>
              <FaSearch />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Container>
    </header>
  );
};