var texts = [
    '3D', 'TagCloud', 'JavaScript',
    'CSS3', 'Animation', 'Interactive',
    'Mouse', 'Rolling', 'Sphere',
    '6KB', 'v2.x',
];
var tc = TagCloud('.content', texts);

let rootEl = document.querySelector('.content');
rootEl.addEventListener('click', function clickEventHandler(e) {
    if (e.target.className === 'tagcloud--item') {
        window.open(`https://www.google.com/search?q=${e.target.innerText}`, '_blank');
        // your code here
    }
});