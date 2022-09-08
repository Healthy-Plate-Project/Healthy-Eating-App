import styled from "styled-components";


export const S = {
    List: styled.div`
        width: 100%;
        border: 1px solid yellow;
        border-radius: 1rem;
        display: flex;
        position: relative;
    `,
    ListImage: styled.img`
        border-radius: .5rem;
        width: 100%;
    `,
    ListBody: styled.div`
        padding: 1rem;
    `,
    ListTitle: styled.h2`
        font-size: 1.5rem;
        margin: 0 0 1rem;
    `,
    ListText: styled.p`
        font-size: 1rem;
         /* margin: 0; */
        overflow: hidden;
    `,
    ListLink: styled.a`
        font-size: 1.25rem;
        color: #d8d8d8;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        transition: background-color 0.2s ease-in, border-color 0.2s ease-in;
        
        &:hover,
        &:focus {
            background-color: #0a5dd6;
            border-color: #0957c9;
        }
    `,
}
