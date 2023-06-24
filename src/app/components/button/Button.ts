import styled from "styled-components";

export type StyledButtonProps = {
  type?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
  color: var(--base-white);
  height: var(--medium);
  padding: var(--default);
  font-size: var(--font-size-small);
  font-weight: var(--semibold);
  border-radius: var(--border-radius-base);
  border: none;
  cursor: pointer;
  ${(props) => props.type && getButtonStyles(props.type)}
`;

const getButtonStyles = (type: string) => {
  switch (type) {
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
