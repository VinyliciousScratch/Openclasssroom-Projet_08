import './Portfolio.css'
import Centralsection from '../../components/Central_img/Central_img.jsx'
import LeftSection from '../../components/Left_Section/Left_Section.jsx'
import RightSection from '../../components/Right_Section/Right_Section.jsx'
import Screenshot_kasa_1 from '../../images/Screenshot_kasa_1.webp'
import Screenshot_kasa_2 from '../../images/Screenshot_kasa_2.webp'
import Screenshot_kasa_3 from '../../images/Screenshot_kasa_3.webp'
import data from '../../data/portfolio.json'


function Portfolio() {
  return (
    <main className='portfoliobody'>
      <Centralsection imgsrc ={Screenshot_kasa_1} title={data.title_project_1} text={data.text}></Centralsection>
      <LeftSection imgsrc ={Screenshot_kasa_2} title={data.title_text_1} text={data.project_1_text_1}></LeftSection>
      <RightSection imgsrc ={Screenshot_kasa_3} title={data.title_text_2} text={data.project_1_text_2}></RightSection>
    </main>
  );
}

export default Portfolio;
