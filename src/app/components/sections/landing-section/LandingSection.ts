import styled from "styled-components";

export const StyledLandingSection = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
  padding: 8rem 0;

  b {
    color: var(--primary-green)
  }

  p {
    width: 95%
  }

  section {
    display: flex;
    gap: 2rem;
    align-items: left;
  }
`;

export const StyledBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;


