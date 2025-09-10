const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");
const cursorEl = document.querySelector(".cursor");

const LEFT_TEXT = "Zuway ";
const RIGHT_TEXT = "Technologies";
const INITIAL_BLINK_MS = 2500; // wait before typing starts
const SPEED_MS = 80; // typing speed per character

function typeInto(el, str, perCharMs) {
  return new Promise((resolve) => {
    let i = 0;
    const tick = () => {
      el.textContent += str[i++];
      if (i < str.length) {
        setTimeout(tick, perCharMs);
      } else {
        resolve();
      }
    };
    tick();
  });
}

(async function run() {
  // Step 1: blink cursor for 2.5s
  await new Promise((r) => setTimeout(r, INITIAL_BLINK_MS));

  // Step 2: type "Zuway"
  await typeInto(leftEl, LEFT_TEXT, SPEED_MS);

  // Step 3: add divider line
  rightEl.classList.add("center-line");

  // Step 4: type "Technologies"
  await typeInto(rightEl, RIGHT_TEXT, SPEED_MS);

  // Step 5: remove cursor
  cursorEl.remove();
})();
