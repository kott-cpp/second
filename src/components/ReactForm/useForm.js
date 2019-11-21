import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({email: '', password: ''})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false);
  // new state for errors
  // function that validates these errors
  // pass these errors back to form


  const handleChange = event => {
    const {name, value} = event.target
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault()
    // handling errors
    setErrors(validate(values));
    setIsSubmitting(true);
    // callback()
  };

useEffect(() => {
  if (Object.keys(errors).length === 0 && isSubmitting) {
    callback();
  }
}, [errors])

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;