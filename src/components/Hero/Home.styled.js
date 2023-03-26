import styled from "styled-components";

export const HeroDiv = styled.div`
height: 100%;
background-color: ${({theme})=> theme.colors.darkgray};
color: ${({theme})=> theme.colors.white};
font-family: ${({ theme }) => theme.fonts[2]};
`;

export const IntroSection = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  height: fit-content;
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.darkgray};
  font-family: ${({ theme }) => theme.fonts[2]};

  div {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    color: white;
    font-size: 90px;
    font-weight: 500;
    line-height: .8;
    font-family: ${({ theme }) => theme.fonts[1]};
  }

  p {
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    line-height: 126.5%;
    padding: 1.5rem 0;
  }

  img {
    width: 400px;
    height: 500px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    box-shadow: 0px -3px 2px 15px #3e424a;
  }
`;

export const About = styled.section`
padding-top: 2rem;
background: ${({ theme }) => theme.colors.lightpink};
`;

export const Contact = styled.div`
  flex-direction: row;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  width: auto;
`;

export const Story = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap;
justify-content: space-evenly;
    width: 100%;
    margin-top: 51px;
.left-side{
    & img{
        width: 427px;
    }
}
.right-side{
    text-align: initial;
    width: 369px;
}
.start-to-end{
    display: flex;
    flex-direction: row;
   
    gap:10px;
}
h4 {
    margin:0;
    font-family: ${({ theme }) => theme.fonts[1]};
    font-weight: 600;
    font-size: 18px;
}
p{
  margin-top: 0.6em;
  font-family: ${({ theme }) => theme.fonts[2]};
  font-size: 16px;
  color:#4A4A4A;
}
`;

export const Pattern = styled.img`
  width: 11rem;
  position: relative;
  left: -40px;
  top: -40px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.darkblue};
  color: ${({ theme }) => theme.colors.white};
`;

export const DIV = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  .right-side {
    text-align: start;
    p {
        margin-top: 0.4em;
        font-family: ${({ theme }) => theme.fonts[2]};
        font-size: 12px;
        color:#4A4A4A;
    }
    h7{
      font-family: ${({ theme }) => theme.fonts[1]};
      font-weight: 500;
    }
  }
`;



export const Menu = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3em;
  justify-content: center;
  margin-top: 2em;
  .left-side{
    width: 30%;
    text-align: initial;

    img{
      width: 19em;
    }
    
    h6{
      font-size: 1.2rem;
      font-family: ${({ theme }) => theme.fonts[2]};
      border-top: 1px solid ${({ theme }) => theme.colors.softorange};
      border-bottom: 1px solid ${({ theme }) => theme.colors.softorange};
      width: fit-content;
      margin: 0;
    }
    
  }
  .right-side{
    text-align: initial;
    width: 40%;
   
    .item{
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: ${({ theme }) => theme.fonts[1]};
     
      h5{
        margin:0;
        color: #292E36;
      }
    }
    img{
      width:5em;
      border-radius: 50%;
    }
    
  }
  p {
    font-size: 0.9rem;
    font-family: ${({ theme }) => theme.fonts[2]};
    color: #555555;
    margin: 0;
  }

  h4{
    font-size: 1.3rem;
    font-family: ${({ theme }) => theme.fonts[2]};
    font-weight: 600;
    margin:0;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: #292E36;
  }
  `;