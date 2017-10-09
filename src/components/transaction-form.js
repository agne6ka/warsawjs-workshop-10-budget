import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './input';

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      value: '',
      date: '',
      category: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, item) {
    this.setState({ [key]: item });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { description, value, date, category } = this.state;

    this.props.onSubmit({
      description,
      value,
      date,
      category
    })
  }

  render() {
    const { description, value, date, category } = this.state;

    return(
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>Add transaction</h1>
        <Input name='description'
               type='text'
               placeholder='description'
               value={description}
               onChange={this.handleChange}/>
        <Input name='value'
               type='number'
               placeholder='value'
               value={value}
               onChange={this.handleChange}/>
        <Input name='date'
               type='text'
               placeholder='date'
               value={date}
               onChange={this.handleChange}/>
        <Input name='category'
               type='text'
               placeholder='category'
               value={category}
               onChange={this.handleChange}/>
        <input type="submit" value="OK"/>
      </form>
    )
  }
}

TransactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TransactionForm;