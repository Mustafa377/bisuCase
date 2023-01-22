import axios from 'axios';
import Swal from 'sweetalert2';

const parser = require('fast-xml-parser');
const parserConfig = {
    trimValues: true,
    attributeNamePrefix : "", // Attr varsayılan @_ olan başlığı boş bıraktık.
    //attrNodeName: "attr", //default is 'false'
    //textNodeName : "#text",
    ignoreAttributes : false, // Attr'leri de dahil etmek için false belirledik.
    ignoreNameSpace : false // NameSpace'leri de dahil etmek için false belirledik.
};

String.prototype.replaceArray = function (find, replace) {
    let replaceString = this;
    for (let i = 0; i < find.length; i++) {
        replaceString = replaceString.replaceAll(find[i], replace[i]);
    }
    return replaceString;
};

String.prototype.replaceArrayAll = function (find, replace) {
    let replaceString = this;
    for (let i = 0; i < find.length; i++) {
        replaceString = replaceString.replaceAll(find[i], replace[i]);
    }
    return replaceString;
};

function replaceArray(str, find, replace) {
    return str.replaceArray(find, replace);
}

function replaceArrayAll(str, find, replace) {
    return str.replaceArrayAll(find, replace);
}

function strOnlyFirstCharUpperCase(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function strInitialsUpperCase(str) {
    if (typeof str !== 'string') return '';
    return str.split(' ').map(strOnlyFirstCharUpperCase).join(' ');
}

function slugify(text, ampersand = 'and') {
    const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧığ';
    const b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzhig';
    const p = new RegExp(a.split('').join('|'), 'g');

    return text
        .toString()
        .toLowerCase()
        .replace(/[\s_]+/g, '-')
        .replace(p, (c) => b.charAt(a.indexOf(c)))
        .replace(/&/g, `-${ampersand}-`)
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Hangi formatta telefon numarası verilirse verilsin çıktıyı;
// Eğer başında + ülke kodu var ise => +xx (xxx) xxx xxxx formatında, Örneğin: +90 (216) 347 9634
// Eğer başında + ülke kodu yoksa => (xxxx) xxx xxxx formatında, Örneğin: (0216) 347 9634
// verir..
function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/[^0-9+]/g, '');
    var match = cleaned.match(/^(\+[0-9]\d{0,9})?(\d{3,4})(\d{3})(\d{2})(\d{2})$/);

    if (match) return [match[1] ? match[1] + ' ' : '', '(', match[2].charAt(0) === '0' ? match[2] : (match[1] ? match[2] : '0' + match[2]), ') ', match[3], ' ', match[4], match[5]].join('');
    else return phoneNumberString;
}

function submitValidController(arrFormErrors = [], arrShakes = [], callback) {
    var arrTimeoutKeys = [];
    // Bir döngüyle Form içindeki alanlarda hata var ise shake yapıyoruz.
    for (var key in arrFormErrors) {
        if(arrFormErrors[key] !== '') {
            arrShakes[key] = true;

            arrTimeoutKeys.push({
                key: key,
                timeout: setTimeout(() => {
                    arrShakes[arrTimeoutKeys[0].key] = false;
                    clearTimeout(arrTimeoutKeys[0].timeout);
                    arrTimeoutKeys.splice(0,1);
                }, 1000)
            });
        }
    }

    // Form içinde eğer hata var ise return ile işlemi durduruyoruz.
    for (var key in arrFormErrors) {
        if(arrFormErrors[key] !== '') {
            callback(false);
            return;
        }
    }

    callback(true);
}

function toMoneySelectedCurrency(currency, money) {
    return parseFloat(currency.currencyCode === 'TRY' ? money : (money / currency.banknoteSelling).toFixed(2));
}

// Sleep fonksiyonu. await sleep(1000) şeklinde kullanın
function sleep(ms) {
    return new Promise(resolver => setTimeout(resolver, ms));
}

function randomStr(len, arr = '0123456789acbdefghijklmnoprstuvyzqxw') {
    var result = '';

    for (var i = len; i > 0; i--) {
        result += arr[Math.floor(Math.random() * arr.length)];
    }

    return result;
}

