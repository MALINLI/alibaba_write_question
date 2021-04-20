function sprintf(template, data) {
    return template.replace(/\$\{(\w+)\}/g,(str, $1) =>  data[$1] || '')
}
const template = "My name is ${name},I'm from ${city}";
const result = sprintf(template, {
name: 'Coder',
city: 'Beijing',
});
console.log(result);