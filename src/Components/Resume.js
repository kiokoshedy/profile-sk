import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Tittle";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";
import { saveAs } from "file-saver";

function Resume() {
  const saveFile = () => {
    saveAs("/src/img/portImages/Shadrack.pdf", "Shadrack-Resume.pdf");
  };

  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={" "} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">

          <ResumeItem
            year={"June 2023-to Date"}
            title={"Application Developer"}
            subTitle={"Britam"}
            text={[
                <div key={1}> - Developing Backend APIs using Azure Functions and Logic Apps. </div>,
                <div key={1}> - Deploying and monitoring service to Azure clod </div>
            ]
            }
          />
          <ResumeItem
            year={"May 2022-May 2023"}
            title={"Software Engineer"}
            subTitle={"Little Pay"}
            text={[
                <div key={1}> - Researching, designing, managing software programs </div>,
                <div key={2}> - Testing and evaluating new programs </div>,
                <div key={3}> - Modifying software to fix error, improve its performance </div>,
                <div key={4}> - Deploying software tools, processes and metrics </div>,
                <div key={5}> - Directing software programming and documentation development </div>,
                <div key={6}> - Writing and implementing code </div>,
                <div key={7}> - Preparing reports on programming project specifications, activities, or status </div>,
                <div key={8}> - Consulting with engineering staff to evaluate software-hardware interfaces and develop specifications and performance requirements. </div>,
                <div key={9}> - Building and maintaining APIs, services and integrations core to our platform </div>
              ]}
          />
          <ResumeItem
            year={"2019-to Date"}
            title={"Software Developer"}
            subTitle={"Data Integrated Ltd"}
            text={[
              "● Trained as a Software Developer Intern (for 3 months) working with various projects for integrations and currently working as a Software Developer.",
             "● Collaborated with other Developers at Data Integrated Ltd to to improve the speed and add functionalities of Data Integrated Ltd’s projects i.e: ",
             " ● Safaricom Daraja api, Airtel-Africa Integration, TKash, Visa MTT, Tokenization integration, and developing a payments dashboard. ",
             " ● Currently collaborating with other developers to integrate Visa Tokenization. Collaborating with other developers to provide a National Transport system for Nairobi City. ",
             " ● This system will track vehicles speed, location and its payment in the Nairobi City Council."
            ]
            }
          />
          <ResumeItem
            year={"2017-2018"}
            title={"ICT Intern"}
            subTitle={"Water Resources Authority"}
            text={
              "● I trained and worked as a Human Resource and ICT mainly doing database management and networking. "
            }
          />
          <ResumeItem
            year={"2016-to Date"}
            title={"Freelance Developer"}
            subTitle={"Freelancing"}
            text={
              "● Providing Software developent solutions to clients in various technologies i.e Java, C++, Python, JS. etc. "
            }
          />
          <ResumeItem
            year={"2015-2016"}
            title={"Cyber Attendant"}
            subTitle={"Jamtech Cyber and Computer Training School"}
            text={
              "Doing typesetting, Computer Maintenance, Networking, Training Computer Packages. "
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"Jul 2021-ongoing"}
            title={"Associate Android Developer"}
            subTitle={
              "Google Africa Developer Scholarship - Andela Learning Community"
            }
            text={"Android-Kotlin. "}
          />
          <ResumeItem
            year={"2013 - 2016"}
            title={"Bsc. Computer Science and Mathematics"}
            subTitle={"Meru University"}
            text={"Learned and started my passion in Software Development. "}
          />

          <div>
            <button onClick={saveFile}>download</button>
          </div>
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
