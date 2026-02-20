import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TrendingUp, TrendingDown } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const CHART_WIDTH = width - 80;
const CHART_HEIGHT = 120;

interface DataPoint {
  period: string;
  value: number;
}

interface Props {
  data: DataPoint[];
  markerName: string;
  unit: string;
}

export default function BiomarkerChart({ data, markerName, unit }: Props) {
  if (!data || data.length === 0) return null;

  const values = data.map(d => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * CHART_WIDTH;
    const y = CHART_HEIGHT - 30 - ((d.value - min) / range) * (CHART_HEIGHT - 50);
    return { x, y, ...d };
  });

  const trend = data[data.length - 1].value > data[0].value ? 'up' : 'down';
  const percentChange = (((data[data.length - 1].value - data[0].value) / data[0].value) * 100).toFixed(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{markerName.toUpperCase()}</Text>
          <Text style={styles.subtitle}>Quarterly Progression</Text>
        </View>
        <View style={styles.changeContainer}>
          {trend === 'up' ? (
            <TrendingUp size={16} stroke="#10B981" />
          ) : (
            <TrendingDown size={16} stroke="#EF4444" />
          )}
          <Text style={[styles.changeText, trend === 'up' ? styles.positive : styles.negative]}>
            {percentChange}%
          </Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        {/* Y-axis */}
        <View style={styles.yAxis}>
          <Text style={styles.axisLabel}>{max.toFixed(1)}</Text>
          <Text style={styles.axisLabel}>{((max + min) / 2).toFixed(1)}</Text>
          <Text style={styles.axisLabel}>{min.toFixed(1)}</Text>
        </View>

        {/* Chart area with gradient background */}
        <View style={styles.chartArea}>
          {/* Grid lines */}
          {[0, 1, 2].map((i) => (
            <View key={i} style={[styles.gridLine, { top: (i * (CHART_HEIGHT - 30)) / 2 }]} />
          ))}

          {/* Gradient fill area */}
          <View style={styles.gradientArea}>
            {points.map((point, i) => (
              i < points.length - 1 && (
                <View
                  key={`fill-${i}`}
                  style={[
                    styles.fillSegment,
                    {
                      position: 'absolute',
                      left: point.x,
                      top: point.y,
                      width: points[i + 1].x - point.x,
                      height: (CHART_HEIGHT - 30) - point.y,
                      opacity: 0.15,
                    }
                  ]}
                />
              )
            ))}
          </View>

          {/* Line segments */}
          {points.map((point, i) => (
            i < points.length - 1 && (
              <View
                key={`line-${i}`}
                style={[
                  styles.lineSegment,
                  {
                    position: 'absolute',
                    left: point.x,
                    top: point.y,
                    width: Math.sqrt(
                      Math.pow(points[i + 1].x - point.x, 2) + 
                      Math.pow(points[i + 1].y - point.y, 2)
                    ),
                    transform: [
                      {
                        rotate: `${Math.atan2(
                          points[i + 1].y - point.y,
                          points[i + 1].x - point.x
                        )}rad`
                      }
                    ]
                  }
                ]}
              />
            )
          ))}

          {/* Data points */}
          {points.map((point, i) => (
            <View key={`point-${i}`}>
              <View
                style={[
                  styles.dataPoint,
                  {
                    position: 'absolute',
                    left: point.x - 6,
                    top: point.y - 6,
                  }
                ]}
              >
                <View style={styles.pointInner} />
              </View>
              
              {/* Value labels */}
              <View
                style={[
                  styles.valueLabel,
                  {
                    position: 'absolute',
                    left: point.x - 25,
                    top: point.y - 32,
                  }
                ]}
              >
                <Text style={styles.valueLabelText}>{point.value}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* X-axis labels */}
      <View style={styles.xAxis}>
        {data.map((d, i) => (
          <View key={i} style={styles.periodContainer}>
            <View style={styles.periodDot} />
            <Text style={styles.periodLabel}>{d.period}</Text>
          </View>
        ))}
      </View>

      {/* Current value display */}
      <View style={styles.currentValueContainer}>
        <Text style={styles.currentLabel}>Current Value</Text>
        <View style={styles.currentValueBox}>
          <Text style={styles.currentValue}>{data[data.length - 1].value}</Text>
          <Text style={styles.currentUnit}>{unit}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 11,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize: 9,
    fontWeight: '700',
    color: '#64748B',
    marginTop: 2,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  changeText: {
    fontSize: 12,
    fontWeight: '900',
  },
  positive: {
    color: '#10B981',
  },
  negative: {
    color: '#EF4444',
  },
  chartContainer: {
    flexDirection: 'row',
    height: CHART_HEIGHT - 30,
    marginBottom: 16,
  },
  yAxis: {
    width: 45,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  axisLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#475569',
  },
  chartArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'rgba(30, 41, 59, 0.3)',
    borderRadius: 12,
    padding: 8,
  },
  gridLine: {
    position: 'absolute',
    left: 8,
    right: 8,
    height: 1,
    backgroundColor: '#1E293B',
  },
  gradientArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  fillSegment: {
    backgroundColor: '#991B1B',
  },
  lineSegment: {
    height: 3,
    backgroundColor: '#991B1B',
    borderRadius: 1.5,
  },
  dataPoint: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#991B1B',
    borderWidth: 3,
    borderColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointInner: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFF',
  },
  valueLabel: {
    backgroundColor: '#1E293B',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  valueLabelText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#FFF',
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 45,
    marginTop: 8,
  },
  periodContainer: {
    alignItems: 'center',
    gap: 4,
  },
  periodDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#991B1B',
  },
  periodLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 1,
  },
  currentValueContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
  },
  currentLabel: {
    fontSize: 9,
    fontWeight: '800',
    color: '#64748B',
    letterSpacing: 1,
    marginBottom: 8,
  },
  currentValueBox: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  currentValue: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFF',
  },
  currentUnit: {
    fontSize: 12,
    fontWeight: '800',
    color: '#991B1B',
  },
});
