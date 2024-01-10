<template>
  <section class="mt-16">
    <footer class="footer bg-gray-400 text-white py-8">
      <div class="waves relative">
        <div class="wave absolute inset-0 bg-blue-500 h-5"></div>
        <div class="wave absolute inset-0 bg-blue-400 h-4"></div>
      </div>

      <ul class="social-icon flex space-x-4 mt-4">
        <li class="social-icon__item transform hover:scale-110 transition-transform">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-facebook" style="color: #1877f2;"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item transform hover:scale-110 transition-transform">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-twitter" style="color: #1da1f2;"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item transform hover:scale-110 transition-transform">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-linkedin" style="color: #0077b5;"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item transform hover:scale-110 transition-transform">
          <a class="social-icon__link hover:text-blue-800" href="#">
            <ion-icon name="logo-instagram" class="" style="color: #e4405f;"></ion-icon>
          </a>
        </li>
      </ul>

      <ul class="menu flex space-x-4 mt-4">
        <li class="menu__item transform hover:scale-110 transition-transform">
          <a class="menu__link" href="#">Home</a>
        </li>
        <li class="menu__item transform hover:scale-110 transition-transform">
          <a class="menu__link" href="#">About</a>
        </li>
        <li class="menu__item transform hover:scale-110 transition-transform">
          <a class="menu__link" href="#">Services</a>
        </li>
        <li class="menu__item transform hover:scale-110 transition-transform">
          <a class="menu__link" href="#">Team</a>
        </li>
        <li class="menu__item transform hover:scale-110 transition-transform">
          <a class="menu__link" href="#">Contact</a>
        </li>
      </ul>

      <p class="mt-4">&copy; 2024 Nadine Coelho | All Rights Reserved</p>
    </footer>
  </section>
</template>
  
<script>

    export default {
        name:"footerComponent",
        components:{
        }
    }
</script>

<style scoped>




.footer {
  position: relative;
  width: 100%;
  /* background: #171c24; */
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}

.social-icon__item,
.menu__item {
  list-style: none;
}

.social-icon__link {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
.social-icon__link:hover {
  transform: translateY(-10px);
}

.menu__link {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
}

.menu__link:hover {
  opacity: 1;
}

.footer p {
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
}

.wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("https://i.ibb.co/wQZVxxk/wave.png");
  background-size: 1000px 100px;
}

.wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animate 4s linear infinite !important;
}

.wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWaves 3s linear infinite;
}

.wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animate 3s linear infinite;
}

@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

</style>