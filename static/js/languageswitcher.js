var userLang = navigator.language || navigator.userLanguage; 
var lowerLang = userLang.toLowerCase();
if (lowerLang.includes('zh-tw') || lowerLang.includes('zh-hk') || lowerLang.includes('zh-mo') || lowerLang.includes('zh-cn') || lowerLang.includes('zh')) {
    window.location.href = "/tc/index.html";
} else {
    window.location.href = "/en/index.html";
}
