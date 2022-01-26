import React,{Component} from "react";
import App from './App';
import './Gnb.css';
import './reset.css'

class Gnb extends Component{
                 constructor(props){
                        super(props);
                        this.state = {
                        navidb1 :[
                            {  d1text : "삼양그룹소개",
                                d1link : "/" ,
                                d1class :"ab1",
                            navidb2:[
                                {
                                    d2text:"삼양홀딩스 소개",
                                    d2link:"#",
                                    d2class:"ab2",
                                },
                                {
                                    d2text:"Chairman 인사말",
                                    d2link:"#",
                                    d2class:"ab2",
                                },
                                {
                                    d2text:"Vision",
                                    d2link:"#",
                                    d2class:"ab2",
                                },
                                {
                                    d2text:"삼양가치",
                                    d2link:"#",
                                    d2class:"ab2",
                                },
                                {
                                    d2text:"CJ 소개",
                                    d2link:"#",
                                    d2class:"ab2",
                                },
                                {
                                    d2text:"연혁",
                                    d2link:"#",
                                    d2class:"ab2",
                                },
                            ],
                        },    
                        {  d1text : "사업소개", 
                            d1link : "/",
                            d1class : "ab1",
                        navidb2:[
                            {
                                d2text:"그룹소개",
                                d2link:"#",
                                d2class:"ab2",
                            },
                            {
                                d2text:"화학사업 부문",
                                d2link:"#",
                                d2class:"ab2",
                            },
                            {
                                d2text:"식품사업 부문",
                                d2link:"#",
                                d2class:"ab2",
                            },
                            {
                                d2text:"패키징사업 부문",
                                d2link:"#",
                                d2class:"ab2",
                            },
                            {
                                d2text:"의약바이오사업 부문",
                                d2link:"#",
                                d2class:"ab2",
                            },
                            {
                                d2text:"개별사업 부문",
                                d2link:"#",
                                d2class:"ab2",
                            },
                        ],
                          }, 
                         {  d1text : "투자정보", 
                            d1link : "/",
                            d1class : "ab1",
                        navidb2:[
                            {
                                d2text:"주요현황",
                                d2link:"#",
                                d2class:"ab2",
                            },
                            {
                                d2text:"재무정보",
                                d2link:"#",
                                d2class:"ab2",
                            },
                            {
                                d2text:"IR 자료실",
                                d2link:"#",
                                d2class:"ab2",
                            },
                            {
                                d2text:"공시정보",
                                d2link:"#",
                                d2class:"ab2",
                            },
                            {
                                d2text:"공고",
                                d2link:"#",
                                d2class:"ab2",
                            },
                        ],
                         },
                        {  d1text : "사회공헌", 
                                d1link : "/",
                                d1class : "ab1",
                         navidb2:[
                        {
                            d2text:"사회공헌 개요",
                            d2link:"#",
                            d2class:"ab2",
                        },
                        {
                            d2text:"사회공헌 활동",
                            d2link:"#",
                            d2class:"ab2",
                        },
                        {
                            d2text:"재단",
                            d2link:"#",
                            d2class:"ab2",
                        },
                        {
                            d2text:"활동소식",
                            d2link:"#",
                            d2class:"ab2",
                        },
                    ],
                         },
                    
                    
                    
                    ],                
                } 
            }
                

    render(){
        return(
          <h1>
            
          {this.state.navidb1.map( (list) => {
              return <ul className="d1"><li className={list.d1class}>
                  <a href={list.d1link}>
                      {list.d1text}
                  </a>
                  <ul className="d2">
                      {
                         list.navidb2.map((list1)=>{
                             return <li className={list1.d2class}>
                                 <a href={list1.d2link}>{list1.d2text}</a>
                             </li>
                         })
                      }
                  </ul>
        
              </li>
              </ul>
          }
          )}
          </h1>
        )

    }



    }

export default Gnb;