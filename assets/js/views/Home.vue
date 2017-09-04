<template>
  <div class="container-fluid app__container-fluid">
    <div class="jumbotron home__jumbotron">
      <div class="container app__container">
        <p>忙里偷闲，扯下蛋去；苦中作乐，灌个水来</p>
      </div>
    </div>
    <div class="container app__container">
      <div class="home__toolbar">
        <div class="dropdown">
          <button class="btn btn-default btn-sm dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="glyphicon glyphicon-th" aria-hidden="true"></span> 全部话题
            <span class="caret"></span>
          </button>
          <button class="btn btn-default btn-sm" type="button">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> 发布帖子
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">数码</a></li>
            <li><a href="#">编程</a></li>
            <li><a href="#">旅游</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .home__jumbotron {
    height: 240px;
    border-radius: none;
    background-image: url("../../images/jumbotron.jpg");
    background-size: 100% 100%;
  }
  .home__jumbotron p {
    color: #fff;
    margin-top: 140px;
  }
  .home__toolbar {
    margin-bottom: 15px;
  }
</style>