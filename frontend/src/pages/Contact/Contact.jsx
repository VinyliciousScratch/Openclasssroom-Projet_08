import './Contact.css'
import LeftSection from '../../components/Left_Section/Left_Section.jsx'
import data from '../../data/contact.json'


function Contact() {
  return (
    <main className='contactbody'>
       <LeftSection imgsrc ={""} title={data.title} text={data.text}></LeftSection>
    </main>
  );
}

export default Contact;
