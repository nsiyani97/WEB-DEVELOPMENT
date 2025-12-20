export const validate = (values) => {
  const errors = {};

  if (!values.name || values.name.length < 3) errors.name = "Name must be at least 3 characters";

  if (!/^[0-9]{10}$/.test(values.phone)) errors.phone = "Phone must be 10 digits";

  if (!values.comment || values.comment.length < 5) errors.comment = "Comment must be at least 5 characters";

  if (!values.rating || values.rating < 1 || values.rating > 5) errors.rating = "Rating must be between 1 and 5";

  return errors;
};
