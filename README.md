# alibaba_write_question
笔试题

1、
/** 给定 csv 文件，转换成对象结构(并提供测试用例):
* interface Person {
*   name: string;
*   age: number;
*   parent: Person[];
*   children: Person[];
* }
*/

const csv = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`;

思路：
* csv文件内容读取和解析
* csv文件内容是字符串
* 解析成Person规则的对象结构
* csv文件以换行分割每一条记录
* csv文件以逗号分隔每一条记录的各个字段
* 需考虑第一行是内容还是字段名



2、请实现find函数，使下列的代码调用正确。
// 约定：
// title数据类型为String
// userId为主键，数据类型为Number
var data = [
  {userId: 8,  title: 'title1'},
  {userId: 11, title: 'other'},
  {userId: 15, title: null},
  {userId: 19, title: 'title2'}
];
var find = function(origin) {
  // your code are here...
}
// 查找 data 中，符合条件的数据，并进行排序
var result = find(data).where({
  'title': /\d$/
}).orderBy('userId', 'desc');

console.log(result);// [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];

思路：
* 类似mysql的查询
* 查找数组里符合规则的一项数据
* where和orderby是find函数的方法
* where接收对象作为参数（{key: 规则}）
* orderby接收两个参数（key, 升序还是降序）




3、
•  写一个弹窗组件，有一个展示区域和关闭按钮，不要求样式，但需要提供测试用例。参考：
• https://ant.design/components/modal-cn/#header
• https://getbootstrap.com/docs/4.2/components/modal/#live-demo

思路：
* js实现
* 主要接收参数：
{
	cancel: function //关闭弹框
	confirm：function //打开弹框操作
	width: num || string //自定义宽
	height: num || string //自定义高
	title: string //弹框标题
	content： string || node //弹框内容	
}




4、使用 纯 JS / react/Vue/typescript 写一个 Grid 组件，要求：
• 能够加载1W + 数据，加载和查看数据时不卡顿
• 能够对单元格进行格式化
• 扩展功能表头resize（拖拽等功能）

思路：
* 使用无限滚动列表实现（虚拟列表）




5、实现一个前端缓存模块，主要用于缓存 xhr 返回的结果，避免多余的网络请求浪费，要求：
• 生命周期为一次页面打开
• 如果有相同的请求同时并行发起，要求其中一个能挂起并且等待另外一个请求返回并读取该缓存





