import './Home.css'
import LeftSection from '../../components/Left_Section/Left_Section.jsx'
import Avatar from '../../images/avatar.webp'
import data from '../../data/home.json'

function Home() {
  return (
    <main className='homebody'>
      <LeftSection imgsrc ={Avatar} title={data.title} text={data.text}></LeftSection>
    </main>
  );
}

export default Home;
