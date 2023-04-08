export const Reload = (props) => {
  const { on, setOn } = props;
  const A = 0;
  const B = 0;
  const array = [];
  const onClickA = () => {
    for (let i = 1; i <= 2000; i++) {
      const AA = A + i;
      // console.log(AA);
      for (let s = 1; s <= 2000; s++) {
        const BB = B + s;
        // console.log(BB);
        const dev = AA % BB;
        // console.log(dev);
        // setOn((on) => on + dev);
        array.push(dev);
      }
    }
    const S = array.reduce((sum, e) => {
      return sum + e;
    }, 0);
    console.log(S);
  };

  return (
    <div>
      <button onClick={onClickA}>5</button>
    </div>
  );
};
