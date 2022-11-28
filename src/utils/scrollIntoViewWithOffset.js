export const scrollIntoViewWithOffset = (view, offset) => {
  window.scrollTo({
    behavior: 'smooth',
    top:
      document.getElementById(view).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
};
