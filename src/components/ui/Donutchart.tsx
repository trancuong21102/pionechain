import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { EChartsOption } from "echarts";

// Define the interface for the data props
interface ChartData {
  name: string;
  value: number; // Represents percentage or value
  color?: string; // Optional color property
}

interface DonutChartProps {
  data: ChartData[];
  width?: string;
  height?: string;
  logoUrl?: string; // URL of the logo image
}

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  width = "100%",
  height = "400px",
  logoUrl = "/pione-chain/logo_rounded_full.png",
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      let myChart: echarts.ECharts | null = null;
      
      const initChart = async () => {
        const echarts = await import("echarts");
        if (!chartRef.current) return;
        myChart = echarts.init(chartRef.current);

        // Determine if it's mobile (e.g., screen width < 768px)
        const isMobile = window.innerWidth < 768;

        // ECharts options
        const option: EChartsOption = {
          tooltip: {
            trigger: "item",
            borderColor: "none",
          },
          graphic: [
            {
              type: "image",
              style: {
                image: logoUrl,
                width: isMobile ? 80 : 120,
                height: isMobile ? 80 : 120,
              },
              left: "center",
              top: "middle",
              z: 10,
            },
          ],
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: isMobile ? ["40%", "75%"] : ["40%", "70%"],
              avoidLabelOverlap: false,
              padAngle: 5,
              itemStyle: {
                borderRadius: 10,
              },
              label: {
                show: !isMobile,
                position: "outside",
                formatter: "{b}",
                fontSize: 12,
                color: "#FFFFFF",
                fontWeight: "bold",
              },
              labelLine: {
                show: !isMobile,
                length: 30,
                length2: 15,
                lineStyle: {
                  width: 3,
                },
              },
              emphasis: {
                label: {
                  show: false,
                },
              },
              data: data.map((item) => ({
                name: item.name,
                value: item.value,
                itemStyle: item.color ? { color: item.color } : {},
              })),
            },
          ],
        };

        myChart.setOption(option);

        // Handle window resize
        const handleResize = () => {
          myChart?.resize();
          const newIsMobile = window.innerWidth < 768;
          if (newIsMobile !== isMobile) {
            myChart?.setOption({
              graphic: [
                {
                  style: {
                    width: newIsMobile ? 75 : 100,
                    height: newIsMobile ? 75 : 100,
                  },
                },
              ],
              series: [
                {
                  radius: newIsMobile ? ["20%", "75%"] : ["40%", "70%"],
                  label: { show: !newIsMobile },
                  labelLine: { show: !newIsMobile },
                },
              ],
            });
          }
        };

        window.addEventListener("resize", handleResize);
        
        return handleResize;
      };

      let resizeHandler: (() => void) | undefined;
      initChart().then(handler => {
        resizeHandler = handler;
      });

      // Cleanup on component unmount
      return () => {
        myChart?.dispose();
        if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      };
    }
  }, [data, logoUrl]);

  return (
    <div
      ref={chartRef}
      style={{ width, height }}
      className="donut-chart-container"
    />
  );
};

export default DonutChart;
