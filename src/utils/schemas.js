import * as Yup from 'yup';

export const RegisterUserSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name must be less than 20 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password length must be at least 8 characters')
    .required('Password is required'),
});

export const LoginUserSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password length must be at least 8 characters')
    .required('Password is required'),
});

const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
export const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Phone must be at least 3 characters')
    .max(50, 'Phone must be less than 50 characters')
    .required('Phone is required')
    .matches(phoneNumberRegex, 'Phone number must be in format xxx-xxx-xxxx'),
});
