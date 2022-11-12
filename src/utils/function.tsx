export const makeLowerCase = (str: string) => {
  return str.toLowerCase();
};

export const strCompare = (str1: string, str2: string) => {
  return str1 === str2;
};

export const getLastSegmentURL = (str: string) => {
  return str.substring(str.lastIndexOf("/") + 1);
};

export const getNSegmentURL = (str: string, start: number) => {
  let substr = str;

  for (let i = 0; i < start; i++)
    substr = substr.substring(substr.indexOf("/") + 1);

  const end_index = substr.indexOf("/");

  return substr.substring(0, end_index);
};

export const isEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};
