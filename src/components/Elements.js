import styled from 'styled-components';
import './App.css'

export const Container = styled.div`
background-color: #000;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const Wrap = styled.div`
background: #1c1c1c;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: stretch;
  text-align: center;
  cursor: pointer;
  padding-bottom: 10px;
  transition: all 0.3s;
  
  span {
    margin-right: 2rem;
  }
`;

export const Dropdown = styled.div`
position: relative;
  background: #1c1c1c;
  color: #00ffb9;
  min-width: stretch;
  height: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;

export const AboutP = styled.p`
  font-family: var(--ff-secondary);
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
`;

export const AboutH1 = styled.h1`
    font-family:var(--ff-titles);
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 20px;
    padding: 2rem;

    @media screen and (max-width: 580px) {
        font-size: 1.3rem;

    }
`;
export const AboutH2 = styled.h2`
font-family:var(--ff-titles);
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 10px;
    padding: 1rem;

    @media screen and (max-width: 580px) {
        font-size: 1.0rem;

    }
`;