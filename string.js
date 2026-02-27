let str1="hi good morning"
console.log(str1);
let str2=new String("hi hello")
console.log(str2);
let str3="HI FROM UPPERCASE TO LOWERCASE"
console.log(str3);
console.log(str3.toLowerCase());
let str4="hi from lowercase to uppercase"
console.log(str4.toUpperCase());
let str5="         i am String with lot of space"
console.log(str5.length);
console.log(`before trim with length:`+str5,str5.length);
console.log('after trim with length:'+str5.trim()+"--:"+str5.trim().length);

let str6="i am String Searching methodS "
console.log(str6.indexOf("s"));
console.log(str6.lastIndexOf('e'));
console.log(str6.indexOf('m'));
console.log(str6.lastIndexOf('S'));
console.log(str6.indexOf('S'));
console.log(str6.indexOf('S',7));
console.log(str6.lastIndexOf('S',26));
console.log(str6.lastIndexOf('z',26));
console.log(str6.lastIndexOf('o',200));
console.log(str6.lastIndexOf('a'));
console.log(str6.split(" "));
console.log(str6.startsWith("i am S"));
console.log(str6.startsWith("i am search"));
console.log(str6.endsWith("methodS"));
console.log(str6.endsWith("Searching"));
console.log(str6.endsWith(""));
console.log(str3.includes(str6));

let str7='i am used of to get part of the to the string'
console.log(str7[3]);//m
console.log(str7[60]);//undefined
console.log(str7.charAt(23));//f
console.log(str7.charAt("2"));//a
console.log(str7.charAt(20));//t
console.log(str7.slice(3,20))//m used to get par
console.log(str7.slice(25,12))//empty //in slice order is very important*****
console.log(str7.substring(4,26))// used to get part of t
console.log(str7.substring(60,2))// am used to get part of the string
console.log(str7.substring(7))// ed to get part of the string
console.log(str7.substring(-19,-12))// empty space
console.log(str7.split())// [ 'i am used to get part of the string' ]
console.log(str7.split(""))// 
console.log(str7.split())// [ i', ' ', 'a', 'm', ' ', 'u', 's' 'e', 'd', ' ', 't', 'o', ' ', 'g','e', 't', ' ', 'p', 'a', 'r', 't',' ', 'o', 'f', ' ', 't', 'h', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g']
console.log(str7.split(" "));//[ 'i',      'am',  'used',   'to',  'get',    'part',
                             //  'of',     'the',  'string']
console.log(str7.split("of"));//[ 'i am used ', ' to get part ', ' the to the string' ]

























