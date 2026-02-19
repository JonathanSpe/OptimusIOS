import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TrendingUp, TrendingDown } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const CHART_WIDTH = width - 80;
const CHART_HEIGHT = 100;

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

  // Find min and max for scaling
  const values = data.map(d => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  // Calculate positions
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * CHART_WIDTH;
    const y = CHART_HEIGHT - ((d.value - min) / range) * (CHART_HEIGHT - 20);
    return { x, y, ...d };
  });

  // Create path for line
  const pathData = points.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ');

  const trend = data[data.length - 1].value > data[0].value ? 'up' : 'down';
  const percentChange = (((data[data.length - 1].value - data[0].value) / data[0].value) * 100).toFixed(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{markerName.toUpperCase()} TREND</Text>
        <View style={styles.changeContainer}>
          {trend === 'up' ? (
            <TrendingUp size={12} stroke="#10B981" />
          ) : (
            <TrendingDown size={12} stroke="#991B1B" />
          )}
          <Text style={[styles.changeText, trend === 'up' ? styles.positive : styles.negative]}>
            {percentChange}%
          </Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        {/* Y-axis labels */}
        <View style={styles.yAxis}>
          <Text style={styles.axisLabel}>{max.toFixed(1)}</Text>
          <Text style={styles.axisLabel}>{((max + min) / 2).toFixed(1)}</Text>
          <Text style={styles.axisLabel}>{min.toFixed(1)}</Text>
        </View>

        {/* Chart area */}
        <View style={styles.chartArea}>
          {/* Grid lines */}
          <View style={[styles.gridLine, { top: 0 }]} />
          <View style={[styles.gridLine, { top: CHART_HEIGHT / 2 }]} />
          <View style={[styles.gridLine, { top: CHART_HEIGHT }]} />

          {/* Data line using simple View elements */}
          {points.map((point, i) => (
            i < points.length - 1 && (
              <View
                key={i}
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
            <View
              key={`point-${i}`}
              style={[
                styles.dataPoint,
                {
                  position: 'absolute',
                  left: point.x - 4,
                  top: point.y - 4,
                }
              ]}
            >
              <View style={styles.pointInner} />
            </View>
          ))}

          {/* Value labels */}
          {points.map((point, i) => (
            <View
              key={`label-${i}`}
              style={[
                styles.valueLabel,
                {
                  position: 'absolute',
                  left: point.x - 20,
                  top: point.y - 25,
                }
              ]}
            >
              <Text style={styles.valueLabelText}>
                {point.value}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* X-axis labels */}
      <View style={styles.xAxis}>
        {data.map((d, i) => (
          <Text key={i} style={styles.periodLabel}>{d.period}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 9,
    fontWeight: '900',
    color: '#64748B',
    letterSpacing: 1.5,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  changeText: {
    fontSize: 10,
    fontWeight: '900',
  },
  positive: {
    color: '#10B981',
  },
  negative: {
    color: '#991B1B',
  },
  chartContainer: {
    flexDirection: 'row',
    height: CHART_HEIGHT,
  },
  yAxis: {
    width: 40,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 8,
  },
  axisLabel: {
    fontSize: 8,
    fontWeight: '700',
    color: '#475569',
  },
  chartArea: {
    flex: 1,
    position: 'relative',
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#1E293B',
  },
  lineSegment: {
    height: 2,
    backgroundColor: '#991B1B',
  },
  dataPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#991B1B',
    borderWidth: 2,
    borderColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointInner: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#FFF',
  },
  valueLabel: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: '#1E293B',
    borderRadius: 6,
    width: 40,
    alignItems: 'center',
  },
  valueLabelText: {
    fontSize: 8,
    fontWeight: '800',
    color: '#FFF',
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
    marginLeft: 40,
  },
  periodLabel: {
    fontSize: 9,
    fontWeight: '900',
    color: '#475569',
    letterSpacing: 1,
  },
});
