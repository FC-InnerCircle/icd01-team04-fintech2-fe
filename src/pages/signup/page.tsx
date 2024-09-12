import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export function Signup() {
  const [fileName, setFileName] = useState(null);

  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
      shopName: "",
      label: "",
      file: null, // 파일을 저장할 필드
    },
    validationSchema: Yup.object({
      userId: Yup.string().required("아이디가 필요합니다."),
      password: Yup.string().required("패스워드가 필요합니다."),
      shopName: Yup.string().required("상표가 필요합니다."),
      label: Yup.string().required("라벨이 필요합니다."),
      file: Yup.mixed().required("파일이 필요합니다."),
    }),
    onSubmit: (values) => {
      alert("회원가입 성공");
      console.log(values);
    },
  });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    formik.setFieldValue("file", file);
    setFileName(file.name);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div className="min-w-[360px] flex h-screen justify-center items-center bg-sketch">
      <div className="p-8 rounded-lg shadow-lg bg-white/90 w-[320px] sm:w-[480px] md:w-[520px]">
        <h1 className="text-center text-2xl font-handwritten mb-6">Signup</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="font-handwritten text-lg mb-2 block">
              아이디
            </label>
            <Input
              type="text"
              name="userId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userId}
              placeholder="아이디를 입력해주세요."
              className="w-full border-2 border-black text-black bg-transparent focus:ring-0 font-handwritten"
            />
            {formik.touched.userId && formik.errors.userId ? (
              <div className="text-red-500 text-sm">{formik.errors.userId}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="font-handwritten text-lg mb-2 block">
              패스워드
            </label>
            <Input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="패스워드를 입력해주세요."
              className="w-full border-2 border-black text-black bg-transparent focus:ring-0 font-handwritten"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="font-handwritten text-lg mb-2 block">상표</label>
            <Input
              type="text"
              name="shopName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shopName}
              placeholder="상표를 입력해주세요."
              className="w-full border-2 border-black text-black bg-transparent focus:ring-0 font-handwritten"
            />
            {formik.touched.shopName && formik.errors.shopName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.shopName}
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="font-handwritten text-lg mb-2 block">
              사업자 등록증
            </label>
            <div
              {...getRootProps()}
              className="w-full h-40 border-2 border-black bg-gray-100 flex justify-center items-center cursor-pointer"
            >
              <input {...getInputProps()} />
              <span className="font-handwritten text-lg text-black">
                {fileName ? (
                  `파일: ${fileName}`
                ) : (
                  <Fragment>
                    <p>사업자 등록증을 업로드해주세요.</p>
                    <p>(허용 파일 형식: JPG, PNG, PDF)</p>
                  </Fragment>
                )}
              </span>
            </div>
            {formik.touched.file && formik.errors.file ? (
              <div className="text-red-500 text-sm">{formik.errors.file}</div>
            ) : null}
          </div>
          <div className="text-center mt-6">
            <Button
              type="submit"
              className="font-[600] w-full border-2 text-black border-black bg-green-300 hover:bg-green-400 font-handwritten"
            >
              회원가입 하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
