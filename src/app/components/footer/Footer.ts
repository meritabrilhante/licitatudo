import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    width: 70%;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;