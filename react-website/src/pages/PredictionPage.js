import React,{useState} from 'react'
import {ApartmentList} from '../ApartmentList'
import ApartmentItem from '../components/ApartmentItem'
import '../styles/Predictionpage.css'
import Octave from '../assets/octave.jpeg'
import threeOneNine from '../assets/309.jpeg'
import threeTen from '../assets/310.jpeg'
import HERE from '../assets/HERE.jpeg'
import HUB from '../assets/HUB.jpeg'
import oneZeroOne from '../assets/101.jpeg'
import oneZeroTwo from '../assets/102.jpeg'
import oneZeroFive from '../assets/105.jpeg'
import oneZeroSeven from '../assets/107.jpeg'
import oneZeroNine from '../assets/109.jpeg'
import oneTen from '../assets/110.jpeg'
import twoZeroOne from '../assets/201.jpeg'
import twoZeroThree from '../assets/203.jpeg'
import twoZeroSeven from '../assets/207.jpeg'
import twoTwelve from '../assets/212.jpeg'
import threeZeroOne from '../assets/301.jpeg'
import threeZeroTwo from '../assets/302.jpeg'
import threeZeroFive from '../assets/305.jpeg'
import threeZeroEight from '../assets/308.jpeg'
import threeEleven from '../assets/311.jpeg'
import fourZeroOne from '../assets/401.jpeg'
import fourZeroThree from '../assets/403.jpeg'
import fourZeroFive from '../assets/405.jpeg'
import fourZeroSix from '../assets/406.jpeg'
import fourZeroEightS from '../assets/408S.jpeg'
import fourZeroEightW from '../assets/408W.png'
import fiveZeroEight from '../assets/508.jpeg'
import fiveTen from '../assets/510.jpeg'
import sixZeroOne from '../assets/601.jpeg'
import sixZeroOneS from '../assets/601S.jpeg'
import sixZeroThree from '../assets/603.jpeg'
import sixZeroFour from '../assets/604.jpeg'
import sixZeroFive from '../assets/605.webp'
import sixZeroSeven from '../assets/607.jpeg'
import sevenHundred from '../assets/700.jpeg'
import sevenZeroOne from '../assets/701.jpeg'
import sevenZeroSeven from '../assets/707.jpeg'
import eightZeroThree from '../assets/803.jpeg'
import nineZeroThree from '../assets/903.jpeg'
import nineOneThree from '../assets/913.jpeg'
import elevenZeroThree from '../assets/1103.jpeg'

