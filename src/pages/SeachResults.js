import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

function SeachResults() {
    const { query } = useParams();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        async function getSearch() {
            const api = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${query}`;
            let response = await fetch(api)
            response = await response.json();
            setSearchResult(response.results)
        }

        getSearch();
    }, [query])



    return (
        <div>
            <h1>SeachResults: {query}</h1>
            <Container>
                {searchResult.map((res) => {
                    return (
                        <div key={res.id}>
                            <img src={res.image} alt={res.title} />
                            <h3>{res.title}</h3>
                        </div>
                    )
                })}
            </Container>
        </div>
    )
}

export default SeachResults

const Container = styled.div`
    display:  grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 40px;

    & > div {
        text-align: center;
    }
`