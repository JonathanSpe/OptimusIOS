
import React from 'react';
import { Moon, Activity, Sparkles, Brain, Wind } from 'lucide-react';
import { CategoryData, StravaLoadPoint } from './DashboardTypes';

export const globalStravaLoad: StravaLoadPoint[] = [
  { period: 'Q3 2023', load: 45 },
  { period: 'Q4 2023', load: 58 },
  { period: 'Q1 2024', load: 72 },
  { period: 'Q2 2024', load: 88 },
];

export const categoryData: Record<string, CategoryData> = {
  'Recovery': {
    label: 'Recovery', score: 88, dataKey: 'Recovery', icon: React.createElement(Moon, { size: 20 }),
    summary: 'Optimierung der regenerativen Homöostase.',
    detailedAnalysis: 'Your systemic recovery profile exhibits high efficiency in homeostatic restoration. We observe a significant stabilization in nocturnal heart rate variability (HRV), which correlates strongly with the reduction of cortisol spikes during late-phase REM cycles.',
    sprints: [
      { label: 'ZNS State', value: 'Parasympathetic Dom.', impact: 'pos' },
      { label: 'HRV Delta', value: '+12ms vs Baseline', impact: 'pos' },
      { label: 'Cortisol', value: 'Morning Spike Low', impact: 'pos' }
    ],
    trendInsight: 'HRV-Variabilität korreliert positiv mit reduzierter Cortisol-Exposition.',
    trendDeepDive: 'In den letzten 12 Monaten zeigt sich eine Stabilisierung des vegetativen Nervensystems.',
    color: '#3b82f6', bgGradient: 'from-blue-50/40 via-white to-white',
    sparkline: [72, 78, 84, 88],
    markers: [
      { 
        name: 'Cortisol', value: 14, max: 25, unit: 'ng/ml', status: 'Optimal', trend: 'down', dataKey: 'Cortisol',
        definition: 'Primary stress hormone.',
        referenceRange: '5 - 23 ng/ml',
        categories: ['Recovery', 'Hormones']
      },
      { 
        name: 'Magnesium', value: 0.94, max: 1.1, unit: 'mmol/l', status: 'Stabil', trend: 'up', dataKey: 'Magnesium',
        definition: 'Essential electrolyte.',
        referenceRange: '0.7 - 1.05 mmol/l',
        categories: ['Recovery', 'Sports', 'Cognition']
      },
      { 
        name: 'hs-CRP', value: 0.8, max: 5.0, unit: 'mg/l', status: 'Optimal', trend: 'stable', dataKey: 'CRP',
        definition: 'Systemic micro-inflammation.',
        referenceRange: '< 3.0 mg/l',
        categories: ['Recovery', 'Sports']
      },
      { 
        name: 'Vitamin D', value: 65, max: 100, unit: 'ng/ml', status: 'Stabil', trend: 'up', dataKey: 'VitaminD',
        definition: 'Immune modulation.',
        referenceRange: '30 - 100 ng/ml',
        categories: ['Recovery', 'Hormones', 'Hair & Skin']
      }
    ],
    trendHistory: [
      { period: 'Q3 2023', score: 72, stravaLoad: 45, Cortisol: 65, Magnesium: 70, CRP: 60, VitaminD: 50 },
      { period: 'Q4 2023', score: 78, stravaLoad: 58, Cortisol: 70, Magnesium: 75, CRP: 72, VitaminD: 55 },
      { period: 'Q1 2024', score: 84, stravaLoad: 72, Cortisol: 82, Magnesium: 80, CRP: 85, VitaminD: 60 },
      { period: 'Q2 2024', score: 88, stravaLoad: 88, Cortisol: 88, Magnesium: 85, CRP: 92, VitaminD: 65 },
    ]
  },
  'Sports': {
    label: 'Athletics', score: 94, dataKey: 'Athletics', icon: React.createElement(Activity, { size: 20 }),
    summary: 'Maximierung der aeroben Kapazität.',
    detailedAnalysis: 'Athletic performance metrics indicate an elite-level cellular respiration capacity. The primary driver is your superior Ferritin-reserve.',
    sprints: [
      { label: 'O2 Capacity', value: '98% Efficiency', impact: 'pos' },
      { label: 'Cellular Res.', value: 'Optimal ATP', impact: 'pos' },
      { label: 'Muscular Rec.', value: 'Low CK Decay', impact: 'pos' }
    ],
    trendInsight: 'Kontinuierlicher Anstieg des Ferritins bei Peak-Hämoglobin-Sättigung.',
    trendDeepDive: 'Linearen Aufwärtstrend seit der Anpassung der Resorptions-Strategie.',
    color: '#ef4444', bgGradient: 'from-red-50/40 via-white to-white',
    sparkline: [75, 82, 89, 94],
    markers: [
      { 
        name: 'Ferritin', value: 142, max: 200, unit: 'ng/ml', status: 'Optimal', trend: 'up', dataKey: 'Ferritin',
        definition: 'Intracellular iron storage.',
        referenceRange: '30 - 400 ng/ml',
        categories: ['Sports', 'Hair & Skin']
      },
      { 
        name: 'Hämoglobin', value: 16.2, max: 18.0, unit: 'g/dl', status: 'Optimal', trend: 'up', dataKey: 'Hämoglobin',
        definition: 'Red blood cell protein.',
        referenceRange: '13.5 - 17.5 g/dl',
        categories: ['Sports']
      },
      { 
        name: 'Kreatinkinase', value: 145, max: 190, unit: 'U/l', status: 'Stabil', trend: 'down', dataKey: 'Kreatinkinase',
        definition: 'Muscle damage enzyme.',
        referenceRange: '< 190 U/l',
        categories: ['Sports', 'Recovery']
      },
      { 
        name: 'Magnesium', value: 0.94, max: 1.1, unit: 'mmol/l', status: 'Stabil', trend: 'up', dataKey: 'Magnesium',
        definition: 'Muscle contraction.',
        referenceRange: '0.7 - 1.05 mmol/l',
        categories: ['Sports', 'Recovery', 'Cognition']
      }
    ],
    trendHistory: [
      { period: 'Q3 2023', score: 75, stravaLoad: 45, Ferritin: 60, Hämoglobin: 82, Kreatinkinase: 70, Magnesium: 65 },
      { period: 'Q4 2023', score: 82, stravaLoad: 58, Ferritin: 72, Hämoglobin: 85, Kreatinkinase: 75, Magnesium: 70 },
      { period: 'Q1 2024', score: 89, stravaLoad: 72, Ferritin: 85, Hämoglobin: 88, Kreatinkinase: 82, Magnesium: 78 },
      { period: 'Q2 2024', score: 94, stravaLoad: 88, Ferritin: 92, Hämoglobin: 95, Kreatinkinase: 88, Magnesium: 84 },
    ]
  },
  'Hair & Skin': {
    label: 'Dermis', score: 79, dataKey: 'Dermis', icon: React.createElement(Sparkles, { size: 20 }),
    summary: 'Strukturelle Integrität des Integumentsystems.',
    detailedAnalysis: 'Dermatological health is entering a stable phase, with significant improvements in Zinc bioavailability.',
    sprints: [
      { label: 'Collagen Syn', value: 'High Synthesis', impact: 'pos' },
      { label: 'Oxidative Stress', value: 'Neutralized', impact: 'pos' },
      { label: 'Follicle Health', value: 'Stabilized', impact: 'neut' }
    ],
    trendInsight: 'Stabilisierung der Spurenelemente reduziert oxidativen Stress.',
    trendDeepDive: 'Optimierung der Kupfer-Zink-Balance treibt den Score.',
    color: '#f59e0b', bgGradient: 'from-amber-50/40 via-white to-white',
    sparkline: [68, 72, 75, 79],
    markers: [
      { 
        name: 'Zink', value: 102, max: 120, unit: 'µg/dl', status: 'Stabil', trend: 'stable', dataKey: 'Zink',
        definition: 'Skin regeneration.',
        referenceRange: '70 - 120 µg/dl',
        categories: ['Hair & Skin', 'Hormones']
      },
      { 
        name: 'Biotin', value: 680, max: 800, unit: 'ng/l', status: 'Optimal', trend: 'up', dataKey: 'Biotin',
        definition: 'Keratin production.',
        referenceRange: '200 - 800 ng/l',
        categories: ['Hair & Skin']
      },
      { 
        name: 'Selen', value: 115, max: 140, unit: 'µg/l', status: 'Stabil', trend: 'up', dataKey: 'Selen',
        definition: 'Antioxidant defense.',
        referenceRange: '50 - 150 µg/l',
        categories: ['Hair & Skin', 'Cognition']
      },
      { 
        name: 'Ferritin', value: 142, max: 200, unit: 'ng/ml', status: 'Optimal', trend: 'up', dataKey: 'Ferritin',
        definition: 'Iron stores.',
        referenceRange: '30 - 400 ng/ml',
        categories: ['Hair & Skin', 'Sports']
      }
    ],
    trendHistory: [
      { period: 'Q3 2023', score: 68, stravaLoad: 45, Zink: 65, Biotin: 70, Selen: 60, Ferritin: 60 },
      { period: 'Q4 2023', score: 72, stravaLoad: 58, Zink: 70, Biotin: 75, Selen: 65, Ferritin: 72 },
      { period: 'Q1 2024', score: 75, stravaLoad: 72, Zink: 75, Biotin: 82, Selen: 68, Ferritin: 85 },
      { period: 'Q2 2024', score: 79, stravaLoad: 88, Zink: 78, Biotin: 88, Selen: 72, Ferritin: 92 },
    ]
  },
  'Cognition': {
    label: 'Cognition', score: 91, dataKey: 'Cognition', icon: React.createElement(Brain, { size: 20 }),
    summary: 'Neuronale Plastizität und Homöostase.',
    detailedAnalysis: 'Cognitive performance is currently in a high-efficiency state. The core driver is your Omega-3 index.',
    sprints: [
      { label: 'Neural Speed', value: 'Optimal Myelin', impact: 'pos' },
      { label: 'Plasticity', value: 'High BDNF Context', impact: 'pos' },
      { label: 'Methylation', value: 'Cycle Normal', impact: 'pos' }
    ],
    trendInsight: 'Omega-3 Sättigung profitiert die neuronale Resilienz.',
    trendDeepDive: 'Höchste Stabilität im gesamten Profil durch konstante Zufuhr.',
    color: '#8b5cf6', bgGradient: 'from-purple-50/40 via-white to-white',
    sparkline: [82, 85, 89, 91],
    markers: [
      { 
        name: 'Vitamin B12', value: 520, max: 600, unit: 'pg/ml', status: 'Stabil', trend: 'up', dataKey: 'B12',
        definition: 'Myelin sheath integrity.',
        referenceRange: '200 - 900 pg/ml',
        categories: ['Cognition']
      },
      { 
        name: 'Omega-3', value: 8.4, max: 12.0, unit: '%', status: 'Optimal', trend: 'up', dataKey: 'Omega3',
        definition: 'Neural cell membranes.',
        referenceRange: '8% - 12%',
        categories: ['Cognition', 'Recovery']
      },
      { 
        name: 'Folsäure', value: 14.2, max: 20.0, unit: 'ng/ml', status: 'Optimal', trend: 'stable', dataKey: 'Folate',
        definition: 'DNA repair.',
        referenceRange: '4 - 20 ng/ml',
        categories: ['Cognition']
      },
      { 
        name: 'Magnesium', value: 0.94, max: 1.1, unit: 'mmol/l', status: 'Stabil', trend: 'up', dataKey: 'Magnesium',
        definition: 'Synaptic plasticity.',
        referenceRange: '0.7 - 1.05 mmol/l',
        categories: ['Cognition', 'Sports', 'Recovery']
      }
    ],
    trendHistory: [
      { period: 'Q3 2023', score: 82, stravaLoad: 45, B12: 78, Omega3: 80, Folate: 75, Magnesium: 70 },
      { period: 'Q4 2023', score: 85, stravaLoad: 58, B12: 82, Omega3: 85, Folate: 78, Magnesium: 75 },
      { period: 'Q1 2024', score: 89, stravaLoad: 72, B12: 88, Omega3: 90, Folate: 82, Magnesium: 80 },
      { period: 'Q2 2024', score: 91, stravaLoad: 88, B12: 92, Omega3: 94, Folate: 85, Magnesium: 85 },
    ]
  },
  'Hormones': {
    label: 'Hormones', score: 92, dataKey: 'Hormones', icon: React.createElement(Wind, { size: 20 }),
    summary: 'Endokrine Feinabstimmung.',
    detailedAnalysis: 'The endocrine system is operating in a superior anabolic state. Testosterone production is robust.',
    sprints: [
      { label: 'Anabolic Cap', value: 'Maximum Res.', impact: 'pos' },
      { label: 'HPG Axis', value: 'High Resilience', impact: 'pos' },
      { label: 'Estradiol Bal', value: 'Stabilized', impact: 'pos' }
    ],
    trendInsight: 'Testosteron-Resynthese korreliert mit Schlafqualität.',
    trendDeepDive: 'Massive Stabilisierung der endokrinen Achse seit Q1 23.',
    color: '#10b981', bgGradient: 'from-emerald-50/40 via-white to-white',
    sparkline: [80, 86, 89, 92],
    markers: [
      { 
        name: 'Testosteron', value: 840, max: 1100, unit: 'ng/dl', status: 'Optimal', trend: 'up', dataKey: 'Testosteron',
        definition: 'Vitality and muscle.',
        referenceRange: '300 - 1000 ng/dl',
        categories: ['Hormones']
      },
      { 
        name: 'Estradiol', value: 28, max: 50, unit: 'pg/ml', status: 'Stabil', trend: 'stable', dataKey: 'Estradiol',
        definition: 'Estrogenic marker.',
        referenceRange: '10 - 40 pg/ml',
        categories: ['Hormones']
      },
      { 
        name: 'SHBG', value: 34, max: 60, unit: 'nmol/l', status: 'Optimal', trend: 'stable', dataKey: 'SHBG',
        definition: 'Hormone regulator.',
        referenceRange: '18 - 54 nmol/l',
        categories: ['Hormones']
      },
      { 
        name: 'Vitamin D', value: 65, max: 100, unit: 'ng/ml', status: 'Stabil', trend: 'up', dataKey: 'VitaminD',
        definition: 'Hormone synthesis.',
        referenceRange: '30 - 100 ng/ml',
        categories: ['Hormones', 'Recovery', 'Hair & Skin']
      }
    ],
    trendHistory: [
      { period: 'Q3 2023', score: 80, stravaLoad: 45, Testosteron: 75, Estradiol: 82, SHBG: 70, VitaminD: 50 },
      { period: 'Q4 2023', score: 86, stravaLoad: 58, Testosteron: 82, Estradiol: 85, SHBG: 78, VitaminD: 55 },
      { period: 'Q1 2024', score: 89, stravaLoad: 72, Testosteron: 88, Estradiol: 88, SHBG: 85, VitaminD: 60 },
      { period: 'Q2 2024', score: 92, stravaLoad: 88, Testosteron: 94, Estradiol: 90, SHBG: 88, VitaminD: 65 },
    ]
  }
};
