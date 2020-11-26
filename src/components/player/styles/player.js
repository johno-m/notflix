import styled from 'styled-components'

export const Container = styled.div`
`

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 20px;
`

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;
    
    video {
        height: 100%;
        width: 100%;
    }
`

export const Close = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 26px;
    height: 26px;
    opacity: 1;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: 0.3s;
    transform: rotate(45deg);
    border-radius: 13px;
    
    &:hover {
        opacity: 1;
    }
    
    &:before,
    &:after {
        position: absolute;
        left: 12px;
        top: 3px;
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: white;
    }
    
    &:after {
        transform: rotate(90deg);
    }

    &:hover {
        transform: rotate(135deg);
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
        background-color: red;
    }
    
`

export const Button = styled.button`
    background-color: #e50914;
    border-color: #ff0a16;
    width: 115px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: 18px;
    height: 45px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    
    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }
`