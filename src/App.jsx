import './App.css';
import Card from './components/Card'
import Header from './components/Header'

const App = () => {

  return (
    <div className="App">
      <Header/>

      <div className='cards'>
        <Card path="../public/6_Image.jpg" color="red" name="Mochi" description="I’m a soft, squishy cuddle bug who lives for naps and tuna flakes."/>
        <Card path="../public/81UC+sG1m3L.png" color="yellow" name="Sir Whiskerstein" description="I patrol the living room with great dignity and expect ear scritches as tribute."/>
        <Card path="../public/396df568a4325fe46c4a4801e198e7ef.jpg" color="green" name="Ziggy" description="I chase shadows, lasers, and my own tail like it’s a full-time job."/>
        <Card path="../public/454678857_2290719967943711_5123688458717645273_n-67a235f28ad1c__700.jpg" color="blue" name="Tater Tot" description="I’m tiny, round, and proud to be the snack-sized ruler of this house."/>
        <Card path="../public/459204270_981877377284850_2933942690201179015_n-67a2354579d23__700.jpg" color="red" name="Luna" description="I stare at the moon, judge your life choices, and occasionally knock over plants."/>
        <Card path="../public/artworks-zyYqA8D0BdfuyH28-WeeHrw-t1080x1080.jpg" color="yellow" name="Beans" description="I’m all toe beans and attitude, and I squeak instead of meow."/>
        <Card path="../public/e4b721f9-54e3-46e8-920d-156874cebee5.webp" color="green" name="Marble" description="I’m sleek, swirly, and glide around like I’m made of liquid elegance."/>
        <Card path="../public/funny-cat-1.jpg" color="blue" name="Pesto" description="I zoom, I scream, I snuggle—usually in that order."/>
        <Card path="../public/funny-pic-of-a-black-and-white-cat-sitting-with-its-fluffy-tail-between-its-legs.jpeg" color="red" name="Cricket" description="I chirp when I’m happy and I’m happiest when I’m in your laundry pile."/>
        <Card path="../public/images.jpeg" color="yellow" name="Nimbus" description="I float like a cloud and disappear just when you need me the most."/>
        <Card path="../public/l9vklw5gh4841.webp" color="green" name="Pickles" description="I’m a spicy little gremlin who steals socks and hearts."/>
        <Card path="../public/muh-cat.png" color="blue" name="Socks" description="I look like I’m wearing four tiny boots and I walk like I own the place."/>
        <Card path="../public/sticker_23.avif" color="red" name="Clementine" description="I’m sweet, citrusy, and surprisingly chaotic at 3am."/>
        <Card path="../public/yev7tco0ssb91.webp" color="yellow" name="Miso" description="I’m warm, comforting, and will definitely sit in your bowl if you let me."/>
        <Card path="../public/hands.jpeg" color="green" name="Captain Meowgan" description="I’m a fearless explorer of countertops and forbidden cabinets."/>
        <Card path="../public/cat-cute.gif" color="blue" name="Dusty" description="I emerged from under the couch like a mysterious cryptid and now I rule the living room."/>
      </div>
    </div>
  )
}

export default App