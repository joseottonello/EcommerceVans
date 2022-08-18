import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

const Item = lazy(() => import('../item/Item'));

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-auto-flow: dense;

    margin-top: 2rem;
    gap: 1rem;
    
    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(2, auto);
    }
`

const ItemList = ({props}) => {
    return (
        <Container>
            <Suspense fallback={
            <BeatLoader
                size={20}
                color="#c21010"
                cssOverride={{
                display: 'flex',
                justifyContent: 'center',
                margin: '15rem'
            }}
            />}>
                <Section>
                    {props.map((items) => (
                        <Item key={items.id} props={items} />
                    ))}
                </Section>
            </Suspense>
        </Container>
    )
}

export default ItemList