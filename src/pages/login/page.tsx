import { LoginStatus } from "@/states/store";
import { useFormik } from "formik";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export function Login() {
  const [loginInfo, setIsLoginInfo] = useAtom(LoginStatus);
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져오는 훅

  const formik = useFormik({
    initialValues: {
      userName: "",
      userPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Username is required"),
      userPassword: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      alert("로그인");
      console.log(values);
      if (values.userName === "incerpay" && values.userPassword === "1234") {
        setIsLoginInfo({
          isLoggedIn: true,
          roll: "superUser",
          user: {
            name: "",
            email: "",
          },
        });
        navigate("/");
      } else if (values.userName !== "" && values.userPassword !== "") {
        setIsLoginInfo({
          isLoggedIn: true,
          roll: "user",
          user: {
            name: "",
            email: "",
          },
        });
        navigate("/");
      }
    },
  });

  useEffect(() => {
    if (loginInfo.isLoggedIn === true) {
      navigate("/");
    }
  }, [loginInfo.isLoggedIn, navigate]);

  return (
    <div className="flex h-screen justify-center items-center bg-sketch">
      <div className="p-8 rounded-lg shadow-lg bg-white/90 w-[320px] h-[320px] sm:w-[480px] sm:h-[340px] md:w-[520px] md:h-[340px]">
        <h1 className="text-center text-2xl font-handwritten mb-6">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              name="userName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              placeholder="Username"
              className="w-full border-2 border-black text-black bg-transparent focus:ring-0 font-handwritten"
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.userName}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <Input
              type="password"
              name="userPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userPassword}
              placeholder="Password"
              className="w-full border-2 border-black text-black bg-transparent focus:ring-0 font-handwritten"
            />
            {formik.touched.userPassword && formik.errors.userPassword ? (
              <div className="text-red-500 text-sm">
                {formik.errors.userPassword}
              </div>
            ) : null}
          </div>
          <div className="text-center">
            <Button
              type="submit"
              className="font-[600] text-black w-full border-2 border-black bg-green-300 hover:bg-green-400 font-handwritten"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
