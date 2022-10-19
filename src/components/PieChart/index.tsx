import { WebView } from "react-native-webview";
import { View } from "react-native";

/* pieChart with vanilla js in webview to circumvent me
solving impossible errors with react-native-chart-kit */
const PieChart = ({ dataArray, bgColor, widthHeight, centerWidthHeight }) => {
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
    // how it works = conic-gradient([red 0deg 180deg, blue 180deg 360deg.join(", ")])
    pieConicGradient.push(`${sliceColor} ${startDeg}deg ${endDeg}deg`);
  });

  const style = `
    * {
      margin: 0;
      padding: 0;
    }
    body {
      background-color: ${bgColor};
    }
    #pie {
      position: relative;
      width: 100vw;
      height: 100vh;
      border-radius: 50%;
      background: conic-gradient(${pieConicGradient.join(",")});
    }
    #pie::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: ${bgColor};
      width: ${centerWidthHeight};
      height: ${centerWidthHeight};
    }
  `;

  const html = `
  <!DOCTYPE html>
    <body>
      <style>${style}</style>
      <div id="pie""/>
    </body>
  <html>
`;

  return (
    <View style={{ width: widthHeight, height: widthHeight }}>
      <WebView
        source={{
          html: html,
        }}
        scrollEnabled={false}
        javaScriptEnabled={true}
        // for caching
        domStorageEnabled={true}
      />
    </View>
  );
};

export default PieChart;
