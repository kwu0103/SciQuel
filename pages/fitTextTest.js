import FitText from "../components/FitText/FitText";

function fitTextTest() {
  return (
    <div
      style={{
        width: "512px",
        border: "thin solid black",
        textAlign: "center",
      }}
    >
      <FitText>Fit Text</FitText>
      <FitText>With CSS Variables</FitText>
      <FitText>Some longer text that wants to fit, too...</FitText>
      <FitText>Don&apos;t forget this text!</FitText>
      <FitText>
        It can work with really long text if you really want, but that&apos;s
        gonna be hard to read...
      </FitText>
    </div>
  );
}

export default fitTextTest;
