export function getBirthYear(date: Date) {
  const dateFormat = new Date(date);

  return +dateFormat.getFullYear();
}

export function isValidJWT(token: string) {
  const jwtRegex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_.+/=]*$/;
  console.log(jwtRegex.test(token));
  return jwtRegex.test(token);
}
