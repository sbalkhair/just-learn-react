import { useState, type MouseEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");

  const [errorEmail, setErrorEmail] = useState("");

  const [errorPassword, setErrorPassword] = useState("");

  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (userName.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("User name must be at least 8 characters long");
      setUserColor("red");
      return;
    }

    if (email.includes("@gmail") && email.includes(".")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email must contain '@' and '.'");
      setEmailColor("red");
      return;
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be  8 characters long");
      setPasswordColor("red");
      return;
    }

    if (password != "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Confirm password must match the password");
      setConfirmPasswordColor("red");
      return;
    }

    alert("Form submitted successfully!");
  };
  return (
    <div className='flex items-center justify-center h-screen bg-cyan-950'>
      <div className='bg-white w-full m-4 p-8 max-w-3xl rounded-3xl'>
        <form className='flex flex-col space-y-4'>
          <div>
            <Input type='text' placeholder='Name' style={{ borderColor: userColor }} value={userName} onChange={(e) => setUserName(e.target.value)} />
            <p className='text-red-500'>{errorUserName}</p>
          </div>

          <div>
            <Input type='text' placeholder='Email' style={{ borderColor: emailColor }} value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className='text-red-500'>{errorEmail}</p>
          </div>

          <div>
            <Input type='password' placeholder='Password' style={{ borderColor: passwordColor }} value={password} onChange={(e) => setPassword(e.target.value)} />
            <p className='text-red-500'>{errorPassword}</p>
          </div>

          <div>
            <Input
              type='password'
              placeholder='Confirm Password'
              style={{ borderColor: confirmPasswordColor }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className='text-red-500'>{errorConfirmPassword}</p>
          </div>
          <Button className='uppercase' onClick={validate}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
