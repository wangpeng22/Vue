<template>
	<div class="parent">
		<h1> 父组件(灰色背景)</h1>
		<div>
			子组件传来的值为: {{emitData}}
		</div>
		<child @emitMessage="receiveFun"></child>
	</div>
</template>
<script>
	import child from './child.vue';

	export default {
		data () {
			return {
				emitData : ""
			}
		},
		methods : {
			receiveFun(message){

				this.emitData = message;
			}
		},
		components : {child}
	}
</script>
<style>
  .parent{
    background-color: gainsboro;
    height: 400px;
  }
</style>