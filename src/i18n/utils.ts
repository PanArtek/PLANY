import { ui, defaultLanguage } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLanguage;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key];
  };
}

export function getRelativeUrl(targetLang: string, currentUrl: URL) {
  const currentLang = getLangFromUrl(currentUrl);
  const pathname = currentUrl.pathname;
  
  if (currentLang === defaultLanguage && pathname === '/') {
    return `/${targetLang}/`;
  }
  
  // Replace current language with target language in the URL path
  return pathname.replace(new RegExp(`^/${currentLang}`), `/${targetLang}`);
}