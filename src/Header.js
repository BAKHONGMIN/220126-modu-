// import React,{Component} from "react";
// import './Header.css';


// class Header extends Component{
//         constructor(props){
//             super(props);

//             this.state={

//             }

//         }
//         render(){
//             return(
//                 <ul id="gnb">
//           <Gnb d1text={
//             {nm:"삼양그룹소개", nmlink:"https://www.samyang.com/Aboutus/samyang_intro",
//                 d2db : [
//                 {n1 : "삼양홀딩스 소개", nmlink:"https://www.samyang.com/Aboutus/samyang_intro"},
//                 {n1 : "Chairman 인사말", nmlink:"https://www.samyang.com/Aboutus/ceo"},
//                 {n1 : "Vision", nmlink:"https://www.samyang.com/Aboutus/vision"},
//                 {n1 : "삼양가치",nmlink:"https://www.samyang.com/Aboutus/value"},
//                 {n1 : "CJ 소개",nmlink:"https://www.samyang.com/Aboutus/ci_intro"},
//                 {n1 : "연혁",nmlink:"https://www.samyang.com/Aboutus/history"}, 
//                 ]
//             }}></Gnb>
//           <Gnb d1text={{nm:"사업소개", nmlink:"https://www.samyang.com/SamyangGroup/group_intro",
//                 d2db : [
//                 {n1 : "그룹소개",nmlink:"https://www.samyang.com/SamyangGroup/group_intro"},
//                 {n1 : "화학사업 부문",nmlink:"https://www.samyang.com/SamyangGroup/chemistry_product"},
//                 {n1 : "식품사업 부문",nmlink:"https://www.samyang.com/SamyangGroup/food_product"},
//                 {n1 : "패키징사업 부문",nmlink:"https://www.samyang.com/SamyangGroup/packaging_product"},
//                 {n1 : "의약바이오사업 부문",nmlink:"https://www.samyang.com/SamyangGroup/medicine_product"},
//                 {n1 : "개별사업 부문",nmlink:"https://www.samyang.com/SamyangGroup/individual_product"}, 
//                 ]}}></Gnb>
//           <Gnb d1text={{nm:"투자정보", nmlink:"https://www.samyang.com/InvestmentInformation/condition",
//                  d2db : [
//                     {n1 : "주요현황",nmlink:"https://www.samyang.com/InvestmentInformation/condition"},
//                     {n1 : "재무정보",nmlink:"https://www.samyang.com/InvestmentInformation/finance"},
//                     {n1 : "IR 자료실",nmlink:"https://www.samyang.com/InvestmentInformation/ir"},
//                     {n1 : "공시정보",nmlink:"https://www.samyang.com/InvestmentInformation/announcement"},
//                     {n1 : "공고",nmlink:"https://www.samyang.com/HD04"},
//                  ]}}></Gnb>
//           <Gnb d1text={{nm:"사회공헌", nmlink:"https://www.samyang.com/Contribute/overview",
//                   d2db : [
//                     {n1 : "사회공헌 개요",nmlink:"https://www.samyang.com/Contribute/overview"},
//                     {n1 : "사회공헌 활동",nmlink:"https://www.samyang.com/Contribute/activity"},
//                     {n1 : "재단",nmlink:"https://www.samyang.com/Contribute/yangyounggroup"},
//                     {n1 : "활동소식",nmlink:"https://www.samyang.com/HD06"},
//                   ]}}></Gnb>
//         </ul>

//             );

//         }
// <li className={this.state.}>
//             <a href={this.props.d1text.nmlink} className="d1">{this.props.d1text.nm}</a>
//             <ul className="d2">
//               {this.props.d1text.d2db.map((list) =>
//               {return <li><a href={list.nmlink}>{list.n1}</a></li>})}
//             </ul>
//           </li>
// }

// export default Header;