import React from 'react';
import {useColorMode, useColorModeValue, IconButton} from '@chakra-ui/react';
import {FaMoon, FaSun} from 'react-icons/fa';
import h from "../styles/header.module.scss";


export const ColorModeSwitcher = () => {
    const {toggleColorMode} = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
        <IconButton
            bg={useColorMode === "dark" ? "black" : "white"}
            size="md"
            fontSize="lg"
            variant="solid"
            marginLeft="12"
            onClick={toggleColorMode}
            icon={<SwitchIcon/>}
            aria-label={"test"}
        />
    );
};
