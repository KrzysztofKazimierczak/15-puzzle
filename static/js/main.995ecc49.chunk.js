(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAABpUlEQVR42tWTu0oDQRSGZ3ejYLx2VgGNPkAeYUCL9EJKMeITiBeQFGKRxtIiTRoxvY9gKgWrxYC3SoKijRJETDa7m+M/mbNkolETsPHAz+zcvvznnIkQX6PcQ4PsdyKOzWMhyI3F6CweJ9dxaAlzC+uQwHfZxfwUuoAOoWGoC+roYWpaCHkkhEuAUC5HVKkQpdN0gwsLWF/E/q3axzySBx1AI1gHY7ZNimmgnMfGPdTK56keBOSVSlRPJoksi1wlhjQY9M7za2hcu9yzDIdyBouXClitUrNYJN+2KWCA6SiE1HqTv8+hUQa2SUMMnGOHQSZDXiLRvhQg/ZAvNw1YyD/Ugq6gCdOhrYGpSRR2XYiab7gJDCmIz6PHZ16hLARTNTCyvRpd3kS93viyZ8AicIPnD9CadtbdZTPgNqUObEMvnFJUt9Co5yO0wjBHj6lv3yKXQG5wJ6MUozSfDWeASdFPADqGobDDTn1OV6W52oEVhD7XXwAq0bW7LVxGxekJWtb/GgXbFf26+1xTPHy5DwheANmDpPlLkKE/CdXFE/FTN/9NfAA+xRaWVcrvDwAAAABJRU5ErkJggg=="},function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(16),a(9)),i=a(1),s=a(2),u=a(4),h=a(3),p=a(5),m=(a(17),a(18),function(){return r.a.createElement("h1",null,"15-Puzzle")}),d=(a(19),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){a.props.changeParentState("boardSize",e),a.props.changeParentState("gameStarted",!0)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"homescreen"},r.a.createElement("h2",null,"Select difficulty:"),r.a.createElement("section",{className:"settings"},r.a.createElement("div",{onClick:function(){e.handleClick(3)}},r.a.createElement("p",null,"easy"),r.a.createElement("span",null,"3x3")),r.a.createElement("div",{onClick:function(){e.handleClick(4)}},r.a.createElement("p",null,"normal"),r.a.createElement("span",null,"4x4")),r.a.createElement("div",{onClick:function(){e.handleClick(5)}},r.a.createElement("p",null,"hard"),r.a.createElement("span",null,"5x5"))),r.a.createElement("h3",null,"The difficulty relates to the number of tiles that you need to arrange on the board"))}}]),t}(n.Component)),f=a(6),v=function e(t){Object(i.a)(this,e),this.value=t,this.coordinates=[]},g=(a(20),function(e){var t="".concat(100/e.size,"%"),a={flexBasis:t,height:t},n={backgroundColor:"".concat(e.index+1===e.value?"#F5CB5C":"#E8EDDF")};return 0===e.value?r.a.createElement("div",{style:a,className:"TileZero"}):r.a.createElement("div",{style:Object.assign(a,n),className:"Tile",onClick:e.move},r.a.createElement("p",null,e.value))}),b=(a(21),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).shuffleBoard=function(e){e.sort(function(){return.5-Math.random()});for(var t=0,n=0;n<a.props.size;n++)for(var r=0;r<a.props.size;r++)e[t].coordinates=[r,n],t++;return e},a.handleClick=function(e){var t,n,r=Object(f.a)(a.props.board);if(r.forEach(function(a){0===a.value?t=a:a.value===parseInt(e.target.textContent)&&(n=a)}),a.checkIsMovePossible(t.coordinates,n.coordinates)){var c=[n.value,t.value];t.value=c[0],n.value=c[1],a.props.changeParentState("board",r),a.props.changeParentState("steps",a.props.steps+1)}a.checkResult(a.props.board)&&a.props.changeParentState("won",!0)},a.checkIsMovePossible=function(e,t){if(1===Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)))return!0},a.checkResult=function(e){var t=0,n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var i=o.value;i.value===a.props.size*i.coordinates[1]+i.coordinates[0]+1&&t++}}catch(s){r=!0,c=s}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return t===Math.pow(a.props.size,2)-1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.prepareBoard()}},{key:"prepareBoard",value:function(){for(var e=[],t=0;t<Math.pow(this.props.size,2);t++)e.push(new v(t));e=this.shuffleBoard(e),this.props.changeParentState("board",e)}},{key:"createTiles",value:function(e){var t=this;return e.map(function(e,a){return r.a.createElement(g,{key:a,index:a,value:t.props.board[a].value,move:t.handleClick,size:t.props.size})})}},{key:"render",value:function(){var e=this,t=this.createTiles(this.props.board);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"board"},t,r.a.createElement("i",{className:"far fa-question-circle",onClick:function(){e.props.changeParentState("faqActive",!0)}})))}}]),t}(n.Component)),E=a(10),A=a.n(E),y=(a(22),function(){return r.a.createElement("p",null,"created with ",r.a.createElement("img",{src:A.a,alt:"heart"})," by ",r.a.createElement("a",{href:"https://github.com/KrzysztofKazimierczak",rel:"noopener noreferrer",target:"_blank"},"Krzysztof Kazimierczak"))}),S=(a(23),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.changeParentState("won",!1),a.props.changeParentState("gameStarted",!1),a.props.changeParentState("boardSize",null),a.props.changeParentState("cheater",!1),a.props.changeParentState("steps",0)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"won"},r.a.createElement("div",{className:"congrat"},r.a.createElement("h2",null,"Congratulations!"),r.a.createElement("p",null,"You won the game in ",r.a.createElement("span",null,this.props.steps)," ",1===this.props.steps?"step":"steps")),r.a.createElement("div",{className:"again"},this.props.cheater?r.a.createElement("p",null,"Now I encourage you to try again, this time without cheating."):r.a.createElement("p",null,this.props.boardSize<=4?"Now I encourage You to try again on higher level.":"You beat the highest level."),r.a.createElement("button",{onClick:this.handleClick},"try again")))}}]),t}(n.Component)),k=(a(24),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleCheatButton=function(){for(var e=Object(f.a)(a.props.board),t=0;t<e.length-2;t++)e[t].value=t+1;e[e.length-2].value=0,e[e.length-1].value=e.length-1,a.props.changeParentState("cheater",!0),a.props.changeParentState("board",e)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=Math.pow(this.props.boardSize,2)-1;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"faqContainer"},r.a.createElement("i",{className:"far fa-times-circle",onClick:function(){e.props.changeParentState("faqActive",!1)}}),r.a.createElement("div",{className:"tips"},r.a.createElement("p",null,"To win the game you need to change the position of the blocks to arrange numbers from 1 to ",t,"."),r.a.createElement("p",null,"The last tile should be empty."),r.a.createElement("p",null,"You can change the position of the tiles by clicking the one which is adjacent to the empty spot.")),r.a.createElement("div",{className:"cheats"},r.a.createElement("h2",null,"Need help?"),r.a.createElement("button",{onClick:this.handleCheatButton},"Click here to cheat"))),r.a.createElement("div",{className:"blurActive"}))}}]),t}(n.Component)),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={gameStarted:!1,won:!1,boardSize:null,steps:0,cheater:!1,faqActive:!1,board:[]},a.changeState=function(e,t){a.setState(function(a){return Object(l.a)({},e,t)})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.state,a=t.faqActive,n=t.boardSize,c=t.board,o=t.steps,l=t.cheater,i=a?r.a.createElement(k,{boardSize:n,changeParentState:this.changeState,board:c}):null,s="".concat(a?"blur":"");return e=this.state.won?r.a.createElement(S,{changeParentState:this.changeState,steps:o,cheater:l,boardSize:n}):this.state.gameStarted?r.a.createElement(b,{changeParentState:this.changeState,size:n,steps:o,board:c}):r.a.createElement(d,{changeParentState:this.changeState}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:s},r.a.createElement(m,null)),r.a.createElement("main",{className:s},e),r.a.createElement("aside",null,i),r.a.createElement("footer",{className:s},r.a.createElement(y,null)))}}]),t}(n.Component);o.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.995ecc49.chunk.js.map