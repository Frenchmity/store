async function _() {
    let v = await fetch("https://badgedb.enmity.frcat.xyz/manifest.json");
    v = await v.json();
    v = v.version;

    document.querySelector("ver").innerText = v;
}
_();
