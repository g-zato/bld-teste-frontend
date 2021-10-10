<template>
    <div class="navbar">
    <p class="page-title">Shipping Statistics Dashboard</p>
    <div class="user-container">
      <div class="text-block">Nome do usuário</div>
      <img src="/profile_icon.svg" loading="lazy" alt="" class="user-img"/>
    </div>
  </div>
</template>

<script>

export default ({
    name: 'Navbar'
})
</script>


<style scoped>

    .navbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #fff;
  background-image: -webkit-gradient(linear, left bottom, left top, from(#e6e6e6), to(#fff));
  background-image: linear-gradient(0deg, #e6e6e6, #fff);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.3);
}

.user-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 5vw;
  text-align: end;
}

.user-img {
    margin-left: 10px;
    height: 40px;
    width: 40px;
  }

  .page-title {
      margin-left: 5vw;
  }

  @media screen and (max-width: 479px) {
      .page-title {
    font-size: 12px;
    line-height: 16px;
    width: 120px;
  }
  .user-container {
    margin-top: -10px;
  }
    .text-block {
    width: 100px;
    font-size: 10px;
    line-height: 12px;
    text-align: right;
  }
  }
</style>