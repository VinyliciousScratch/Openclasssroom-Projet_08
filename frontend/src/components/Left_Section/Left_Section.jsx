import './Left_Section.css'


function Left_Section({imgsrc, title ,text}) {
  return (
    <section>
        <div className='leftpart'>
            <img src={imgsrc} alt="Avatar"></img>
        </div>
        <div className='rightpart'>
            <h1>{title}</h1>
            <p>{text.join("\n")}</p>
        </div>
    </section>
  );
}

export default Left_Section;