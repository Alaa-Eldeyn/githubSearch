// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Charts from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  // Create a JSON object to store the chart configurations
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Stars per Language",
        enableSmartLabels: "1",
        startingAngle: "1",
        showPercentValues: "1",
        decimals: "1",
        useDataPlotColorForLabels: "1",
        pieRadius: "40%",
        enableSlicing: true,
        theme: "fusion",
      },
      // Chart Data - from step 2
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
