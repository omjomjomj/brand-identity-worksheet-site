import React, { createContext, useContext, useState, useEffect } from 'react';

export interface FormData {
  // Worksheet 1
  worksheet1_brandStatus: string;
  worksheet1_targetAudience: string;
  worksheet1_competitiveAdvantage: string;
  worksheet1_personalityKeywords: string[];

  // Worksheet 2
  worksheet2_colorAxis: string;
  worksheet2_typographyAxis: string;
  worksheet2_layoutAxis: string;
  worksheet2_visualKeywords: string;
  worksheet2_primaryColor: string;
  worksheet2_secondaryColor: string;
  worksheet2_accentColor: string;
  worksheet2_headingFont: string;
  worksheet2_bodyFont: string;

  // Worksheet 3
  worksheet3_coreKeywords: string;
  worksheet3_brandStory: string;
  worksheet3_visualReferences: string;
  worksheet3_priority1: string;
  worksheet3_priority2: string;
  worksheet3_priority3: string;
  worksheet3_constraints: string;
}

const initialFormData: FormData = {
  worksheet1_brandStatus: '',
  worksheet1_targetAudience: '',
  worksheet1_competitiveAdvantage: '',
  worksheet1_personalityKeywords: [],

  worksheet2_colorAxis: '',
  worksheet2_typographyAxis: '',
  worksheet2_layoutAxis: '',
  worksheet2_visualKeywords: '',
  worksheet2_primaryColor: '',
  worksheet2_secondaryColor: '',
  worksheet2_accentColor: '',
  worksheet2_headingFont: '',
  worksheet2_bodyFont: '',

  worksheet3_coreKeywords: '',
  worksheet3_brandStory: '',
  worksheet3_visualReferences: '',
  worksheet3_priority1: '',
  worksheet3_priority2: '',
  worksheet3_priority3: '',
  worksheet3_constraints: '',
};

interface FormContextType {
  formData: FormData;
  updateFormData: (key: keyof FormData, value: any) => void;
  resetFormData: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('brandIdentityFormData');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load form data:', error);
      }
    }
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('brandIdentityFormData', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (key: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFormData = () => {
    setFormData(initialFormData);
    localStorage.removeItem('brandIdentityFormData');
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormData must be used within FormProvider');
  }
  return context;
}
