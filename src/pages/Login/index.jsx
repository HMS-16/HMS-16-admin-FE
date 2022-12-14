import { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./login.module.css";
import Modal from "../../components/Modal";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../store/features/auth/authSlicer";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showModal, setShowModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    handleSubmit();
    dispatch(fetchAuth({ email: username, password: password }));
  };

  return (
    <>
      <div className={showModal ? style.overlayLogin : ""}></div>
      <Modal handleModal={handleModal} showModal={showModal} />
      <div className={style.loginLayout}>
        <div className={style.heroInfoLogin}>
          <div className={style.loginVector}></div>
          <h3>Appointment & Schedule as per your convinience</h3>
        </div>
        <div className={style.formLayout}>
          <div className={style.logoLogin}></div>
          <h4>Sign In</h4>
          <form onSubmit={handleSubmitLogin} action="" className={style.formLoginBox}>
            <label htmlFor="">Username</label>
            <input
              {...register("username", {
                required: "Username can not be empty",
              })}
              type="text"
              name="username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <p
              style={{
                position: "absolute",
                marginTop: "6.3em",
                textAlign: "left",
                color: "red",
                marginBottom: 0,
              }}
            >
              {errors.username?.message}
            </p>

            <label htmlFor="">Password</label>
            <input
              {...register("password", {
                required: "Password can not be empty",
                minLength: {
                  value: 2,
                  message: "Pasword length can't be less than 8 char",
                },
              })}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              id=""
            />
            <p
              style={{
                position: "absolute",
                marginTop: "12.5em",
                textAlign: "left",
                color: "red",
                marginBottom: 0,
              }}
            >
              {errors.password?.message}
            </p>

            <div className={style.confirmSection}>
              <div>
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
              </div>
              <button onClick={handleModal}>Forgot Password ?</button>
            </div>
            <input className={style.signInBtn} type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
