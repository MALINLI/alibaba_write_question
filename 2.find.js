/*请实现find函数，使下列的代码调用正确。
约定：
 title数据类型为String
 userId为主键，数据类型为Number
【思路：
* 类似mysql的查询
* 查找数组里符合规则的一项数据
* where和orderby是find函数的方法
* where接收对象作为参数（{key: 规则}）
* orderby接收两个参数（key, 排序规则）
】
*/
var data = [
  {userId: 8,  title: 'title1'},
  {userId: 11, title: 'other'},
  {userId: 15, title: null},
  {userId: 19, title: 'title2'}
];

function find(origin){
        this.data = origin;
        this.where = function(rule) {
          for(let p in rule) {
            this.data =  this.data.filter(function(item) {
              return item[p] && item[p].match(rule[p])
            })
          }
           return this
        };
        this.orderBy = function(key,method) {
            if(method == "desc"){
                return this.data.sort(function(a,b) {
                    return  b[key] - a[key];
                });
            }else{
                return this.data.sort(function(a,b) {
                    return  a[key] - b[key];
                });
            } 
        };
    return this;
}

// 查找 data 中，符合条件的数据，并进行排序
var result = find(data).where({
  'title': /\d$/
}).orderBy('userId', 'desc');

console.log(result);// [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];

//有一滴滴问题