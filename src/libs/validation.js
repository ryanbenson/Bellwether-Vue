const isEmpty = str => {
  if (str.trim().length <= 0) return true;
  return false;
};

const containsBannedChars = str => {
  if (str.includes(">") || str.includes("<")) return true;
  return false;
};

export { isEmpty };
export { containsBannedChars };
