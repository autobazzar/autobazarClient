let rootElement;

/**
 * @param {HTMLDivElement} root
 * */

export function initRoot(root) {
  rootElement = root;
}

function isThemeDark() {
  return rootElement.dataset.theme == "dark";
}

export function changeTheme() {
  rootElement.dataset.theme = isThemeDark() ? "light" : "dark";
}

export function getRoot() {
  return rootElement;
}
