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
    links.push(fn(key, obj[key]));
  }
  return links;
};

// Our custom easing
export let easing = [0.6, -0.05, 0.01, 0.99];
let easecustom = [0.77, 0.2, 0.05, 1];

export const animateExit = { y: -40, opacity: 0, transition: { ease: easing } };

// Custom variant
export const fadeInUp = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.8, ease: easecustom },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easecustom,
      delay: 0.1,
    },
  },
};

export const animateDown = {
  initial: {
    y: -40,
    opacity: 0,
    transition: { duration: 0.8, ease: easecustom },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easecustom,
    },
  },
};

export const animateUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.8, ease: easecustom },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easecustom,
    },
  },
};

export const animateNav = {
  initial: {
    y: -30,
    opacity: 0,
    transition: { duration: 0.8, ease: easecustom },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easecustom,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const search = (searchTerm, items, toSearchIn) => {
  if (!searchTerm) return items;
  return items.filter((item) => {
    return toSearchIn.some((field) => {
      return item[field].toLowerCase().includes(searchTerm.toLowerCase());
    });
  });
};

export const searchArray = (searchTerm, items) => {
  if (!searchTerm) return items;
  return items.filter((item) => {
    return JSON.stringify(item)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
};

export const randomColor = () => {
  const color = new TailwindColor().pick().replace("bg-", "");
  return color;
};
