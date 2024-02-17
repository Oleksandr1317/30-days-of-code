let name = "30 days JavaScript";
console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substr(0,2));
console.log(name.substr(2,19));
console.log(name.includes('Script'));
console.log(name.split());
console.log(name.split(' '));
let ts = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(ts.split(','));
console.log(name.replace('JavaScript','Python'));
console.log(name.charAt(15));
console.log(name.charCodeAt(10));
console.log(name.indexOf("d"));
console.log(name.lastIndexOf("t"));
let n = "You cannot end a sentence with because because because is a conjunction";
console.log(n.indexOf("because"));
console.log(n.lastIndexOf("because"));
console.log(n.search("because"))
console.log(name.trim());
console.log(name.startsWith("30"));
console.log(name.endsWith("JavaScript"));
console.log(name.match(/a/gi));
let one = "30 Days";
let two = 'JavaScript';
result = one.concat(' ',two);
console.log(result);
console.log(name.repeat(2));
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"");
let num = '10'
let intnum = parseInt(num);
console.log(typeof intnum);
let fl = '9,8';
let prfl = parseFloat(fl);
console.log(prfl == 10);
let word1 = "Python";
let word2 = "Jargon"
console.log(word1.includes('on'));
console.log(word2.includes('on'));
let w = 'I hope this course is not full of jargon';
console.log(w.includes('jargon'))
let randN = Math.random();
let randN100 = randN*101;
console.log(Math.floor(randN100));
let rnd50 = (randN*51) + 50;
console.log(Math.floor(rnd50));
let rnd250 = randN * 256;
console.log(Math.floor(rnd250));
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
console.log(n.substr(n.indexOf('because'), 'because because because'.length));
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.match(/love/gi));
let b = 'You cannot end a sentence with because because because is a conjunction';
console.log(b.match(/because/gi));
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let word = sentence.replace(/[%#@&$;]/g, '')
                           .match(/\w+/g)
                           .reduce((acc,word) => {
                            acc[word] = (acc[word] || 0) + 1;
                            if (!(acc[word] < acc[acc.$])) acc.$ = word;
                            return acc;
                        }, {}).$;
console.log(word);

let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = text.match(/\d+/g);
let total = numbers.reduce((total, num) => total + parseInt(num), 0);
console.log("Total annual income:", total, "euro");