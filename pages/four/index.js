import { SKILL } from '@/data';
import React from 'react'

function Four() {
  return (
    <>
      <section>
        <h1>기술</h1>
        {SKILL.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <ul>
              {item.skills.map((skill, index) => (
                <li key={index}>{skill.skillTxt}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}

export default Four;