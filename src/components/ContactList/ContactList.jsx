import { StyledBtnDelete, StyledItem, StyledList } from './ContactList.styled';

export const ContactList = ({ filteredData, handleDelete }) => {
  return (
    <StyledList>
      {filteredData.map(({ id, name, number }) => (
        <StyledItem key={id}>
          <span>
            {name}: {number}
          </span>
          <StyledBtnDelete type="button" onClick={() => handleDelete(id)}>
            Delete
          </StyledBtnDelete>
        </StyledItem>
      ))}
    </StyledList>
  );
};
