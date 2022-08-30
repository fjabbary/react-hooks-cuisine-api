import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const localPopular = JSON.parse(localStorage.getItem('popular'));

            if (localPopular) {
                setPopular(localPopular)
            } else {
                let response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
                response = await response.json();
                localStorage.setItem('popular', JSON.stringify(response.recipes))
                setPopular(response.recipes)
            }
        }

        fetchData();
    }, [])

    const options = {
        arrows: false,
        perPage: 3,
        width: 1200
    }

    return (
        <div>
            <h1>Popular Recipes</h1>
            <Splide options={options}>
                {popular.map(recipe => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}>
                                <Card>
                                    <img src={recipe.image} alt={recipe.title} />
                                </Card>
                            </Link>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

export default Popular

const Card = styled.div`
    height: 200px;
    border-radius: 5px;

    & > img {
        border-radius: 5px;
        height: 100%;
    }
`