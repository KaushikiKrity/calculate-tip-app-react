import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const [people, setPeople] = useState('');
  const [customPercentage, setCustomPercentage] = useState('');
  const [perPerson, setPerPerson] = useState('0.00');
  const [totalAmount, setTotalAmount] = useState('0.00');

  const validate = ()=> {
    if (amount === '' || parseFloat(amount) < 0) {
      const errAmount = document.getElementById("err1")as HTMLParagraphElement
      if(errAmount){
        errAmount.style.visibility="visible"
      }
      return false;
    } else if (people === '' || parseInt(people) < 0) { 
      const errPerson = document.getElementById("err2") as HTMLParagraphElement
      if(errPerson){
        errPerson.style.visibility="visible"
      }
      return false;
    } else {
      return true;
    }
  };

  function reset(): void {
    setAmount('');
    setPeople('');
    setCustomPercentage('');
    setPerPerson('0.00');
    setTotalAmount('0.00');
  }

  const calculateTip = (tipPercentage: number) => {
    if (validate()) {
      const tips = (parseFloat(amount) * tipPercentage) / parseInt(people);
      const tipsRound = tips.toFixed(2);
      const total = (parseFloat(amount) / parseInt(people)) + tips;
      const totalRound = total.toFixed(2);
      setPerPerson(tipsRound);
      setTotalAmount(totalRound);
    }
  };

  const handleCustomTip = () => {
    const customTipPercentage = parseFloat(customPercentage);
    calculateTip(customTipPercentage / 100);
  };
 
  return (
  <body>
    <main>
        <div className="heading">
        <p> SPLI <br/>TIER </p>
        </div>
    <div className = "card">
      <div className = "box1">
        <div className="bill">
          <p> Bill</p>
          <p id ="err1">Can't be Zero or Negative</p>
          <input
            type="number"
            id="amount"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
            <div className = "tipOptions">
              <p>Select Tip %</p>
              <div className = "percentage">
                <div className="tipPercent">
                  <button onClick={() => calculateTip(0.05)}>5%</button>
                  <button onClick={() => calculateTip(0.10)}>10%</button>
                  <button onClick={() => calculateTip(0.15)}>15%</button>
                  <button onClick={() => calculateTip(0.25)}>25%</button>
                  <button onClick={() => calculateTip(0.50)}>50%</button>
                  <div className="tipCustom">
                    <input
                      type="number"
                      placeholder="Custom"
                      value={customPercentage}
                      onChange={(e) => setCustomPercentage(e.target.value)}
                      onClick={handleCustomTip} 
                    />
                  </div>
                  </div>
                </div>
            </div> 
        <div className="bill">
          <div className = "people">
            <p> Number of Person</p>
            <p id ="err2"> Can't be Zero or Negative Value</p>
            <input
            type="number"
            id="people"
            placeholder="0"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className=" box2">
        <div className ="amount">
          <div className="calTip">
            <p> Tip Amount<span className="span1">/person</span></p>
            <div  className="perPerson">
                <div id="perPerson"> ${perPerson}</div>
            </div>
          </div>
          <div className="disTip">
            <p>Total<span className="span1">/person</span> </p>
            <div className=" perPersonTotal">
              <div id="totalAmount">${totalAmount}</div>
            </div>
          </div>
        </div>
          <div className = "reset">
          <button id="button"  onClick={() => reset()}> RESET</button>
      </div>
    </div>
    </div>
    </main>
  </body>
  );
}

export default App;
