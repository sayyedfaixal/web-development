import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [isNumberAllowed, setisNumberAllowed] = useState(true);
  const [isCharacterAllowed, setisCharacterAllowed] = useState(true);
  const [passwordLength, setpasswordLength] = useState(6);
  const passwordReference = useRef(null);

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    passwordReference.current?.select();
    alert("Password Copied");
    // console.log(passwordReference.current.value);
  };
  useEffect(() => {
    generatePassword();
  }, [isNumberAllowed, isCharacterAllowed, passwordLength]);
  const generatePassword = () => {
    let password = "";
    let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) {
      passwordString += "0123456789";
    }
    if (isCharacterAllowed) {
      passwordString += "~!@#$%^&*()_+{}[]?/<>";
    }
    for (let index = 0; index < passwordLength; index++) {
      let randomIndex = Math.floor(Math.random() * passwordString.length + 1);
      password += passwordString.charAt(randomIndex);
    }
    setPassword(password);
  };

  return (
    <div className="flex flex-col items-center my-2">
      <h2 className="text-lime-400 text-2xl m-4 p-4 bg-green-700 rounded-xl">
        Your Password
      </h2>
      <div className="flex border-2 rounded-xl border-green-200 text-red-500 font-bold">
        <input
          className="m-4 p-4 w-72 rounded-xl"
          type="text"
          name="your password"
          placeholder="w123fsdi^&8"
          value={password}
          id="password-field"
          readOnly
          ref={passwordReference}
        />
        <button
          className="m-4 p-4 rounded-xl bg-blue-500 text-white"
          onClick={copyPasswordToClipBoard}
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col m-4 w-64 bg-orange-400 rounded-lg">
        <div>
          <input
            className="my-2 cursor-pointer mx-2 px-2 "
            type="checkbox"
            name="number"
            id="number"
            defaultChecked={isNumberAllowed}
            onChange={() => {
              setisNumberAllowed((prevNumberValue) => !prevNumberValue);
            }}
          />
          <label className="text-center px-2" htmlFor="number">
            Number
          </label>
          <input
            className="my-2 cursor-pointer mx-2 px-2"
            type="checkbox"
            name="character"
            id="character"
            defaultChecked={isCharacterAllowed}
            onChange={() => {
              setisCharacterAllowed((prevCharValue) => !prevCharValue);
            }}
          />
          <label className="text-center px-2" htmlFor="character">
            Character
          </label>
        </div>
        <input
          className="m-2 cursor-pointer "
          type="range"
          name="range"
          id="range"
          min={6}
          max={100}
          value={passwordLength}
          onChange={(e) => {
            setpasswordLength(e.target.value);
          }}
        />
        <label className="flex justify-center">Length - {passwordLength}</label>
      </div>
    </div>
  );
};

export default App;
