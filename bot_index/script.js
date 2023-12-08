function showContent(contentId) {
    var aDiv = document.getElementById('a');
    var bDiv = document.getElementById('b');
    var cDiv = document.getElementById('c');

    aDiv.classList.remove('active');
    bDiv.classList.remove('active');
    cDiv.classList.remove('active');

    if (contentId === 'a') {
        aDiv.classList.add('active');
    } else if (contentId === 'b') {
        bDiv.classList.add('active');
    } else if (contentId === 'c') {
        cDiv.classList.add('active');
    }
}