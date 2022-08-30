import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

function Search() {
    const navigate = useNavigate();
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate(`/search/${input}`)
        setInput('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Search recipe" name="search" value={input} onChange={handleChange} />
        </form>
    )
}


const Input = styled.input`
    background: #333;
    color: #fff;
    width: 400px;
    border-radius: 5px;
    height: 40px;
    padding: 0 10px;
`
export default Search