import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { RegisterUserSchema } from '../../utils/schemas';
import { apiRegisterUser } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';
import css from './RegistrationPage.module.css';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiRegisterUser(values))
      .unwrap()
      .then(() => {
        toast.success('Successfull registration!!');
      })
      .catch(error => {
        if (error === 'Request failed with status code 400') {
          toast.error('User with this email already exists!!');
        }
      });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={RegisterUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name:</span>
            <Field
              type="text"
              name="name"
              className={css.input}
              placeholder="Ivan Ivanov"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              className={css.input}
              placeholder="example.email@example.com"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              className={css.input}
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>

          <button type="submit" className={css.signUpBtn}>
            Sign Up
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default RegistrationPage;
