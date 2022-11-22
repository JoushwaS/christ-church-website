export function checkDescriptionLength(str, num) {
  return str.length >= num;
}

export function truncateString(str, num) {
  const condition = checkDescriptionLength(str, num);

  // const result = func();
  if (!condition) {
    return str;
  }
  return str.slice(0, num) + "...";
}
