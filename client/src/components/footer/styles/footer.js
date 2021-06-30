import styled from 'styled-components';


export const Container = styled.div`
  padding: 80px 60px;
  background: #000080;
 
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 2000px;
    margin: 0 auto;
    
`
export const icons = styled.div`
  alignItems:center;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 150px;
`;

export const Row = styled.div`
display: flex;  
flex:1;
flex-direction: row;
width: 100%;
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  &:hover {
      color: #ff0000;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;