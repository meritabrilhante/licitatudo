import { StyledContainer } from "./Container";

export interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return(
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

export default Container;
