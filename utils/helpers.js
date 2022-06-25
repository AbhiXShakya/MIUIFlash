function capitalize(str) {
  if (str.length == 0) return str;
  return str[0].toUpperCase() + str.substr(1);
}

export function titleCase(str) {
  if (!str) return "";
  return str.split(" ").map(capitalize).join(" ");
}

export function parseCodename(codename) {
  if (!codename) return "";
  return codename.split("-").map(capitalize).join(" & ");
}

export function parseDate(date) {
  if (!date) return "";
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();
  return `${day} ${month} ${year}`;
}

export const objectMap = (obj, fn) => {
  const links = [];
  for (let key in obj) {
    console.log(key);
    links.push(fn(key, obj[key]));
  }
  return links;
};
