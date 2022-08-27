import styled from 'styled-components';

export const Contact = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 4px;
  line-height: 1.4em;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ContactName = styled.span`
  max-width: 42%;
  flex-basis: 42%;
  margin-right: 10px;
  font-weight: 600;
  overflow-wrap: break-word;
`;

export const ContactNumber = styled.span`
  max-width: 35%;
  overflow-wrap: break-word;
`;
export const EditButton = styled.button`
  position: absolute;
  right: 20%;
  top: 50%;
  padding: 4px 8px;
  transform: translate(0, -50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms;
  &:focus {
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    outline: 1px solid #1e90ff;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  }
  &:active {
    outline: none;
    background-color: #1e90ff;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
      rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  }
`;

export const DelButton = styled(EditButton)`
  right: 0;
`;
