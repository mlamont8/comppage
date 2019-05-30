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
          <h1>We'd Love To Hear From You</h1>
          <p>
            We've done some amazing things for our clients. Let us do something
            better for you.
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
            <ul className="wrapper">
              <li className="formRow">
                <label htmlFor="name">name</label>
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </li>

              <li className="formRow">
                <label htmlFor="company">company</label>
                <input
                  name="company"
                  type="text"
                  value={this.state.company}
                  onChange={this.handleChange}
                />
              </li>

              <li className="formRow">
                <label htmlFor="email">email</label>
                <input
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </li>

              <li className="formRow">
                <label htmlFor="comments">comments</label>
                <textarea
                  name="comments"
                  cols="40"
                  rows="10"
                  type="text"
                  value={this.state.comments}
                  onChange={this.handleChange}
                />
              </li>

              <li className="formRow">
                <button type="submit" value="Submit">
                  Submit
                </button>
              </li>
            </ul>
          </form>
        </section>

        <style jsx>
          {`
            .contactHead {
              text-align: center;
              padding: 0 30%;
            }
            h1 {
              font-size: 3.2rem;
            }

            .contactHead p {
              font-size: 2rem;
              color: #828282;
            }

            .wrapper {
              list-style-type: none;
              padding: 5em 10em;
              border-radius: 3px;
              background-color: #f5f5f5;
              color: #828282;
              font-size: 1.2em;
            }

            .formRow {
              display: flex;
              justify-content: flex-end;
              padding: 0.5em;
            }

            .formRow label {
              padding: 0.5em 1em 0.5em 0;
              flex: 1;
              text-transform: uppercase;
            }

            .formRow input {
              flex: 2;
            }

            .formRow input,
            .formRow button {
              padding: 0.5em;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default ContactUs;
