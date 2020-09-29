import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey('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')

const msg = {
  to: 'kevinthomas441@gmail.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}


class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: {
                to: 'kevinthomas441@gmail.com',
                subject: '',
                from: '',
                text: '',
                html: '<strong>and easy to do anywhere, even with Node.js</strong>'
            },
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [msg.subject]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        sgMail.send(this.state.msg)
        .then(() => {
            console.log('Email sent')
          })
          .catch((error) => {
            // console.error(error)
          })

        //  Axios.post('http://localhost:3030/api/email', this.state)
        //     .then(res => {
        //         if(res.data.success) {
        //             this.setState({
        //                 disabled: false,
        //                 emailSent: true
        //             });
        //         } else {
        //             this.setState({
        //                 disabled: false,
        //                 emailSent: false
        //             });
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err);

        //         this.setState({
        //             disabled: false,
        //             emailSent: false
        //         });
        //     })

    }


    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }

}

export default ContactPage;