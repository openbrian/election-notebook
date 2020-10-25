<template>
  <div>
    <svg id="p" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1235" height="650" viewBox="0 0 500 500">
      <defs>
        <rect id="b" width="16" height="16" stroke="#333333" stroke-width="1" fill="#eeeeee" rx="1" x="2"/>
      </defs>
      <rect width="500" height="500" fill="#fff" stroke="#333"/>
    </svg>
  </div>
</template>
<script>
export default {
  mounted() {
    let svg = document.getElementById("p");
    let ns = svg.namespaceURI;
    let cell = 20;

    function row(min, max, y) {
      for (let x = min; x < max; x++) {
        let u = document.createElementNS(ns, 'use');
        u.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#b')
        u.setAttribute("y", y * cell);
        u.setAttribute("x", x * cell);
        svg.appendChild(u)
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
