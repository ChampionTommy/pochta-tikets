import React from 'react';

import {
    Button,
    Container,
    Grid,
    useColorMode,
} from '@chakra-ui/react';

import {Card} from '../theme/components/card';
import {Header} from '../theme/components/header';
import h from '../styles/globals.module.scss';

export async function getServerSideProps() {
    const response = await fetch('https://631ad617fae3df4dcfed3acd.mockapi.io/boxes');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {mockData: data}, // will be passed to the page component as props
    }
}

const Index = ( {mockData} ) => {

    const [loadVisible, setLoadVisible] = React.useState(25);
    const [inputTxt, setInputTxt] = React.useState('');


    const filtered = mockData.filter((item) => {
        return item[0].includes(inputTxt);
    });
    const handleNameChange = (inputTxt) => {
        setInputTxt(inputTxt);
    };
    const loadMore = () => {
        setLoadVisible((prev) => prev + 15);
    };
    return (
        <>
            <Header onChange={handleNameChange}/>
            <main className={h.main}>
                <Container maxW='1200px'>
                    <Grid templateColumns='repeat(5, 1fr)' gap={3} mb={12}>
                        {filtered.slice(0, loadVisible).map((item) => {
                            return (
                                <Card
                                    key={item[1]}
                                    data={item}
                                />
                            );
                        })}
                    </Grid>
                    <Button
                        border='1px' borderColor='#eaeaea'
                        w="100%"
                        onClick={loadMore} bg={useColorMode === 'white' ? 'black' : 'white'}
                        Style={loadVisible === filtered.length ? 'display:none' : ''}
                    >
                        {loadVisible === filtered.length ? 'Запрещено' : 'Загрузить еще 15'} 📦
                    </Button>
                </Container>
            </main>
        </>
    );
}

export default Index