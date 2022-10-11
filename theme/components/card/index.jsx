
import {
  Box,
  Button, Divider, Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Text, useDisclosure,
} from "@chakra-ui/react";

import a from "../../../styles/style.module.scss";

export const Card = ({ data }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ОПС: {data[0]} </ModalHeader>
          <ModalCloseButton />
          <Divider orientation='horizontal' />
          <ModalBody>
            <div className={a.id}>ID-канала: {data[1]}</div>
            <div className={a.ethernet}>Интернет: {data[3]}</div>
            <div className={a.speed}>Скорость линии: {data[2]}</div>
            <div className={a.city}>Город: {data[5]}</div>
            <div className={a.address}>Адрес: {data[6]}</div>
            <div className={a.number}>Номер телефона: {data[4]}</div>
          </ModalBody>
          <ModalFooter justifyContent="space-between" >
            <Button color='green.300' mr={3}>
              <Text fontSize='md' color={"black"}>Выбрать</Text>
            </Button>
            <Button color='blue.300' mr={3} onClick={onClose}>
              <Text fontSize='md' color={"black"}>Закрыть</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box className={a.card} onClick={onOpen} boxShadow={{ shadow: 'Base'}} >
        <Heading as='h5' size='sm'>
          Название ОПС: {data[0]}
        </Heading>
        <div className={a.id}>ID-канала: {data[1]}</div>
      </Box>
    </>

  )
}