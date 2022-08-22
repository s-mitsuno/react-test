import mainImage from "../images/biz01.jpg";

export const Swp01 = () => {
  // const stl = { position: 'relative' };
  const stl = { color: "#ed4134" };

  return (
    <div>
      <div className="parent" style={stl}>
        <img src={mainImage} alt="1" width="100%" height="370px" />
        <div className="child">
          <h1> カッコいいフォントの文字列</h1>
        </div>
      </div>
      {/* <div className="child">
        <h1> カッコいいフォントの文字列</h1>
      </div> */}
    </div>
  );
};

// const red = {color: '#ed4134'}

//   return <div style={red}>
//     りんご
//   </div>
