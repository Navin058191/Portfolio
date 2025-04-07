import React from "react";


const Contact = () => {
 
    return (
    <main>
        <section id="contact-heading">
            <div>
                <h1 style={{color: "#E34234"}}>Contact Me📩</h1>
                <p>Regarding My Profile and Qualification, I am an Immediate Joiner <br />
                   For Futher Step Contact me...
                </p>
            </div>
        </section>
        <section id="contact-info">
            <div>
                <h1 style={{color: "#E34234"}}>Address</h1>
                <h2>No.61 4th Palaniyappa Nagar, <br />
                    thapalpetti Madhavaram <br />
                    Chennai 600 060
                </h2>
            </div>
            <div>
                <h1 style={{color: "#E34234"}}>Phone</h1>
                <h2>6382479891</h2>
            </div>
            <div>
                <h1 style={{color: "#E34234"}}>Email</h1>
                <h2>navinnavin1412@gmail.com</h2>
            </div>
        </section>
        <section id="contact-message" >
            <form className="message-db">
                <label for = "name"></label>
                <input className="enter" type="text" placeholder="Enter your Name" name="name" required></input>
                <label for = "Email" ></label>
                <input className="enter" type="text" placeholder="Enter your Email-Id" name="Email-Id" required></input>
                <label for = "name" ></label>
                <input className="enter" type="text" placeholder="Enter your Message" name="Message" required></input>
                <button className="contact-btn">Send</button>
            </form>
        </section>
    </main>
)
}

export default Contact