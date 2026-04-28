function scrollToElementById(id: string) {
  document.querySelector(`#${id}`)?.scrollIntoView({
    behavior: "smooth"
  });
}

export default scrollToElementById;