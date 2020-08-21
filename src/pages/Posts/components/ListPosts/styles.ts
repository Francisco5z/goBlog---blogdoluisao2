import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 200px;

  padding: 10px 10px 0 15px;

  border-radius: 4px;

  background-color: ${props => props.theme.colors.secundaryBackground};

  margin-bottom: 15px;
  div:not(.thumbnail-container) {
    h1 {
      font-size: 2rem;

      margin-bottom: 5px;

      max-width: 410px;
    }

    span.categories {
      font-size: 1.8rem;

      color: ${props => props.theme.colors.subTitle};
    }

    span:not(.categories) {
      display: flex;

      margin-top: 110px;

      font-size: 1.3rem;

      color: ${props => props.theme.colors.subTitle};
    }
  }
`;


export const Thumbnail = styled.div<{ image: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 280px;

  background-position: center;
  background-image: url(${props => props.image});
  background-clip: content-box;

  width: 100%;
  height: 100%;

  img {
    display: none;
    max-width: 300px;
  }
`; 