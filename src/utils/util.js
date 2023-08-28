export const handleErrors = errors => {
  const errorLiAry = [];
  for (const key in errors) {
    if (Object.hasOwnProperty.call(errors, key)) {
      const errorAry = errors[key];
      for (const error of errorAry) {
        errorLiAry.push(<li key={key + ':' + error}>{key + ':' + error}</li>);
      }
    }
  }
  return errorLiAry;
};