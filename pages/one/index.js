import Link from "next/link";
import React from "react";

function One() {
  return (
    <>
      <section>
        <h1>포트폴리오</h1>
        <div className="secOne">
          <div>
            <h2>안녕하세요, 개발자 정청원입니다.</h2>
            <p className="secOneTxt">
              저는 대학에서는 뮤지컬을 전공했지만, 저만의 다양한 생각을 능동적으로
              펼쳐보고 싶어서 개발자가 되었습니다.
              <br />
              새로운 기술 학습에도 관심이 많고, 내가 작업하는 컨텐츠의 방향성을
              생각하는것을 더 좋아하는 편입니다. <br />
              사용자에게 좋은 경험을 전달하는 일에 큰 보람을 느끼고, 다양한
              분야에서 도전적인 경험을 쌓고 싶습니다.
              <br />
              또한, 예술계의 오래있었던 덕분에, 프론트 업무에서 조금은 더
              창의적이고 흥미로운 생각을 가지고 즐거운 마음으로 노력하고
              있습니다.
            </p>
            <ul className="myLink">
              <li>이메일 : <Link href={'mailto:wjdcjddnjs54@naver.com'}>wjdcjddnjs54@naver.com</Link></li>
              <li>깃허브 : <Link href={'https://github.com/ChungwonJ'} target="_blank">ChungwonJ</Link></li>
              <li>인스타 : <Link href={'https://www.instagram.com/jungchungwon/'} target="_blank">wjdcjddnjs54@naver.com</Link></li>
            </ul>
          </div>
          <div className="secOneImg">
            <img src="/images/me.jpg" alt="증명사진" />
          </div>
        </div>
      </section>
    </>
  );
}

export default One;
