import '../css/contact.css'

export default function contact(){
    return(
        <>
        <nav id="cart-nav">
      <ul id="nav-list">
        <li>
        <img src="logo.png" height="40px" width="120%"/>
        </li>
        <li id="right-item">
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
        <div id="contact-details">
        <h2 id ='heading'>Get In Touch</h2>
        <div id="details">
            <div id="address">
                <img src="add.png" id="ad" />
                <p>Address: FoodCart <br /> New Delhi <br /> India-100001</p>
            </div>

            <div id='phone'>
                <img src="phone.png" id="ph" />
                <p>Phone: +91 9990099900 <br /> Landline: +912 1122455</p>
            </div>

            <div id='email'>
                <img src="email.png" id="em" />
                <p>Email: FoodCart@gmail.com</p>
            </div>
        </div>
        
        
        </div>
        </>
    )
}