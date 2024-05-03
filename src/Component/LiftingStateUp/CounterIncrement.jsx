
const CounterIncrement = ({incrementOnCick}) => {
    console.log("incrementOnCick",incrementOnCick);

  return   <button onClick={incrementOnCick}>Increment</button>

}

export default CounterIncrement