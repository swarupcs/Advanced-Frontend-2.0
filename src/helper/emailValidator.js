const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(string) {

  if (!regex.test(string)) {
    return false;
  }

  return true;
}

export default validateEmail;
