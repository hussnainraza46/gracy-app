import React, { useState } from "react";
import Login from "../components/Login";
import Captcha from "../components/Captcha";
import SuccessScreen from "../components/SuccessScreen";

function LoginForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full h-screen bg-cover bg-center flex items-center "
      style={{ backgroundImage: "url('/bg-image.png')" }}>
      {step === 1 && <Login onSuccess={() => setStep(2)} />}
      {step === 2 && <Captcha onVerify={() => setStep(3)} />}
      {step === 3 && <SuccessScreen />}
    </div>
  );
}

export default LoginForm;
