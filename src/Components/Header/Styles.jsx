import styled from "styled-components";

export const Content = styled.div`
    height: 120px;
    background-color: #004E64;
    display: flex;
    align-items: center;
    border-radius: 10px;
`

export const imgContent = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const Img = styled.img`
    width: 120px;
    margin: 20px;
`

export const nav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: auto;

    @media screen and (max-width: 700px) {
        display: none;
        position: absolute;
        top: 3.7rem;
        left: 0;
        width: 100%;
        background-color: var(--bgcolor);
        text-align: center;
`

export const headerRight = styled.div`
    font-size: 1rem;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.9rem;
    margin: 20px;
    cursor: pointer;

    @media screen and (max-width: 700px) {
        padding: 0.4rem;
    }
`

export const ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 50px;
    margin: 20px;
`

export const li = styled.li`
    cursor: pointer;
    color: #fff;
    font-family: "Poetsen One", sans-serif;
    font-weight: 600;
    font-style: normal;
    list-style: none;
    padding: 1.5rem;
`
