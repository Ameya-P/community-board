import './App.css';
import Card from './components/Card'
import Header from './components/Header'

const App = () => {

  return (
    <div className="App">
      <Header/>

      <div className='cards'>
        <Card path="cat1.jpg" color="red" name="Mochi" description="I’m a soft, squishy cuddle bug who lives for naps and tuna flakes."/>
        <Card path="cat2.png" color="yellow" name="Sir Whiskerstein" description="I patrol the living room with great dignity and expect ear scritches as tribute."/>
        <Card path="cat3.jpg" color="green" name="Ziggy" description="I chase shadows, lasers, and my own tail like it’s a full-time job."/>
        <Card path="cat4.jpg" color="blue" name="Tater Tot" description="I’m tiny, round, and proud to be the snack-sized ruler of this house."/>
        <Card path="cat5.jpg" color="red" name="Luna" description="I stare at the moon, judge your life choices, and occasionally knock over plants."/>
        <Card path="cat6.jpg" color="yellow" name="Beans" description="I’m all toe beans and attitude, and I squeak instead of meow."/>
        <Card path="cat7.gif" color="green" name="Marble" description="I’m sleek, swirly, and glide around like I’m made of liquid elegance."/>
        <Card path="cat8.gif" color="blue" name="Pesto" description="I zoom, I scream, I snuggle—usually in that order."/>
        <Card path="cat9.webp" color="red" name="Cricket" description="I chirp when I’m happy and I’m happiest when I’m in your laundry pile."/>
        <Card path="cat10.jpg" color="yellow" name="Nimbus" description="I float like a cloud and disappear just when you need me the most."/>
        <Card path="cat11.jpeg" color="green" name="Pickles" description="I’m a spicy little gremlin who steals socks and hearts."/>
        <Card path="cat12.jpeg" color="blue" name="Socks" description="I look like I’m wearing four tiny boots and I walk like I own the place."/>
        <Card path="cat13.jpeg" color="red" name="Clementine" description="I’m sweet, citrusy, and surprisingly chaotic at 3am."/>
        <Card path="cat14.webp" color="yellow" name="Miso" description="I’m warm, comforting, and will definitely sit in your bowl if you let me."/>
        <Card path="cat15.png" color="green" name="Captain Meowgan" description="I’m a fearless explorer of countertops and forbidden cabinets."/>
        <Card path="cat17.webp" color="blue" name="Dusty" description="I emerged from under the couch like a mysterious cryptid and now I rule the living room."/>
      </div>
    </div>
  )
}

export default App