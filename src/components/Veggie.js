import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const localVeggie = JSON.parse(localStorage.getItem('veggie'));

            if (localVeggie) {
                setVeggie(localVeggie)
            } else {
                let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&diet=vegetarian`);

                response = await response.json();
                localStorage.setItem('veggie', JSON.stringify(response.results))
                setVeggie(response.results)
            }
        }

        fetchData();
    }, [])

    const options = {
        arrows: false,
        perPage: 4,
        gap: '1rem'
    }

    return (
        <div>
            <h1>Veggie Recipes</h1>
            <Splide options={options}>
                {veggie.map(recipe => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <img src={recipe.image} alt={recipe.title} />
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

export default Veggie;

const Card = styled.div`
    border-radius: 5px;

    & > img {
        border-radius: 5px;
        height: 100%;
    }
`