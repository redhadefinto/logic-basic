const onModal = () => {
  const btn = document.getElementById('btn-start')
  const modal = document.getElementById('modal')
  const cancel = document.getElementById('cancel')
  btn.addEventListener('click', () => {
    console.log('di klick');
    modal.style.display = 'block';
    cancel.addEventListener('click', () => {
      modal.style.display = 'none'
    })
  })
}

onModal()