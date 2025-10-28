export interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const getCookieConsent = (): CookieConsent | null => {
  if (typeof window === 'undefined') return null;
  
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return null;
  
  try {
    return JSON.parse(consent);
  } catch {
    return null;
  }
};

export const hasCookieConsent = (type: keyof CookieConsent): boolean => {
  const consent = getCookieConsent();
  return consent ? consent[type] : false;
};

export const canUseAnalytics = (): boolean => {
  return hasCookieConsent('analytics');
};

export const canUseMarketing = (): boolean => {
  return hasCookieConsent('marketing');
};

export const canUseEssential = (): boolean => {
  return hasCookieConsent('essential');
};

// Helper function to check if user has made any consent choice
export const hasUserConsented = (): boolean => {
  return getCookieConsent() !== null;
};

// Helper function to reset consent (useful for testing)
export const resetCookieConsent = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('cookieConsent');
  }
};
