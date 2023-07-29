import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";

function Formcontainer() {

  //initializing intialvalues
  const initialValues = {
    name: "",
    age: "",
    email: "",
    dob: "",
    gender: "",
    has10th: false,
    has12th: false,
    hasDegree: false,
  };

  //creating schema for form values
  const schema = yup.object().shape({
    name: yup.string().trim().required("Required Field"),
    age: yup
      .number()
      .typeError("Enter valid age")
      .max(45, "cannot be more than 45")
      .required("Required Field"),
    email: yup.string().email("Enter valid email!").required("Required Field"),
    dob: yup.date().required("Required Field"),
    gender: yup.string().required("Required Field"),
    has10th: yup.boolean(),
    has12th: yup.boolean(),
    hasDegree: yup.boolean(),
  });

  //onSubmit function
  function onSubmit(data) {
    console.log(data)
  }
  return (
    <div className="container">
      <h1 className="text-center">Form container</h1>
      {/* form goes here */}
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? "inputError" : ""}
                  />
                  {errors.name && touched.name ? (
                    <p className="errorMessage">{errors.name}</p>
                  ) : null}
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="text"
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.age && touched.age ? "inputError" : ""}
                  />
                  {errors.age && touched.age ? (
                    <p className="errorMessage">{errors.age}</p>
                  ) : null}
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? "inputError" : ""
                    }
                  />
                  {errors.email && touched.email ? (
                    <p className="errorMessage">{errors.email}</p>
                  ) : null}
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group>
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.dob && touched.dob ? "inputError" : ""}
                  />
                  {errors.dob && touched.dob ? (
                    <p className="errorMessage">{errors.dob}</p>
                  ) : null}
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <div className="row">
                    <Form.Check
                      type="radio"
                      name="gender"
                      value={"male"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label={"Male"}
                    />
                    <Form.Check
                      type="radio"
                      name="gender"
                      value={"female"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label={"Female"}
                    />
                  </div>

                  {errors.gender && touched.gender ? (
                    <p className="errorMessage">{errors.gender}</p>
                  ) : null}
                </Form.Group>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-4">
                    <Form.Group>
                      <Form.Label>Has 10th</Form.Label>
                      <Form.Check
                        type="checkbox"
                        name="has10th"
                        value={values.has10th}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.has10th && touched.has10th ? "inputError" : ""
                        }
                      />
                      {errors.has10th && touched.has10th ? (
                        <p className="errorMessage">{errors.has10th}</p>
                      ) : null}
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group>
                      <Form.Label>Has 12th</Form.Label>
                      <Form.Check
                        type="checkbox"
                        name="has12th"
                        value={values.has12th}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.has12th && touched.has12th ? "inputError" : ""
                        }
                      />
                      {errors.has12th && touched.has12th ? (
                        <p className="errorMessage">{errors.has12th}</p>
                      ) : null}
                    </Form.Group>
                  </div>
                  <div className="col-md-4">
                    <Form.Group>
                      <Form.Label>Has Degree</Form.Label>
                      <Form.Check
                        type="checkbox"
                        name="hasDegree"
                        value={values.hasDegree}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.hasDegree && touched.hasDegree
                            ? "inputError"
                            : ""
                        }
                      />
                      {errors.hasDegree && touched.hasDegree ? (
                        <p className="errorMessage">{errors.hasDegree}</p>
                      ) : null}
                    </Form.Group>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Formcontainer;
