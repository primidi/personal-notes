import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        id: props.length + 1,
        title: '',
        body: '',
        archived: false,
        createdAt: new Date().toISOString(),
      },
      titleLength: 50,
    };

    this.onTitleInput = this.onTitleInput.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleInput(e) {
    const { value, maxLength } = e.target;
    this.setState({
      titleLength: maxLength - value.length,
    });
  }

  onChangeInput(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      note: {
        ...prevState.note,
        [name]: value,
      },
    }));
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.note);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p className="note-input__title__char-limit">
          Sisa Karakter: {this.state.titleLength}
        </p>
        <input
          required
          type="text"
          name="title"
          id="title"
          placeholder="Ini adalah judul ..."
          maxLength={50}
          value={this.state.title}
          onInput={this.onTitleInput}
          onChange={this.onChangeInput}
        />
        <textarea
          required
          name="body"
          id="body"
          cols="30"
          rows="10"
          placeholder="Tuliskan catatanmu di sini ..."
          value={this.state.body}
          onChange={this.onChangeInput}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}
