import "../css/login.css";
import { login } from './auth';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const handleLogin = async(e:any) => {
    e.preventDefault();
    try {
      const response = await login(formData.username, formData.password);
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
      navigate("/show-products");
    } catch (err:any) {
      console.error(err.response.data.message);
      alert(err.response.data.message)
    }
    
  };
  return (
    <>
      <div id="home">

        <div id="info">
          <h2>Fulfil Your Cravings with mouthwatering food options deliverd at your door steps.</h2>
          <h3 id="coupon" >GET 20% OFF ON YOUR FIRST ORDER AND 10% OFF ON NEXT. <br /> Use Coupon Code : FIRST20</h3>
        </div>

        <div className="login-page">
          <div className="form">
            <form className="login-form" onSubmit={handleLogin}>
              <input 
              type="text" 
              value={formData.username}
              placeholder="Username"
              onChange={(e)=> setFormData({...formData, username:e.target.value})} 
              />
              <input 
              type="password" 
              value={formData.password}
              placeholder="Password" 
              onChange={(e)=> setFormData({...formData, password:e.target.value})}
              />
              <button type="submit">login</button>
              <p className="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