function PredictionPage() {
  const [showOctave4, setShowOctave4]=useState(false)
  const [showthreeOneNine2, setShowthreeOneNine2]=useState(false)
  const [showthreeOneNine4, setShowthreeOneNine4]=useState(false)
  const [here2, setHere2]=useState(false)
  const [here42, setHere42]=useState(false)
  const [here44, setHere44]=useState(false)

  const [twoOneTwo2, setTwoOneTwo2]=useState(false)
  const [twoOneTwo3, setTwoOneTwo3]=useState(false)
  const [twoOneTwo4, setTwoOneTwo4]=useState(false)
  const [loft542, setLoft542]=useState(false)
  const [loft544, setLoft544]=useState(false)
  const [oneZeroOne2, set1012]=useState(false)
  const [oneZeroOne3, set1013]=useState(false)
  const [oneZeroOne4, set1014]=useState(false)
  const [oneZeroNine1, set109]=useState(false)
  const [twoZeroSeven1, set207]=useState(false)
  const [threeZeroFive1, set305]=useState(false)
  const [threeEleven3, setThreeEleven3]=useState(false)
  const [threeEleven4, setThreeEleven4]=useState(false)
  const [eightZeroThree1, set803]=useState(false)
  const [nineOneThreeA, set913A]=useState(false)
  const [nineOneThreeB, set913B]=useState(false)
  const [oneZeroSeven1, set107]=useState(false)
  const [oneTen1, set110]=useState(false)
  const [twoZeroOne1, set201]=useState(false)
  const [twoZeroThree1, set203]=useState(false)
  const [threeZeroOne1, set301]=useState(false)
  const [threeZeroTwo1, set302]=useState(false)
  const [threeZeroThree1, set303]=useState(false)
  const [threeZeroEight1, set308]=useState(false)
  const [fourZeroOne1, set401]=useState(false)
  const [fourZeroThree1, set403]=useState(false)
  const [fourZeroFive1, set4051]=useState(false)
  const [fourZeroFive2, set4052]=useState(false)
  const [fourZeroSix1, set406]=useState(false)
  const [fourZeroEightS1, set408S1]=useState(false)
  const [fourZeroEightS2, set408S2]=useState(false)
  const [fourZeroEightW1, set408W1]=useState(false)
  const [fourZeroEightW3, set408W3]=useState(false)
  const [fiveZeroEight1, set5081]=useState(false)
  const [fiveZeroEight2, set5082]=useState(false)
  const [fiveTen1, set510]=useState(false)
  const [sixZeroOneW1, set601W]=useState(false)
  const [sixZeroOneS1, set601S]=useState(false)
  const [sixZeroThree1, set603]=useState(false)
  const [sixZeroFour1, set604]=useState(false)
  const [sixZeroFive1, set605]=useState(false)
  const [sixZeroSeven1, set607]=useState(false)
  const [seven1, set7001]=useState(false)
  const [seven2, set7002]=useState(false)
  const [sevenZeroOne1, set7011]=useState(false)
  const [seveZeroOne2, set7012]=useState(false)
  const [sevenZeroSeven1, set707]=useState(false)
  const [nineZeroTwo1, set9021]=useState(false)
  const [nineZeroTwo2, set9022]=useState(false)
  const [elevenZeroThree2, set11032]=useState(false)
  const [elevenZeroThree3, set11033]=useState(false)
  const [elevenZeroThree5, set11035]=useState(false)



  return (
    <div className='prediction'>
        <h1 class="aptTitle">Apartments</h1>
        {/* <div className="apartmentlist">
            {ApartmentList.map((MenuItem, key) => {
                return (
                    <ApartmentItem 
                    key={key}
                        image={MenuItem.image} 
                        name={MenuItem.name} 
                        current_price={MenuItem.current_price} 
                        predicted_price={MenuItem.predicted_prices}
                    />
                );
            })}
        </div> */}
        <div class="scrolling-wrapper">
            <div class="card">
                <p>Octave</p>
                <button onClick={()=>setShowOctave4(!showOctave4)} id="octave4">4 Bedroom</button>
                <p></p>
                <img src={Octave} class="image" alt="Octave"></img>
                {
                    showOctave4?<table id="octave4T" class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$903.67</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$965.83</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$1058.13</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>
            <div class="card">
                <p>309 Apartments</p>
                <button onClick={()=>setShowthreeOneNine2(!showthreeOneNine2)} id="threeOneNine2">2 Bedroom</button>
                <p></p>
                <button onClick={()=>setShowthreeOneNine4(!showthreeOneNine4)} id="threeOneNine4">4 Bedroom</button>
                <p></p>
                <img src={threeOneNine} class="image" alt="309"></img>
                {
                    showthreeOneNine2?<table id="threeOneNine2T" class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$1143.23</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$1227.77</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$1315.93</td>
                            </tr>
                        </tbody>
                    </table>:null
                }  
                { 
                    showthreeOneNine4?<table id="threeOneNine4T" class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$978.11</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$1047.53</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$1129.14</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>
            {/* Data Issue */}
            {/* <div class="card">
            <p>310 Burnham Apartments</p>
                <p>Coming Soon...</p>
                <img src={threeTen} class="image" alt="310"></img>
            </div> */}
            <div class="card">
            <p>HERE</p>
                <button onClick={()=>setHere2(!here2)} id="here2">2 Bedroom</button>
                <p></p>
                <button onClick={()=>setHere42(!here42)} id="here4">4 Bed / 2 Bath</button>
                <p></p>
                <button onClick={()=>setHere44(!here44)} id="here4">4 Bed / 4 Bath</button>
                <p></p>
                <img src={HERE} class="image" alt="HERE"></img>
                {
                    here2?<table id="here2T" class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$1369.99</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$1475.13</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$1573.48</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
                {
                    here42?<table id="here4T1" class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$1029.40</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$1103.25</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$1186.88</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
                {
                    here44?<table id="here4T2" class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$1112.37</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$1194.17</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$1281.03</td>
                            </tr>
                        </tbody>
                    </table>:null
                }       
            </div>
            {/* Data Issue */}
            {/* <div class="card">
            <p>HUB</p>
            <p>Coming Soon...</p>
                <img src={HUB} class="image" alt="HUB"></img>
            </div> */}
{/* Finish Below */}

            <div class="card">
            <p>212 East</p>
                <button onClick={()=>setTwoOneTwo2(!twoOneTwo2)}>2 Bedroom</button>
                <p></p>
                <button onClick={()=>setTwoOneTwo3(!twoOneTwo3)}>3 Bedroom</button>
                <p></p>
                <button onClick={()=>setTwoOneTwo4(!twoOneTwo4)}>4 Bedroom</button>
                <p></p>
                <img src={twoTwelve} class="image" ></img>
                {
                    twoOneTwo2?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>1032.16</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$1107.99</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$1189.02</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
                {
                    twoOneTwo3?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$978.12</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$1047.53</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$1129.14</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
                {
                    twoOneTwo4?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$853.33</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$892.91</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$969.20</td>
                            </tr>
                        </tbody>
                    </table>:null
                }       
            </div>
            <div class="card">
            <p>101</p>
                <button onClick={()=>set1012(!oneZeroOne2)}>2 Bedroom</button>
                <p></p>
                <button onClick={()=>set1013(!oneZeroOne3)}>3 Bedroom</button>
                <p></p>
                <button onClick={()=>set1014(!oneZeroOne4)}>4 Bedroom</button>
                <p></p>
                <img src={oneZeroOne} class="image" ></img>
                {
                    oneZeroOne2?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$616.39</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$661.03</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$724.39</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
                {
                    oneZeroOne3?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$411.17</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$436.92</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$494.98</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
                {
                    oneZeroOne4?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$432.12</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$459.02</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$519.64</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>
            {/* Data Issue */}
            {/* <div class="card">
            <p>102</p>
                <img src={oneZeroTwo} class="image" ></img>
            </div>
            <div class="card">
            <p>105</p>
                <img src={oneZeroFive} class="image" ></img>
            </div>
            <div class="card">
            <p>107</p>
                <img src={oneZeroSeven} class="image" ></img>
            </div> */}
            <div class="card">
            <p>109</p>
                <button onClick={()=>set109(!oneZeroNine1)}>3 Bedroom</button>
                <p></p>
                <img src={oneZeroNine} class="image" ></img>
                {
                    oneZeroNine1?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$570.80</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$606.44</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$673.55</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>
            <div class="card">
            <p>110</p>
                <button onClick={()=>set110(!oneTen1)}>1 Bedroom</button>
                <p></p>
                <img src={oneTen} class="image" ></img>
                {
                    oneTen1?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$707.13</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$755.23</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$826.50</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>
            <div class="card">
            <p>201</p>
                <button onClick={()=>set201(!twoZeroOne1)}>1 Bedroom</button>
                <p></p>
                <img src={twoZeroOne} class="image" ></img>
                {
                    twoZeroOne1?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$1072.25</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$1149.18</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$1238.09</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>
            <div class="card">
            <p>203</p>
                <button onClick={()=>set203(!twoZeroThree1)}>1 Bedroom</button>
                <p></p>
                <img src={twoZeroThree} class="image" ></img>
                {
                    twoZeroThree1?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$826.36</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$882.48</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$957.79</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>

            <div class="card">
            <p>207</p>
                <button onClick={()=>set207(!twoZeroSeven1)}>4 Bedroom</button>
                <p></p>
                <img src={twoZeroSeven} class="image" ></img>
                {
                    twoZeroSeven1?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$406.33</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$430.95</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$489.58</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>
            <div class="card">
            <p>301</p>
                <button onClick={()=>set301(!threeZeroOne1)}>4 Bedroom</button>
                <p></p>
                <img src={threeZeroOne} class="image" ></img>
                {
                    threeZeroOne1?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$1072.25</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$1149.18</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$1238.09</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>
            <div class="card">
            <p>302</p>
                <img src={threeZeroTwo} class="image" ></img>
            </div>
            <div class="card">
            <p>305</p>
                <button onClick={()=>set305(!threeZeroFive1)}>3 Bedroom</button>
                <p></p>
                <img src={threeZeroFive} class="image" ></img>
                {
                    threeZeroFive1?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$528.71</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$566.47</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$628.84</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>
            <div class="card">
            <p>308</p>
                <img src={threeZeroEight} class="image" ></img>
            </div>
            <div class="card">
            <p>311</p>
                <img src={threeEleven} class="image" ></img>
            </div>
            <div class="card">
            <p>401</p>
                <img src={fourZeroOne} class="image" ></img>
            </div>
            <div class="card">
            <p>403</p>
                <img src={fourZeroThree} class="image" ></img>
            </div>
            <div class="card">
            <p>405</p>
                <img src={fourZeroFive} class="image" ></img>
            </div>
            <div class="card">
            <p>406</p>
                <img src={fourZeroSix} class="image" ></img>
            </div>
            <div class="card">
            <p>408 South</p>
                <img src={fourZeroEightS} class="image" ></img>
            </div>
            <div class="card">
            <p>408 West</p>
                <img src={fourZeroEightW} class="image" ></img>
            </div>
            <div class="card">
            <p>508</p>
                <img src={fiveZeroEight} class="image" ></img>
            </div>
            <div class="card">
            <p>510</p>
                <img src={fiveTen} class="image" ></img>
            </div>
            <div class="card">
            <p>601</p>
                <img src={sixZeroOne} class="image" ></img>
            </div>
            <div class="card">
            <p>601 South</p>
                <img src={sixZeroOneS} class="image" ></img>
            </div>
            <div class="card">
            <p>603</p>
                <img src={sixZeroThree} class="image" ></img>
            </div>
            <div class="card">
            <p>604</p>
                <img src={sixZeroFour} class="image" ></img>
            </div>
            <div class="card">
            <p>605</p>
                <img src={sixZeroFive} class="image" ></img>
            </div>
            <div class="card">
            <p>607</p>
                <img src={sixZeroSeven} class="image" ></img>
            </div>
            <div class="card">
            <p>700</p>
                <img src={sevenHundred} class="image" ></img>
            </div>
            <div class="card">
            <p>701</p>
                <img src={sevenZeroOne} class="image" ></img>
            </div>
            <div class="card">
            <p>707</p>
                <img src={sevenZeroSeven} class="image" ></img>
            </div>
            <div class="card">
            <p>803</p>
                <button onClick={()=>set803(!eightZeroThree1)}>2 Bedroom</button>
                <p></p>
                <img src={eightZeroThree} class="image" ></img>
                {
                    eightZeroThree1?<table class="styled-table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023</td>
                                <td>$529.56</td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>$553.73</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>$627.42</td>
                            </tr>
                        </tbody>
                    </table>:null
                }
            </div>
            <div class="card">
            <p>903</p>
                <img src={nineZeroThree} class="image" ></img>
            </div>
            <div class="card">
            <p>913</p>
                <img src={nineOneThree} class="image" ></img>
            </div>
            <div class="card">
            <p>1103</p>
                <img src={elevenZeroThree} class="image" ></img>
            </div>
	    </div>
    </div>
  )
}

export default PredictionPage