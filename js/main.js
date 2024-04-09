setInterval(
  () => document.querySelector(".userImg").classList.toggle("has-story"),
  5000
);

const loading = document.getElementById("loading");

const loadingDuration = 3000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

  