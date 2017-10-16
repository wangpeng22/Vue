<template>
	<div>
		<h2>例子目录：</h2>
		<ol>
      		<li>父->子 组件通讯：props <router-link to="props" >点击进入</router-link></li>
      		<li>子->父 组件通讯：emit <router-link to="emit" >点击进入</router-link></li>
      		<li>普通组件通讯：Global Bus <router-link to="/bus">点击进入</router-link></li>
      		<li>一个简单的Todo List： <router-link to="/todo">点击进入</router-link></li>
		</ol>
	</div>
</template>
<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
 /* display: inline-block;*/
  margin: 0 10px;
}
</style>