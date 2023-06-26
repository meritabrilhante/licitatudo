import styled from "styled-components";
import { ButtonProps, ButtonType } from "./Button.component";

const getButtonStyles = (buttonType: ButtonType) => {
  switch (buttonType) {
    case 'primary':
      return `
        background-color: var(--primary-green);
        drop-shadow: var(--base-shadow);

        &:hover {
          background-color: #096C27
        }
      `;
    case 'secondary':
      return `
        background-color: var(--primary-blue);
        drop-shadow: var(--base-shadow);
      `;
    case 'tertiary':
      return `
        background-color: transparent;
        border: 0.05rem solid var(--base-white);
      `;
  };
}

export const StyledButton = styled.button<ButtonProps>`
  color: var(--base-white);
  height: var(--medium);
  padding: var(--default);
  font-size: var(--font-size-small);
  font-weight: var(--semibold);
  border-radius: var(--border-radius-base);
  border: none;
  cursor: pointer;
  width: ${(props) => props.width};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  ${(props) => props.buttonType && getButtonStyles(props.buttonType)}
`;
