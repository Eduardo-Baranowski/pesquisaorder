(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{87:function(a,e,t){"use strict";var r=t(23),i=t.n(r),n=t(52),o=t.n(n),m=t(0),c=t.n(m),l=t(76),s=t(3),d=t(77),u=t(85),h=t(1),p=t(39),g=t(86),f=t(123),v=t(88),E=t(37),b=h.a.create({item:{flexDirection:"row",marginLeft:30,marginRight:30,borderBottomWidth:1,borderBottomColor:"#444",paddingTop:15,paddingBottom:15},itemPhoto:{width:50,height:50,borderRadius:30},itemInfo:{marginLeft:20},itemP1:{fontSize:22,color:"#FFFFFF",marginBottom:5},itemP2:{fontSize:18,color:"#999999"}}),y=function(a){var e=a.data;return c.a.createElement(p.a,{style:b.item},c.a.createElement(v.a,{source:{uri:e.avatar},style:b.itemPhoto}),c.a.createElement(s.a,{style:b.itemInfo},c.a.createElement(E.a,{style:b.itemP1},e.name),c.a.createElement(E.a,{style:b.itemP2},e.email)))},F=[{id:1,name:"Beatriz Farias",email:"bia.farias@gmail.com",avatar:"https://i.pravatar.cc/150?img=31"},{id:2,name:"Julia Santos",email:"jujusantos123@hotmail.com",avatar:"https://i.pravatar.cc/150?img=32"},{id:3,name:"Pedro Mendon\xe7a",email:"eu@pedro.com",avatar:"https://i.pravatar.cc/150?img=33"},{id:4,name:"Julia Shinoda",email:"julia.shinoda@japao.com",avatar:"https://i.pravatar.cc/150?img=34"},{id:5,name:"Andrezza Shinoda",email:"andrezza99@hotmail.com",avatar:"https://i.pravatar.cc/150?img=35"},{id:6,name:"Sara Maria",email:"saramaria@gmail.com",avatar:"https://i.pravatar.cc/150?img=36"},{id:7,name:"Edna Sousa",email:"edna21@yahoo.com.br",avatar:"https://i.pravatar.cc/150?img=37"}],x=h.a.create({container:{flex:1,backgroundColor:"#242425"},input:{flex:1,height:50,backgroundColor:"#363636",margin:30,borderRadius:5,fontSize:19,paddingLeft:15,paddingRight:15,color:"#FFFFFF"},searchArea:{flexDirection:"row",alignItems:"center"},orderButton:{width:32,marginRight:30},list:{flex:1}});e.a=function(){var a=Object(m.useState)(""),e=o()(a,2),t=e[0],r=e[1],n=Object(m.useState)(F),h=o()(n,2),v=h[0],E=h[1];Object(m.useEffect)((function(){E(""===t?F:F.filter((function(a){return a.name.toLowerCase().indexOf(t.toLowerCase())>-1})))}),[t]);return c.a.createElement(l.a,{style:x.container},c.a.createElement(s.a,{style:x.searchArea},c.a.createElement(d.a,{style:x.input,placeholder:"Pesquise uma pessoa",placeholderTextColor:"#888",value:t,onChangeText:function(a){return r(a)}}),c.a.createElement(p.a,{onPress:function(){var a=i()(F);a.sort((function(a,e){return a.name>e.name?1:e.name>a.name?-1:0})),E(a)},style:x.orderButton},c.a.createElement(f.a,{name:"order-alphabetical-ascending",size:32,color:"#888"}))),c.a.createElement(u.a,{data:v,style:x.list,renderItem:function(a){var e=a.item;return c.a.createElement(y,{data:e})},keyExtractor:function(a){return a.id}}),c.a.createElement(g.a,{style:"light"}))}},90:function(a,e,t){a.exports=t(118)}},[[90,1,2]]]);
//# sourceMappingURL=app.30bed15e.chunk.js.map