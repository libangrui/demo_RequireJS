/*main*/
requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: 'jquery-2.1.4',
		a: 'a',
		b: 'b',
		c: 'c',
		d: 'd'
	},
	shim: {
		e: ['jquery']
	}
	
});

//引入依赖的模块
requirejs(['jquery','a','d','e'], function($,a){
	$(function(){
		$("#j_test").on("click", function(){
			alert("My name is "+a.getName());
		});
	});
});

/*paths参数，用来映射模块别名。requirejs2.0以后可以配置为一个数组，顺序映射。当前面的路径没有成功载入时可接着使用后面的路径。如下
enforceDefine: true,
paths: {
	jquery: [
		'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',  (jquery路径一)
		'lib/jquery'  (jquery备用路径)
	]
}
require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块（插件）。具体来说，每个模块要定义
（1）exports值（输出的变量名），表明这个模块外部调用时的名称；
（2）deps数组，表明该模块的依赖性。
shim: {
　　　　'd': {    (path中定义的别名)
　　　　　　deps: ['jquery'],  （声明依赖的文件）
　　　　　　exports: 'alertA'  （定义外部调用时的名称）
　　　　}

　　}*/

/*
	define 与 require 的区别
	
	define    定义         返回模块对象
	require   加载使用    不返回任何数据

*/