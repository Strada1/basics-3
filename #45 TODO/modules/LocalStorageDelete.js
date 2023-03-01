
function LocalStorageDelete(event) {
    if (!event.target.classList.contains('delBtn')) return
    localStorage.removeItem(event.target.dataset.key)
}

export default LocalStorageDelete;