import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mvonnnjp");
    if (state.succeeded) {
        alert("Thanks for reaching out!"); // might need to come back for this ..
    }
    return (
        <div className="contact-form-container">
            <div class="contact-form">
                <form onSubmit={handleSubmit}>
                    <div class="form-control">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="sender-name"
                            placeholder="Enter Your Name"
                            class="input-field"
                            required
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div class="form-control">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="sender-email"
                            placeholder="Enter Your Email"
                            class="input-field"
                            required
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div class="form-control">
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            cols="60"
                            rows="10"
                            placeholder="Enter Your Message"
                            name="message"
                            class="input-field"
                            required
                        ></textarea>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <input
                    type="submit"
                    value="Submit"
                    id="submit-btn"
                    class="submit-btn"
                    disabled={state.submitting}
                    />
                </form>
            </div>
        </div>
    )
}

export default ContactForm;