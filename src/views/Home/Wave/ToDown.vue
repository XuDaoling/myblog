<template>
  <div class="arrow-container" @click="scrollDown">
    <div class="triangle triangle1"></div>
    <div class="triangle triangle2"></div>
    <div class="triangle triangle3"></div>
  </div>
</template>

<script setup>

const scrollDown = () => {
  window.scrollTo({
    behavior: "smooth",
    top: document.documentElement.clientHeight,
  });
};

</script>

<style scoped>
.arrow-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 150px; /* Center the arrow vertically */
  cursor: pointer;
  user-select: none; /* Prevent text selection on click */
  z-index: 30;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 20px solid #333; /* Triangle color */
  margin: 5px 0; /* Space between triangles */
  outline: none; /* Remove focus outline */
  cursor: pointer; /* Change cursor to pointer for clickable */
}

.triangle1 {
  border-top-color: #FF0000; /* Red color for the first triangle */
  animation: bounce 1s infinite;
}

.triangle2 {
  border-top-color: #00FF00; /* Green color for the second triangle */
  animation: bounce 1s infinite;
  animation-delay: 0.2s;
}

.triangle3 {
  border-top-color: #0000FF; /* Blue color for the third triangle */
  animation: bounce 1s infinite;
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
</style>
