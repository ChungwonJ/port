import { PROJECT } from "@/data";
import Link from "next/link";
import React from "react";

function Three() {
  return (
    <>
      <section>
        <h1>프로젝트</h1>
        {PROJECT.map((item, index) => (
          <div key={index}>
            <div className="projectTitle">
              <h2>{item.title}</h2>
              {item.link !== "" && (
                <Link href={item.link} target="_blank">홈페이지 바로가기</Link>
              )}
            </div>
            <p className="since">{item.since}</p>
            <div className="project" style={{ display: item.pcImgSrc === undefined && 'flex'}}>
              <div>
                <p>{item.txt}</p>
                <p>{item.txtTroble}</p>
              </div>
              {item.pcImgSrc !== undefined && (
              <div className="projectImg">
                <div>
                  <img src={item.pcImgSrc} alt={item.pcAlt} />
                  <p className="projectImgTxt">{item.pcTitle}</p>
                </div>
                <div>
                  <img src={item.mobileImgSrc} alt={item.mobileAlt} />
                  <p className="projectImgTxt">{item.mobileTitle}</p>
                </div>
              </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Three;
