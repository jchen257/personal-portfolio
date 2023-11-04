import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                action="https://getform.io/f/bf741446-f2c9-4116-bc5f-f014df64d8a0"
                method="POST"
                className="flex flex-col w-full md:w-7/12"
            >
                <Title>Contact</Title>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-2 bg-transparent
                    border-2 rounded-md
                    focus:outline-none"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="my-2 p-2 bg-transparent
                    border-2 rounded-md
                    focus:outline-none"
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    className="p-2 mb-4 bg-transparent border -2 rounded-md focus:outline">
                </textarea>
                <button
                    type="button"
                    className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-sky-600 drop-shadow--md hover:bg-sky-800">
                        Work With Me!
                </button>
            </form>
            </div>
        </div>
    )
}

export default Contact;