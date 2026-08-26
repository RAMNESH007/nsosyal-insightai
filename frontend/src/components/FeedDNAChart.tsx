import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataItem {
  label: string;
  value: number;
  color: string;
}

const data: DataItem[] = [
  { label: 'Teknoloji', value: 32, color: '#3B82F6' }, // Blue
  { label: 'Eğlence', value: 24, color: '#10B981' },   // Green
  { label: 'Spor', value: 17, color: '#8B5CF6' },      // Purple
  { label: 'Haber', value: 13, color: '#F59E0B' },     // Yellow
  { label: 'Eğitim', value: 9, color: '#06B6D4' },     // Cyan
  { label: 'Diğer', value: 5, color: '#6B7280' },      // Gray
];

export default function FeedDNAChart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous chart if re-rendering
    d3.select(svgRef.current).selectAll('*').remove();

    const width = 120;
    const height = 120;
    const margin = 5;
    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal<string>()
      .domain(data.map(d => d.label))
      .range(data.map(d => d.color));

    const pie = d3.pie<DataItem>()
      .value(d => d.value)
      .sort(null);

    const arc = d3.arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(radius * 0.6) // Creates the donut hole
      .outerRadius(radius);

    const arcs = svg.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label))
      .attr('stroke', '#111827') // match background for gap effect
      .style('stroke-width', '2px')
      .style('transition', 'all 0.3s ease')
      .on('mouseover', function() {
        d3.select(this).style('opacity', 0.8).style('transform', 'scale(1.05)');
      })
      .on('mouseout', function() {
        d3.select(this).style('opacity', 1).style('transform', 'scale(1)');
      });

  }, []);

  return (
    <div className="flex items-center justify-center">
      <svg ref={svgRef}></svg>
    </div>
  );
}
