
import React from 'react';

export interface BiomarkerDetail {
  name: string;
  value: number;
  max: number;
  unit: string;
  status: 'Optimal' | 'Stabil' | 'Kritisch' | 'Verbesserung';
  trend: 'up' | 'down' | 'stable';
  dataKey: string;
  definition?: string;
  referenceRange?: string;
  categories: string[]; // List of categories this marker belongs to
}

export interface DiagnosticSprint {
  label: string;
  value: string;
  impact: 'pos' | 'neg' | 'neut';
}

export interface TrendPoint {
  period: string;
  score: number;
  stravaLoad?: number; // External Training Stress Score
  [key: string]: number | string | undefined;
}

export interface StravaLoadPoint {
  period: string;
  load: number; // 0-100 normalized
}

export interface CategoryData {
  label: string;
  score: number;
  icon: React.ReactNode;
  summary: string;
  detailedAnalysis: string;
  sprints: DiagnosticSprint[]; // High-density short insights
  trendInsight: string;
  trendDeepDive: string;
  markers: BiomarkerDetail[];
  color: string;
  bgGradient: string;
  dataKey: string;
  trendHistory: TrendPoint[];
  sparkline: number[]; 
}
