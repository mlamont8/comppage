import React from "react";
import Layout from "../components/Layout.js";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      comments: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Layout>
        <section className="contactHead">
          <h1>We'll Love To Hear From You</h1>
          <p>
            We've done some amazing things for our clients. Let us do something
            much better for you.
          </p>
          <address>
            Our Company
            <br />
            123 Address Lane <br />
            Someplace, St 00000
            <br />
            (999)999-9999
          </address>
        </section>

        <section className="inputForm">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">name</label>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />

            <label htmlFor="company">company</label>
            <input
              name="company"
              type="text"
              value={this.state.company}
              onChange={this.handleChange}
            />
            <br />

            <label htmlFor="email">email</label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />

            <label htmlFor="comments">comments</label>
            <input
              name="comments"
              type="text"
              value={this.state.comments}
              onChange={this.handleChange}
            />
            <button type="submit" value="Submit" />
          </form>
        </section>
      </Layout>
    );
  }
}

export default ContactUs;
