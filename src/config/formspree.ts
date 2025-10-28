// Formspree Configuration
// Replace this placeholder ID with your actual Formspree form ID
// You can get this from your Formspree dashboard after creating the form

export const FORMSPREE_IDS = {
  // Music Booking Form - for DJ performance inquiries
  MUSIC_BOOKING: 'mnngegjg',
} as const;

// Helper function to get form ID by type
export const getFormId = (formType: keyof typeof FORMSPREE_IDS): string => {
  return FORMSPREE_IDS[formType];
};

// Form types for type safety
export type FormType = keyof typeof FORMSPREE_IDS;
