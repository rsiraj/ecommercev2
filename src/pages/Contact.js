import React from 'react'

const Contact = () => {
    return (
        <div className="wrapper">
                <section className="contact">
                    <div className="form-box">
                        <h2 className="text-main">Contact Us</h2>
                        <form action="/contact.php">
                            <div className="form-item">
                                <label for="name">Your Name:</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" required />
                            </div>
                            <div className="form-item">
                                <label for="email">Your E-mail:</label>
                                <input type="email" name="email" id="email" placeholder="example@email.com" required />
                            </div>
                            <div className="form-item">
                                <label for="email">Your Phone Number:</label>
                                <input type="text" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                </div>
                            <div className="form-item">
                                <label for="message">Please leave a detailed message:</label>
                                <textarea name="message" id="message" cols="30" rows="7" placeholder="Please send us comments, suggestions, requests, and custom orders." required></textarea>
                            </div>
                            <div className="form-item">
                                <input type="submit" value="Submit" id="submit" />
                            </div>
                        </form>
                    </div>
                </section>
        </div>
    )
}

export default Contact