async function _() {
    let v = await fetch("https://cdn.jsdelivr.net/gh/Frenchmity/BadgeDB/package.json");
    v = await v.json();
    v = v.version;

    document.querySelector("ver").innerText = v;
}
_();
