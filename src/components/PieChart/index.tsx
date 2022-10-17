import { WebView } from "react-native-webview";

/* pieChart with vanilla js in webview to circumvent me
solving impossible errors with react-native-chart-kit */
const PieChart = ({ dataArray, bgColor }) => {
  // getting the total sum of all data
  const sum = dataArray.reduce((accumulator: number, object: any) => {
    // accumulator/prevValue + new value
    return accumulator + object.value;
  }, 0);
  const sumDividedBy360: number = 360 / sum;

  // generating conic gradient from dataArray
  let startDeg: number = 0;
  let endDeg: number = 0;
  let pieConicGradient = [];
  dataArray.forEach((slice: any, i: number) => {
    const slicePercentage = sumDividedBy360 * slice.value;
    const sliceColor = dataArray[i].color;

    if (i == 0) {
      endDeg = slicePercentage;
    } else {
      startDeg = endDeg;
      endDeg = startDeg + slicePercentage;
    }
    pieConicGradient.push(`${sliceColor} ${startDeg}deg ${endDeg}deg`);
  });

  const javascript = `
    const pie = document.getElementById("pie");
  `;

  const style = `
    body {
      background-color: ${bgColor};
    }
    #pie {
      display: grid;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: conic-gradient(${pieConicGradient.join(",")});
    }
    #pieCenter {
      background-color: #fff;
      border-radius: 50%;
      width: 60%;
      height: 60%;
      z-index: 1;
      place-self: center center;
    }
  `;

  const html = `
  <!DOCTYPE html style="padding: 0; margin: 0;">
    <body>
      <style>${style}</style>
      <div id="pie"">
        <div id="pieCenter"></div>
      </div>
      <script>
        ${javascript}
      </script>
    </body>
  <html>
`;

  return (
    <WebView
      style={{ maxWidth: 300, maxHeight: 300 }}
      source={{
        html: html,
      }}
      scrollEnabled={false}
      javaScriptEnabled={true}
      // for caching
      domStorageEnabled={true}
    />
  );
};

export default PieChart;
