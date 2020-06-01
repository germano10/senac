import styled from "styled-components";

export const Container = styled.div`
    width: 600px;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background-color: #EEE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: calc(50% - 300px);
    border-radius: 5px;
    margin-top: 5%;
    box-shadow: 0px 0px 5px 0.5px #9E9E9E;

    h3{
        text-align: center;
        border-bottom: 1px solid #CCC;
        padding-bottom: 10px;
        text-transform: uppercase;
    }

    @media (max-width: 767px) {
        width: 100%;
        margin-left: 0;
        border-radius: 0px;
        margin-top: 1%;
    }
    @media (max-width: 400px) {
        width: 100%;
        margin-left: 0;
        border-radius: 0px;
        margin-top: 1%;
    }
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    border: none;
    margin-bottom: 10px;
    height: 25px;
    background-color: #CCC;
    padding: 10px;
    color: #000;
    font-weight: bold;
`;

export const Textarea = styled.textarea`
    border: none;
    margin-bottom: 10px;
    height: 25px;
    background-color: #CCC;
    padding: 10px;
    color: #000;
    font-weight: bold;
`;

export const Button = styled.button`
    margin-bottom: 10px;
    height: 25px;
`;
