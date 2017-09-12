const popup = (url, e) => {
  e.preventDefault();

  window.open(url, '_blank');
}

export default popup;