const filterElement = (caption) => {
  return `<a href="#${caption.toLowerCase()}" class="main-navigation__item">${caption}</a>`;
};

const filterOtherElement = (amount) => {
  return `<span class="main-navigation__item-count">${amount}</span>`;
};

export {filterElement, filterOtherElement};
