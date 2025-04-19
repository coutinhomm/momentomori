import { differenceInWeeks } from 'date-fns';

// Calculate total weeks lived based on birth date
export const calculateWeeksLived = (birthDate: Date): number => {
  const today = new Date();
  return differenceInWeeks(today, birthDate);
};

// Calculate if a specific week index has passed
export const isWeekPassed = (birthDate: Date, weekIndex: number): boolean => {
  const weeksLived = calculateWeeksLived(birthDate);
  return weekIndex < weeksLived;
};

// Format a date as YYYY-MM-DD for input field
export const formatDateForInput = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Parse a date string from input field
export const parseDateFromInput = (dateString: string): Date => {
  return new Date(dateString);
};

// Get a valid birth date (default to 30 years ago if invalid)
export const getValidBirthDate = (dateString: string | null): Date => {
  if (!dateString) {
    // Default to 30 years ago
    const defaultDate = new Date();
    defaultDate.setFullYear(defaultDate.getFullYear() - 30);
    return defaultDate;
  }
  
  const parsedDate = new Date(dateString);
  if (isNaN(parsedDate.getTime())) {
    // If invalid, default to 30 years ago
    const defaultDate = new Date();
    defaultDate.setFullYear(defaultDate.getFullYear() - 30);
    return defaultDate;
  }
  
  return parsedDate;
};

// Calculate percentage of life lived (based on 4000 weeks)
export const calculatePercentageLived = (birthDate: Date): number => {
  const weeksLived = calculateWeeksLived(birthDate);
  return (weeksLived / 4000) * 100;
};