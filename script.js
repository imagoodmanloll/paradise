const discordTag = document.getElementById('discordTag');
const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(discordTag.textContent);
    copyBtn.textContent = 'Copied';
    setTimeout(() => copyBtn.textContent = 'Copy tag', 1100);
  } catch(e) { alert('copy failed :('); }
});

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

function openProject(title, desc) {
  const modal = document.getElementById('modal');
  modal.classList.add('open');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').textContent = desc;
}
