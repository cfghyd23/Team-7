import React from "react";
import VideoComponent from "./Video";




import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="aboutTop" >
      <center>
        <h1>ORIENTATION</h1>
      </center>
        <center>
            <br/>
        <VideoComponent/>
        </center>

        <br></br>
        
       
          <center><b>Orientation Guidelines for Internship </b></center>
          
        <p style={{marginLeft: "25px" , marginRight: "25px" , alignContent: "center" , alignItems: "center"}}>
        The purpose of this document is to provide interns with a clear understanding of the guidelines and expectations for their upcoming internship. It is essential for interns to review these guidelines thoroughly to ensure a successful and productive internship experience. <br></br>
        <ul>
            <br/>
            <li>  -   Internship Duration: The internship program spans a period of 10 days, during which interns are expected to accomplish specific goals. The primary objective is for interns to reach the assigned target fund by the designated end date.</li>
            
            <br/>
            <li>  -   Personalized Dashboard: Interns will have access to a personalized dashboard, where they can view their work schedule and track the progress made towards the assigned target fund. This dashboard serves as a valuable tool for self-assessment and monitoring progress throughout the internship.</li>
            
            <br/>
            <li>  -   Extension Request: In exceptional circumstances, interns may require an extension to complete their assigned tasks. To request an extension, interns must approach the administration with a detailed justification and specify the desired period of extension. Each request will be evaluated on a case-by-case basis.</li>
            
            <br/>
            <li>  -   Internship Perks: Upon successful completion of the internship, interns will be eligible for various perks. These may include goodies, an E-certificate acknowledging their participation, a letter of recommendation (LOR) highlighting their performance, and additional benefits as deemed appropriate.</li>
            
            <br/>
            <li>  -   Administrative Monitoring: Throughout the internship, the administration will closely monitor the interns' work to ensure its timely completion and adherence to set standards. Regular check-ins may occur to provide guidance, assess progress, and address any challenges or concerns that may arise.</li></ul></p>
            
     
      </div>
      </div>
    
  );
};


export default About;