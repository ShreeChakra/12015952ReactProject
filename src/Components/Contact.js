import React from 'react'
import { useState } from 'react'
import '../Styles/Contact.css'
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [complaint, setComplaint] = useState('');
    const [errors, setErrors] = useState({});
    // here useState is used to keep a track of the state of the component
    const validate = () => {
        //if name is empty it will shoe required.
        let errors = {};
        if (!name.trim()) {
            errors.name = 'Name is required';
        }
        //if email provided is not in the right form, it will remind the user to fill in correct form
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }
        //if complaint field is empty it shows content required
        if (!complaint.trim()) {
            errors.complaint = 'Complaint is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length) {
            setErrors(errors);
            return;
        }
        // Here you can submit the form data to your backend or API
        console.log('Form submitted with data:', { name, email, complaint });
        setName('');
        setEmail('');
        setComplaint('');
        setErrors({});
    };

    return (

        <div className='container'>
            <h2>Please be patient, if you have any queries or complaints fill the form provided below. Our customer support will reach you via the mail provided. Thank You.</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name" className='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="complaint">Complaint:</label>
                    <textarea
                        id="complaint"
                        className="complaint"
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                    ></textarea>
                    {errors.complaint && <span className="error">{errors.complaint}</span>}
                </div>
                <button className='button' type="submit">Submit</button>
            </form>
        </div>

    );
}

export default Contact