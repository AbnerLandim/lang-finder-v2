/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const parseSearchText = (searchText: string) => {
  const parsedText = searchText
    .replace(/[~`!@#$%^&()_={}[\]:;,.<>+?-]/g, '')
    .toLowerCase()
    .split(' ')[0]
  return parsedText
}

export default parseSearchText