function arrGroupBy(arr, key) {
    return arr.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

// Select'e bind edilen array değişkeni içinde label ve value'e göre data olup olmadığını kontrol eden fonksiyon
function selectLabelValueIncludesControl(arrContainer, labelString, valueString) {
    let found = false;

    for(var i = 0; i < arrContainer.length; i++) {
        if (arrContainer[i].label === labelString && arrContainer[i].value === valueString) {
            found = true;
            break;
        }
    }

    return found;
}

/** 
 * Tree Hiyerarşi formatını SelectList'e dolduran fonksiyon
 * 
*/
function selectListTreeCreater(arrContainer, parent = null, deletedCategoryId = '', deletedCategoryParent = '', subMark = '', selectBox) {
    arrContainer.forEach(e => {
        if(e.parent === parent && (e._id !== deletedCategoryId || e.parent !== deletedCategoryParent)) {
            selectBox.push({
                label: subMark + e.name,
                value: e._id
            });

            selectListTreeCreater(arrContainer, e._id, deletedCategoryId, deletedCategoryParent, subMark + '--- ', selectBox);
        }
    });
}

function getRegex(regexName) {
    let regex = null;

    switch (regexName) {
        case 'onlyTurkishSupportAlphabeticAndSpace':
            regex = /^[a-zA-ZığüşöçĞÜŞİÖÇ ]+$/g;
            break;
        case 'epostaRegex':
            regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            break;
        case 'regexSluglify':
            regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
            break;
    }

    return regex;
}

// Input'un hata durumunda sallanma efektini tetikleyen fonksiyon
function shaker(obj) {
    Object.keys(obj.fields).forEach(e => { // Gönderilen obj.form objesini Object.keys ile array'e çevirip key'leri döndürüyoruz.
        if(typeof(obj.fields[e]) === 'object' && obj.fields[e] && obj.fields[e].valid) { // e değeri bir obje ise ve aynı zamanda fields objesinde de yer alıyorsa
            if(obj.fields[e].valid.value === false) { // e objesindeki valid.value false ise
                obj.fields[e].shake = true; // e'nin fields'daki shake değerini true yapıyoruz. (Sallanma efekti başlar)
                
                setTimeout(() => { // 1 saniyelik sallanma sonrasında
                    obj.fields[e].shake = false; // e'nin fields'daki shake değerini false yapıyoruz. (Sallanma efekti durur)
                }, 1000);
            }
        }
    });
}

// Vergi No Kontrol
function validVKN(val) {
    let v = [];
    let lastDigit = Number(val.charAt(9));

    for (let i = 0; i < 9; i++) {
        let tmp = (Number(val.charAt(i)) + (9 - i)) % 10;

        v[i] = (tmp * 2 ** (9 - i)) % 9;
        if (tmp !== 0 && v[i] === 0) v[i] = 9;
    }
    
    let sum = v.reduce((a, b) => a + b, 0) % 10;

    if((10 - (sum % 10)) % 10 !== lastDigit) return false;
    else return true;
}

// Bu fonksiyon TC Kimlik algoritmasıyla çalışır. Hatalı algoritma hata verir.
function validTCKN(val) {
    var isEleven = /^[0-9]{11}$/.test(val);
    var totalX = 0;
    for (var i = 0; i < 10; i++) {
        totalX += Number(val.substr(i, 1));
    }
    var isRuleX = totalX % 10 == val.substr(10,1);
    var totalY1 = 0;
    var totalY2 = 0;
    for (var x = 0; x < 10; x+=2) {
        totalY1 += Number(val.substr(x, 1));
    }
    for (var y = 1; y < 10; y+=2) {
        totalY2 += Number(val.substr(y, 1));
    }
    var isRuleY = ((totalY1 * 7) - totalY2) % 10 == val.substr(9,0);
    var result = isEleven && isRuleX && isRuleY;

    if(!result || val === '00000000000') return false;
    else return true;
}

function getDateByYearRange(selectedYear, selectedMonth, minYear, maxYear) {
    // GÜN
    var day = new Date(selectedYear === undefined ? null:selectedYear, selectedMonth === undefined ? null:selectedMonth, 0).getDate(); // Bir ay'ın kaç çektiğini buluyoruz.
    var days = [];
    days = [{ value: null, label: 'Gün' }];
    for (let i = 1; i < (day + 1); i++) {
        var dayValue = i.toString().length === 1 ? '0' + i.toString() : i.toString();
        days.push({ value: dayValue, label: dayValue });
    }

    // AY
    var months = [];
    months = [{ value: null, label: 'Ay' }];
    for (let i = 1; i < 13; i++) {
        var monthValue = i.toString().length === 1 ? '0' + i.toString() : i.toString();
        months.push({ value: monthValue, label: monthValue });
    }

    // YIL
    var years = [];
    years = [{ value: null, label: 'Yıl' }];
    for (let i = (new Date().getFullYear() - minYear); i > (new Date().getFullYear() - minYear) - maxYear; i--) {
        years.push({ value: i.toString(), label: i.toString() });
    }

    return {
        days: days,
        months: months,
        years: years
    }
}

function getMimeType(file, fallback = null) {
	const byteArray = (new Uint8Array(file)).subarray(0, 4);
    let header = '';
    for (let i = 0; i < byteArray.length; i++) {
       header += byteArray[i].toString(16);
    }
	switch (header) {
        case "89504e47":
            return "image/png";
        case "47494638":
            return "image/gif";
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
            return "image/jpeg";
        default:
            return fallback;
    }
}

function returnFileSize(size) {
    if(size < 1024) return size + 'bytes';
    else if(size >= 1024 && size < 1048576) return (size/1024).toFixed(1) + 'KB';
    else if(size >= 1048576) return (size/1048576).toFixed(1) + 'MB';
}

/**
 * Verilen array dizisini küçükten büyüğe ya da büyükten küçüğe sıralama yapar.
 * Fakat 2 farklı kullanımı bulunmaktadır.
 * 1. arr paramertesine verilen array dizisi eğer string (Örn: ['a', 'b', 'c']) ya da number'lardan (Örn: [1, 2, 3]) oluşuyorsa, key kullanılmaz. 
 * Direk olarak sortType değişkeninde belirtilen küçük ya da büyük işlem uygulanır.
 * 2. arr paramertesine verilen array dizisi eğer object'lerden oluşuyorsa yine 2 farklı kullanım şekli ortaya çıkar,
 *      a.  Sayısal Değer Toplama: key parametresi array dizi olarak gelmiş ise, yalnızca sayısal değerler toplamı işlemi yapılabilir.
 *          key parametresindeki her key, arr parametresinden gelen array dizisi içinde aranır ve değerleri sayı olarak toplanır.
 *          Ardından sortType değişkeninde belirtilen küçük ya da büyük işlem uygulanır.
 *      b.  Standart: key parametresi string olarak gelmiş ise, array dizisi içinde bu key'e ait değer üzerinden sortType değişkeninde belirtilen küçük ya da büyük işlem uygulanır.
 * @param {Array} arr Format Örnekleri: ['a', 'b', 'c'] , [1, 2, 3] , [{ value: '1', text: 'a' },{ value: '2', text: 'b' },{ value: '3', text: 'c' }]
 * @param {string, Array} key Format Örnekleri: 'deneme' , ['deneme1', 'deneme2']
 * @param {string} sortType > Küçükten Büyüğe ya da A-Z , < Büyükten Küçüğe ya da Z-A
 * @returns {Array} Dönen değer array dizidir.
 */
 function arrSort(arr, key, sortType) {
    if(sortType === '>') {
        return arr.sort((a,b) => {
            if(typeof a === 'string') return a.localeCompare(b) > b.localeCompare(a) ? 1 : b.localeCompare(a) > a.localeCompare(b) ? -1 : 0;
            else if(typeof a === 'number') return a > b ? 1 : b > a ? -1 : 0;
            else if(typeof a === 'object') {
                if(Array.isArray(key) && key.length > 0) {
                    var aObj = a;
                    var bObj = b;

                    key.forEach(e => {
                        aObj = aObj[e];
                        bObj = bObj[e];
                    });

                    if(typeof aObj === 'string' && typeof bObj === 'string') {
                        return aObj.localeCompare(bObj) > bObj.localeCompare(aObj) ? 1 : bObj.localeCompare(aObj) > aObj.localeCompare(bObj) ? -1 : 0;
                    } else if(typeof aObj === 'number' && typeof bObj === 'number') return aObj > bObj ? 1 : bObj > aObj ? -1 : 0;
                    else return 0;
                } else {
                    if(typeof a[key] === 'string' && typeof b[key] === 'string') {
                        return a[key].localeCompare(b[key]) > b[key].localeCompare(a[key]) ? 1 : b[key].localeCompare(a[key]) > a[key].localeCompare(b[key]) ? -1 : 0;
                    } else if(typeof a[key] === 'number' && typeof b[key] === 'number') return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
                    else return 0;
                }
            } else return 0;
        });
    } else if(sortType === '<') {
        return arr.sort((a,b) => {
            if(typeof a === 'string') return a.localeCompare(b) < b.localeCompare(a) ? 1 : b.localeCompare(a) < a.localeCompare(b) ? -1 : 0;
            else if(typeof a === 'number') return a < b ? 1 : b < a ? -1 : 0;
            else if(typeof a === 'object') {
                if(Array.isArray(key) && key.length > 0) {
                    var aObj = a;
                    var bObj = b;

                    key.forEach(e => {
                        aObj = aObj[e];
                        bObj = bObj[e];
                    });

                    if(typeof aObj === 'string' && typeof bObj === 'string') {
                        return aObj.localeCompare(bObj) < bObj.localeCompare(aObj) ? 1 : bObj.localeCompare(aObj) < aObj.localeCompare(bObj) ? -1 : 0;
                    } else if(typeof aObj === 'number' && typeof bObj === 'number') return aObj < bObj ? 1 : bObj < aObj ? -1 : 0;
                    else return 0;
                } else {
                    if(typeof a[key] === 'string' && typeof b[key] === 'string') {
                        return a[key].localeCompare(b[key]) < b[key].localeCompare(a[key]) ? 1 : b[key].localeCompare(a[key]) < a[key].localeCompare(b[key]) ? -1 : 0;
                    } else if(typeof a[key] === 'number' && typeof b[key] === 'number') return a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0;
                    else return 0;
                }
            } else return 0;
        });
    }
}

async function tcKontrol(identityNumber, name, lastname, birthDateYear) {
    var params = {
        identityNumber: identityNumber,
        name: name,
        lastname: lastname,
        birthDateYear: birthDateYear
    }
    
    var verifyTCID = await axios.post(process.env.VUE_APP_API_URL + 'general/verify/tcid', params);
    
    if(verifyTCID.data.result === 'success') return true;
    else return false;
}

function generateYearsBetween(startYear = 2000, endYear) {
    const endDate = endYear || new Date().getFullYear();
    let years = [];

    for (var i = startYear; startYear < endDate ? i <= endDate : startYear >= endDate; i++) {
        years.push(startYear);

        if(startYear < endDate) startYear++;
        else startYear--;
    }

    return years;
}

function getIdentityType(identityNumber) {
    return identityNumber.length === 10 ? 'vkn' : identityNumber.substring(0, 2) === '99' ? 'ykn' : 'tckn';
}

function isJSON(text) {
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) return true;
    else return false;
}

