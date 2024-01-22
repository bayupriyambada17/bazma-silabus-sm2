const generateRandomId = (length) => {
  let result = '';
  const character = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0; i < length; i++) {
    //
    result += character.charAt(Math.floor(Math.random() * character.length));
  }
  return result;
};

module.exports = generateRandomId;