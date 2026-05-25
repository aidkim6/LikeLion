import {useState} from 'react';
import {signup} from "../api/userApi";

const SignupPage = () => {
    const [form, setForm] = useState({
        name:"",
        email:"",
        password:""

    });
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSignup = async () => {
        try {
            const res = await signup(form);
            alert(res.data.name + "님 회원가입 완료");

            setForm({
                name: "",
                email:"",
                password:""
            });
        }

        catch(error){
                alert("회원가입 실패");
                console.error(error)
            }

    };
    return (
    <div>
      <h1>회원가입</h1>

      <input name="name" value={form.name} onChange={handleChange}placeholder='이름'/>
       <input name="email" value={form.email} onChange={handleChange} placeholder='이메일'/>
       <input name="password" value={form.password} onChange={handleChange} placeholder='비밀번호' />
       <button onClick={handleSignup}>가입하기</button>
    </div>
  )
}

export default SignupPage
