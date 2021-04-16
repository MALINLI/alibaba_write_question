 /** 给定 csv ⽂件，转换成对象结构(并提供测试⽤例):
 * interface Person {
 * name: string;
 * age: number;
 * parent: Person[];
 * children: Person[];
 * }
 */

/*【思路：
* csv文件内容解析
* csv文件内容是字符串
* 解析成Person规则的对象结构
* csv文件以换行分割每一条记录
* csv文件以逗号分隔每一条记录的各个字段
】
*/

function parseCsv(str) {
  const rowArr = str.trim().split("\n");
  const data = [];
  if (rowArr.length > 0) {
    const headers = rowArr.shift().split(",");
    rowArr.forEach((item) => {
        const obj = {};
        obj.parent = [];
        obj.children = [];
        const temp = item.split(",");
         for(let j = 0; j < temp.length; j++){
           if(headers[j] === 'parent') {
            temp[j] && obj.parent.push(temp[j]);
           } else {
            obj[headers[j]] = temp[j];
           }
         }
         data.push(obj);
    })
  }
  const len = data.length;
  for(let i = 0; i < len; i ++) {
    for(let j = 0; j < len; j ++) {
      if(data[i].parent.includes(data[j].name) &&  !data[j].children.includes(data[i].name)) {
        data[j].children.push(data[i].name)
      }
      if(data[i].children.includes(data[j].name) &&  !data[j].parent.includes(data[i].name)) {
        data[j].parent.push(data[i].name)
      }
    }
  }
   return data;
}

const csv = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`;
console.log(parseCsv(csv))