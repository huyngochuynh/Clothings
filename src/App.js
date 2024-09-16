import './App.css';
import Avatar from './components/Avatar';
import PartList from './components/PartList';
import { useState } from 'react';


 const BODY = [
   "/character/character/body/1.png",
   "/character/character/body/2.png",
   "/character/character/body/3.png",
   "/character/character/body/4.png",
   "/character/character/body/5.png",
   "/character/character/body/6.png",
   "/character/character/body/7.png",
   "/character/character/body/8.png",
   "/character/character/body/9.png",
   "/character/character/body/10.png",
 ]

 const EYES = [
   "/character/character/eyes/1.png",
   "/character/character/eyes/2.png",
   "/character/character/eyes/3.png",
   "/character/character/eyes/4.png",
   "/character/character/eyes/5.png",
   "/character/character/eyes/6.png",
   "/character/character/eyes/7.png",
   "/character/character/eyes/8.png",
   "/character/character/eyes/9.png",
   "/character/character/eyes/10.png",
 ]

 const CLOTHESA = [
  "/character/character/clothes/layer_1/1.png",
  "/character/character/clothes/layer_1/2.png",
  "/character/character/clothes/layer_1/3.png",
  "/character/character/clothes/layer_1/4.png",
  "/character/character/clothes/layer_1/5.png",
 ]

const CLOTHESB = [
  "/character/character/clothes/layer_2/1.png",
  "/character/character/clothes/layer_2/2.png",
  "/character/character/clothes/layer_2/3.png",
  "/character/character/clothes/layer_2/4.png",
  "/character/character/clothes/layer_2/5.png",
]

const CLOTHESC = [
   "/character/character/clothes/layer_3/1.png",
   "/character/character/clothes/layer_3/2.png",
   "/character/character/clothes/layer_3/3.png",
   "/character/character/clothes/layer_3/4.png",
   "/character/character/clothes/layer_3/5.png",
   "/character/character/clothes/layer_3/6.png",
   "/character/character/clothes/layer_3/7.png",
   "/character/character/clothes/layer_3/8.png",
   "/character/character/clothes/layer_3/9.png",
]


const MOUTHS = [
  "/character/character/mouths/1.png",
  "/character/character/mouths/2.png",
  "/character/character/mouths/3.png",
  "/character/character/mouths/4.png",
  "/character/character/mouths/5.png",
  "/character/character/mouths/6.png",
  "/character/character/mouths/7.png",
  "/character/character/mouths/8.png",
  "/character/character/mouths/9.png",
  "/character/character/mouths/1.png",
  "/character/character/mouths/2.png",
  "/character/character/mouths/3.png",
  "/character/character/mouths/4.png",
  "/character/character/mouths/5.png",
  "/character/character/mouths/6.png",
  "/character/character/mouths/7.png",
  "/character/character/mouths/8.png",
  "/character/character/mouths/9.png",
  "/character/character/mouths/10.png",
  "/character/character/mouths/11.png",
  "/character/character/mouths/12.png",
  "/character/character/mouths/13.png",
  "/character/character/mouths/14.png",
  "/character/character/mouths/15.png",
  "/character/character/mouths/16.png",
  "/character/character/mouths/17.png",
  "/character/character/mouths/18.png",
  "/character/character/mouths/19.png",
  "/character/character/mouths/20.png",
  "/character/character/mouths/21.png",
  "/character/character/mouths/22.png",
  "/character/character/mouths/23.png",
  "/character/character/mouths/24.png",
]

const NOSES = [
  "/character/character/noses/1.png",
]

 const HAIR = [
   "/character/character/hair/1.png",
   "/character/character/hair/2.png",
   "/character/character/hair/3.png",
   "/character/character/hair/4.png",
   "/character/character/hair/5.png",
   "/character/character/hair/6.png",
   "/character/character/hair/7.png",
   "/character/character/hair/8.png",
   "/character/character/hair/9.png",
   "/character/character/hair/10.png",
 ]




function App() {
  const [body, setBody] = useState(BODY[0]);
  const [eyes, setEyes] = useState(EYES[4]);
  const [clothesa, setClothesa] = useState(CLOTHESA[2]);
  const [clothesb, setClothesb] = useState(CLOTHESB[3]);
  const [clothesc, setClothesc] = useState(CLOTHESC[1]);
  const [mouths, setMouths] = useState(MOUTHS[5]);
  const [noses, setNoses] = useState(NOSES[0]);
  const [hair, setHair] = useState(HAIR[6]);

  return (
    <div className="All"> 
      <h1 className="title-btn">Character</h1>
      <h2 className="title-next">&#128736; Customization &#128736;</h2>
      <div className="lane" />
      <Avatar body={body} eyes={eyes} clothesa={clothesa} clothesb={clothesb} clothesc={clothesc} mouths={mouths} noses={noses} hair={hair} />

      <div className="list">
        <PartList title="Body" selectUrl={body} items={BODY} onSelect={(url) => setBody(url)} />
      </div>

      <div className="list">
        <PartList title="Eyes" selectUrl={eyes} items={EYES} onSelect={(url) => setEyes(url)} />
      </div>

      <div className="list">
        <PartList title="Clothesa" selectUrl={clothesa} items={CLOTHESA} onSelect={(url) => setClothesa(url)} />
      </div>

      <div className="list">
        <PartList title="Clothesb" selectUrl={clothesb} items={CLOTHESB} onSelect={(url) => setClothesb(url)} />
      </div>

      <div className="list">
        <PartList title="Clothesc" selectUrl={clothesc} items={CLOTHESC} onSelect={(url) => setClothesc(url)} />
      </div>

      <div className="list">
        <PartList title="Mouths" selectUrl={mouths} items={MOUTHS} onSelect={(url) => setMouths(url)} />
      </div>

      <div className="list">
        <PartList title="Noses" selectUrl={noses} items={NOSES} onSelect={(url) => setNoses(url)} />
      </div>

      <div className="list">
        <PartList title="Hair" selectUrl={hair} items={HAIR} onSelect={(url) => setHair(url)} />
      </div>

    </div>
  );
}

export default App;
