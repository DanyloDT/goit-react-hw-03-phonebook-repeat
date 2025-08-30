import { Component } from 'react';
import { StyledBtnAdd, StyledForm, StyledInput } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.handleAddContact(name, number);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledInput
          type="text"
          name="name"
          value={name}
          required
          onChange={this.handleChange}
        />
        <StyledInput
          type="tel"
          name="number"
          value={number}
          required
          onChange={this.handleChange}
        />
        <StyledBtnAdd>Add</StyledBtnAdd>
      </StyledForm>
    );
  }
}
