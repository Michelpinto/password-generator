import styled from "styled-components";

export const CardContent = styled.div`
    width: 35rem;
    height: 50rem;
    background-color: #1f1f1f;
    box-shadow: 0px 0px 34.5px -10px #3be291;

    display: flex;
    flex-direction: column;
    padding: 3rem;
    border-radius: 5px;
`;

export const Title = styled.h1`
    margin: 3rem;
    align-self: center;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Option = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const FormDiv = styled.div`
    width: 29rem;
    height: 4rem;
    background-color: #194731;
    border-radius: 5px;
    margin-bottom: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
`;

export const PassW = styled.div`
    width: 23rem;
    background-color: #194731;
    border: none;
    font-size: 1.5rem;
    color: #ebebeb;
`;

export const Icon = styled.button`
    font-size: 2.25rem;
    cursor: pointer;
    border: none;
    background: none;
    color: #ebebeb;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    align-self: center;
`;

export const Input = styled.input`
    width: 4rem;
    height: 2.5rem;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 5px;
    font-size: 1rem;
    background-color: #3be291;
    cursor: pointer;
`;

export const Button = styled.button`
    height: 4rem;
    border: none;
    border-radius: 5px;
    background-color: #3be291;
    color: #1f1f1f;
    font-size: 1.5rem;
    margin-top: 2rem;
    cursor: pointer;
`;
