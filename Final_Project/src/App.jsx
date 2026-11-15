import Emojipedia from "./components/emojipedia";
import Card from "./components/Card";

function CreateCard(Emoji) {
  return (
    <Card
      key={Emoji.id}
      nama={Emoji.name}
      img={Emoji.imgURL}
      desc={Emoji.Desc}
    />
  );
}

function App() {

  return (
    <div className="bg-dark text-light max-height w-auto" style={{ height: '1200px' }}>
      <div style={{ width: '400px' }} className="mx-auto border mb-5 border-warning border-2 rounded bg-dark ">
        <h1 className="text-center text-warning"> Emoji Pedia </h1>
      </div>

      <div key={Emojipedia.key} className="container">
        <div className="row">
          {Emojipedia.map(CreateCard)}
        </div>
      </div>

    </div>
  );
}

export default App;
