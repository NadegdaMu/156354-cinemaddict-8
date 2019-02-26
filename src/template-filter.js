const filterElement = (id, title) => {
  return `<a href="#${id}" class="main-navigation__item">${title}</a>`;
};

const filterOtherElement = (amount) => {
  return `<span class="main-navigation__item-count">${amount}</span>`;
};

export {filterElement, filterOtherElement};
