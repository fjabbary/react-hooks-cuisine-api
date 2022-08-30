import React from 'react'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import styled from 'styled-components'
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <Container>
                <Section>
                    <Popular />
                </Section>
                <Section>
                    <Veggie />
                </Section>
            </Container>
        </motion.div>
    )
}

export default Home

const Container = styled.div`
    width: 80%;
    margin: 40px auto;

`
const Section = styled.section`
    margin: 60px 0;
`