var styles = ["Джаз", "Блюз"];//1
console.log(styles);
styles.push("Рок-н-Ролл");//2
console.log(styles);
var seclastitem = styles.length -2;//3
styles[seclastitem] = "Класика";
console.log(styles);
console.log(styles.shift());//4
styles.unshift("Реп", "Регги");//5
console.log(styles);
