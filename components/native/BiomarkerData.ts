// Category-specific biomarker data
export const biomarkersByCategory = {
  Sports: [
    { 
      name: 'Ferritin', 
      value: '142', 
      unit: 'ng/ml', 
      status: 'Optimal', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 118 },
        { period: 'Q2', value: 135 },
        { period: 'Q3', value: 142 }
      ]
    },
    { 
      name: 'Creatine Kinase', 
      value: '156', 
      unit: 'U/L', 
      status: 'Stabil', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 142 },
        { period: 'Q2', value: 148 },
        { period: 'Q3', value: 156 }
      ]
    },
    { 
      name: 'Testosterone', 
      value: '682', 
      unit: 'ng/dL', 
      status: 'Optimal', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 620 },
        { period: 'Q2', value: 655 },
        { period: 'Q3', value: 682 }
      ]
    },
    { 
      name: 'Lactate', 
      value: '1.2', 
      unit: 'mmol/L', 
      status: 'Optimal', 
      trend: 'down',
      history: [
        { period: 'Q1', value: 1.8 },
        { period: 'Q2', value: 1.5 },
        { period: 'Q3', value: 1.2 }
      ]
    },
  ],
  Recovery: [
    { 
      name: 'Cortisol', 
      value: '14', 
      unit: 'ng/ml', 
      status: 'Optimal', 
      trend: 'down',
      history: [
        { period: 'Q1', value: 18 },
        { period: 'Q2', value: 16 },
        { period: 'Q3', value: 14 }
      ]
    },
    { 
      name: 'Magnesium', 
      value: '0.94', 
      unit: 'mmol/l', 
      status: 'Stabil', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 0.85 },
        { period: 'Q2', value: 0.89 },
        { period: 'Q3', value: 0.94 }
      ]
    },
    { 
      name: 'HRV', 
      value: '68', 
      unit: 'ms', 
      status: 'Optimal', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 52 },
        { period: 'Q2', value: 61 },
        { period: 'Q3', value: 68 }
      ]
    },
    { 
      name: 'CRP', 
      value: '0.4', 
      unit: 'mg/L', 
      status: 'Optimal', 
      trend: 'down',
      history: [
        { period: 'Q1', value: 1.2 },
        { period: 'Q2', value: 0.8 },
        { period: 'Q3', value: 0.4 }
      ]
    },
  ],
  Dermis: [
    { 
      name: 'Vitamin D', 
      value: '65', 
      unit: 'ng/ml', 
      status: 'Optimal', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 42 },
        { period: 'Q2', value: 54 },
        { period: 'Q3', value: 65 }
      ]
    },
    { 
      name: 'Collagen', 
      value: '98', 
      unit: 'μg/ml', 
      status: 'Optimal', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 82 },
        { period: 'Q2', value: 91 },
        { period: 'Q3', value: 98 }
      ]
    },
    { 
      name: 'Zinc', 
      value: '112', 
      unit: 'μg/dL', 
      status: 'Stabil', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 98 },
        { period: 'Q2', value: 105 },
        { period: 'Q3', value: 112 }
      ]
    },
    { 
      name: 'Omega-3 Index', 
      value: '8.2', 
      unit: '%', 
      status: 'Optimal', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 6.5 },
        { period: 'Q2', value: 7.4 },
        { period: 'Q3', value: 8.2 }
      ]
    },
  ],
  Cognition: [
    { 
      name: 'B12', 
      value: '586', 
      unit: 'pg/ml', 
      status: 'Optimal', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 445 },
        { period: 'Q2', value: 512 },
        { period: 'Q3', value: 586 }
      ]
    },
    { 
      name: 'Homocysteine', 
      value: '7.2', 
      unit: 'μmol/L', 
      status: 'Optimal', 
      trend: 'down',
      history: [
        { period: 'Q1', value: 11.5 },
        { period: 'Q2', value: 9.2 },
        { period: 'Q3', value: 7.2 }
      ]
    },
    { 
      name: 'Folate', 
      value: '18.4', 
      unit: 'ng/ml', 
      status: 'Optimal', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 12.8 },
        { period: 'Q2', value: 15.6 },
        { period: 'Q3', value: 18.4 }
      ]
    },
    { 
      name: 'BDNF', 
      value: '24.8', 
      unit: 'ng/ml', 
      status: 'Stabil', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 19.2 },
        { period: 'Q2', value: 22.1 },
        { period: 'Q3', value: 24.8 }
      ]
    },
  ],
  Hormones: [
    { 
      name: 'TSH', 
      value: '1.8', 
      unit: 'mIU/L', 
      status: 'Optimal', 
      trend: 'down',
      history: [
        { period: 'Q1', value: 2.8 },
        { period: 'Q2', value: 2.2 },
        { period: 'Q3', value: 1.8 }
      ]
    },
    { 
      name: 'Free T3', 
      value: '3.4', 
      unit: 'pg/ml', 
      status: 'Optimal', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 2.8 },
        { period: 'Q2', value: 3.1 },
        { period: 'Q3', value: 3.4 }
      ]
    },
    { 
      name: 'DHEA-S', 
      value: '425', 
      unit: 'μg/dL', 
      status: 'Optimal', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 365 },
        { period: 'Q2', value: 395 },
        { period: 'Q3', value: 425 }
      ]
    },
    { 
      name: 'IGF-1', 
      value: '245', 
      unit: 'ng/ml', 
      status: 'Stabil', 
      trend: 'up',
      history: [
        { period: 'Q1', value: 218 },
        { period: 'Q2', value: 232 },
        { period: 'Q3', value: 245 }
      ]
    },
  ],
};
