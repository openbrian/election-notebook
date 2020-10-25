<template>
  <div>
    <h1>270 Electoral Votes to Victory</h1>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="888" viewBox="0 0 500 740">
      <defs>
        <rect id="box" width="16" height="16" stroke="#333333" stroke-width="1" fill="#eeeeee" rx="1" x="2" y="1"/>
        <g id="pyr"></g>
      </defs>
      <rect width="500" height="740" fill="#fff" stroke="#333"/>
      <use xlink:href="#box" x="240" y="360" />
      <g transform="translate(500, 340) rotate(180)">
        <use xlink:href="#pyr"/>
      </g>
      <g transform="translate(0, 400)">
        <use xlink:href="#pyr"/>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  mounted() {
    let p = document.getElementById("pyr");
    let ns = p.namespaceURI;
    let cell = 20;

    function row(min, max, y) {
      for (let x = min; x < max; x++) {
        let u = document.createElementNS(ns, 'use');
        u.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#box')
        u.setAttribute("y", y * cell);
        u.setAttribute("x", x * cell);
        p.appendChild(u)
      }
    }

    function diagonal(y, radius) {
      let min = radius - y;
      let max = radius - y + (y * 2) + 1;
      return [min, max]
    }

    let radius = 12;
    let min, max;
    for (let y = 0; y <= radius; y++) {
      [min, max] = diagonal(y, radius);
      row(min, max, y);
    }
    row(min, max, 13);
    row(min, max, 14);
    row(min, max, 15);
    row(min, max, 16);
  },
};
</script>
<style>
</style>
