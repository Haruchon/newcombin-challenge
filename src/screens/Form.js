import { Formik } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import "../App.css";
import { usePostData } from "../hooks/usePostData";
import { useMyChallengeContext } from "../provider";

let dataSchema = yup.object({
  firstName: yup
    .string()
    .strict(true)
    .trim("Must not contain leading or trailing whitespaces")
    .required("First name must contain at least 1 character")
    .min(1, "First name must contain at least 1 character"),
  lastName: yup
    .string()
    .strict(true)
    .trim("Must not contain leading or trailing whitespaces")
    .required("Last name must contain at least 1 character")
    .min(1, "Last name must contain at least 1 character"),
  address: yup
    .string()
    .strict(true)
    .trim("Must not contain leading or trailing whitespaces")
    .required("Address must contain at least 1 character")
    .min(1, "Address must contain at least 1 character"),
  ssn: yup
    .string()
    .trim()
    .required("Must input an SSN")
    .matches(/^\d{3}-?\d{2}-?\d{4}$/, "This is not a valid SSN"),
});

function Form() {
  let navigate = useNavigate();
  const { updateDataList, token } = useMyChallengeContext();
  const { postData } = usePostData();

  const handleSubmit = (values, { resetForm }) => {
    const data = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      address: values.address.trim(),
      ssn: values.ssn.trim(),
    };
    setTimeout(async () => {
      const isSuccess = await postData(data);
      if (isSuccess) {
        updateDataList(data);
        resetForm();
        alert("Success!");
      }
    }, 400);
  };

  useEffect(() => {
    if (!token) navigate("/");
  }, [navigate, token]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Form Page</p>
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              address: "",
              ssn: "",
            }}
            validationSchema={dataSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              resetForm,
              isValid,
            }) => (
              <form onSubmit={handleSubmit} className="form">
                <p className="form-label">First Name</p>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                {errors.firstName && touched.firstName && (
                  <p className="form-error">{errors.firstName}</p>
                )}

                <p className="form-label">Last Name</p>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {errors.lastName && touched.lastName && (
                  <p className="form-error">{errors.lastName}</p>
                )}

                <p className="form-label">Address</p>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                {errors.address && touched.address && (
                  <p className="form-error">{errors.address}</p>
                )}

                <p className="form-label">SSN</p>
                <input
                  type="text"
                  name="ssn"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ssn}
                />
                {errors.ssn && touched.ssn && (
                  <p className="form-error">{errors.ssn}</p>
                )}

                <div className="button-container">
                  <button type="reset" onClick={resetForm}>
                    Reset
                  </button>
                  <button type="submit" disabled={!isValid}>
                    Save
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <Link className="App-link" to="/table">
          See data table
        </Link>
        <Link className="App-link" to="/">
          Return
        </Link>
      </header>
    </div>
  );
}

export default Form;
