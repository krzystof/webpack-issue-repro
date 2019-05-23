if (module.hot) {
  module.hot.accept();
}

const el = document.getElementById('container')

el.textContent = 'something else'
