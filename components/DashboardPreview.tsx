
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Erholung', A: 85, fullMark: 100 },
  { subject: 'Athletik', A: 92, fullMark: 100 },
  { subject: 'Haut & Haare', A: 78, fullMark: 100 },
  { subject: 'Kognition', A: 88, fullMark: 100 },
  { subject: 'Hormone', A: 94, fullMark: 100 },
];

interface DashboardPreviewProps {
  lightTheme?: boolean;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

const ScoreItem: React.FC<{ 
  label: string; 
  score: number; 
  color?: string; 
  lightTheme?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}> = ({ label, score, color = "bg-red-600/40", lightTheme, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center justify-between mb-5 p-4 rounded-[1.5rem] cursor-pointer transition-all duration-300 ${
      isActive ? 'bg-zinc-50 border border-black/[0.03] shadow-sm' : 'hover:bg-zinc-50/50'
    }`}
  >
    <div className="flex flex-col">
      <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest">{label}</span>
      <span className={`text-xl font-black ${isActive ? 'text-red-600' : 'text-[#333333]'}`}>{score}%</span>
    </div>
    <div className="w-40 h-1 bg-zinc-100 rounded-full overflow-hidden">
      <div 
        className={`${isActive ? 'bg-red-600/60' : color} h-full transition-all duration-1000`} 
        style={{ width: `${score}%` }} 
      />
    </div>
  </div>
);

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ 
  lightTheme = true, 
  selectedCategory = 'Athletik',
  onSelectCategory 
}) => {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between px-2">
        <div className="space-y-1">
          <h3 className={`text-3xl font-black tracking-tighter ${lightTheme ? 'text-[#333333]' : 'text-white'}`}>Performance Radar</h3>
          <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Klicke für Details</p>
        </div>
        <div className="px-5 py-2 rounded-full bg-zinc-50 border border-black/[0.03] text-zinc-500 text-[9px] font-bold uppercase tracking-widest shadow-sm">
          Optimaler Status
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="h-[300px] w-full relative group">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#e5e7eb" strokeOpacity={0.5} />
              <PolarAngleAxis 
                dataKey="subject" 
                onClick={(tick) => onSelectCategory?.(tick.value)}
                tick={(props) => {
                  const { x, y, payload } = props;
                  const isActive = payload.value === selectedCategory;
                  return (
                    <g transform={`translate(${x},${y})`}>
                      <text
                        x={0}
                        y={0}
                        dy={isActive ? 0 : 4}
                        textAnchor="middle"
                        fill={isActive ? '#d32f2f' : '#9ca3af'}
                        fontSize={isActive ? 11 : 9}
                        fontWeight={isActive ? "900" : "700"}
                        style={{ cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.3s' }}
                        onClick={() => onSelectCategory?.(payload.value)}
                      >
                        {payload.value}
                      </text>
                    </g>
                  );
                }}
              />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#d32f2f"
                strokeWidth={2}
                fill="#d32f2f"
                fillOpacity={0.1}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-[2rem] p-6 border border-black/[0.03] inner-glow">
          <ScoreItem 
            label="Erholung" 
            score={85} 
            isActive={selectedCategory === 'Erholung'} 
            onClick={() => onSelectCategory?.('Erholung')}
          />
          <ScoreItem 
            label="Athletik" 
            score={92} 
            isActive={selectedCategory === 'Athletik'} 
            onClick={() => onSelectCategory?.('Athletik')}
          />
          <ScoreItem 
            label="Haut & Haare" 
            score={78} 
            color="bg-zinc-300" 
            isActive={selectedCategory === 'Haut & Haare'} 
            onClick={() => onSelectCategory?.('Haut & Haare')}
          />
          <ScoreItem 
            label="Kognition" 
            score={88} 
            isActive={selectedCategory === 'Kognition'} 
            onClick={() => onSelectCategory?.('Kognition')}
          />
          <ScoreItem 
            label="Hormone" 
            score={94} 
            isActive={selectedCategory === 'Hormone'} 
            onClick={() => onSelectCategory?.('Hormone')}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
