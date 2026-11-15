import './App.css'

export default function App() {
 const randomColor = () => {
      const array = [      
      'red',
      'blue',
      'green',
      'orange',
      'purple',
      'pink',
      'yellow',
      'cyan',
      'brown',
      'magenta']

      const savefault = Math.floor(Math.random() * array.length);
      return {color: array[savefault]}
 } 

  return (
    <>
      <div>
        <h1 style={randomColor()}  className="header"> Helloo World </h1>
        <p style={randomColor()}  className="header"> My Name is Marvel</p>
        <p style={randomColor()}  className="header"> I am a handsome/pretty human being</p>
        <p style={randomColor()}  className="header"> I love to learn Javascript</p>
        <p style={randomColor()}  className="header"> I am a super high quality student</p>
        <p style={randomColor()}  className="header">I am going to be a super star</p>
      </div>
    </>
  )
}
