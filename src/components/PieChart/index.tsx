import { WebView } from "react-native-webview";

/* pieChart with vanilla js in webview to circumvent me
solving impossible errors with react-native-chart-kit */
const PieChart = () => {
  const javascript = `
    const pie = document.getElementById("pie");
  `;

  const style = {
    body: `
      background-color: #fff;
    `,
    pie: `
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient( 
      red 6deg, orange 6deg 18deg, yellow 18deg 45deg, 
      green 45deg 110deg, blue 110deg 200deg, purple 200deg);
    `,
  };

  const html = `
  <!DOCTYPE html style="padding: 0; margin: 0;">
    <body style="${style.body}">
      <div id="pie" style="${style.pie}"></div>
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