function isXML(text) {
    try {
        if(parser.XMLValidator.validate(text).err) return false;
        else return true;
    } catch (error) {
        return false;
    }
}

async function copyToClipboard(text) {
    var result = await new Promise(resolve => {
        navigator.clipboard.writeText(text).then(() => {
            resolve(true);
        }, () => {
            resolve(false);
        });
    });

    return result;
}

function copyToClipboard2(text) {
    navigator.clipboard.writeText(text).then(() => {
        Swal.fire({
            icon: 'success',
            title: `<b>${text}</b> metni panoya kopyalandı!`,
            width: 500,
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
    }, () => {
        Swal.fire({
            icon: 'error',
            title: 'Kopyalama başarısız!',
            width: 500,
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
    });
}

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
  
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
  
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else Object.assign(target, { [key]: source[key] });
        }
    }
    
    return mergeDeep(target, ...sources);
}

function initSelectBoxDate(selectedYear, selectedMonth, minYear, maxYear, showDayFirstLabel = false, showMonthFirstLabel = false, showYearFirstLabel = false) { // Selectbox'ları tarih datası ile dolduran fonksiyon
    // GÜN
    var day = new Date(selectedYear === undefined ? null:selectedYear, selectedMonth === undefined ? null:selectedMonth, 0).getDate(); // Bir ay'ın kaç çektiğini buluyoruz.
    var days = [];
    if(showDayFirstLabel === true) days = [{ value: '', label: 'Gün' }];
    for (let i = 1; i < (day + 1); i++) {
        var dayValue = i.toString().length === 1 ? '0' + i.toString() : i.toString();
        days.push({ value: dayValue, label: dayValue });
    }

    // AY
    var months = [];
    if(showMonthFirstLabel === true) months = [{ value: '', label: 'Ay' }];
    for (let i = 1; i < 13; i++) {
        var monthValue = i.toString().length === 1 ? '0' + i.toString() : i.toString();
        months.push({ value: monthValue, label: monthValue });
    }

    // YIL
    var years = [];
    if(showYearFirstLabel === true) years = [{ value: '', label: 'Yıl' }];
    for (let i = (new Date().getFullYear() - minYear); i > (new Date().getFullYear() - minYear) - maxYear; i--) {
        years.push({ value: i, label: i });
    }

    return {
        days: days,
        months: months,
        years: years
    }
}

function setWindowClosedPrompt(status) {
    if(status === true) {
        console.log('setWindowClosedPrompt', 'Eklendi');
        window.addEventListener('beforeunload', function (e) {
            e.preventDefault();
            e.returnValue = '';
        });
    } else {
        console.log('setWindowClosedPrompt', 'Kaldırıldı');
        window.addEventListener('beforeunload', function (e) {
            e.preventDefault();
            e.returnValue = '';
        });
    }
}

export default {
    replaceArray,
    replaceArrayAll,
    strOnlyFirstCharUpperCase,
    strInitialsUpperCase,
    slugify,
    formatPhoneNumber,
    submitValidController,
    toMoneySelectedCurrency,
    sleep,
    randomStr,
    arrGroupBy,
    selectLabelValueIncludesControl,
    selectListTreeCreater,
    getRegex,
    shaker,
    validVKN,
    validTCKN,
    getDateByYearRange,
    getMimeType,
    returnFileSize,
    arrSort,
    tcKontrol,
    generateYearsBetween,
    getIdentityType,
    isJSON,
    isXML,
    copyToClipboard,
    copyToClipboard2,
    isObject,
    mergeDeep,
    initSelectBoxDate,
    setWindowClosedPrompt
};