(this.webpackJsonpmetronome=this.webpackJsonpmetronome||[]).push([[0],{48:function(e,t,a){e.exports=a(72)},53:function(e,t,a){},54:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),o=(a(53),a(54),a(42)),u=a(27),l=a.n(u),c=a(18),m=a(19),p=a(22),d=a(20),h=a(23),v=a(100),b=a(108),f=a(39),E=a.n(f),y=a(107),B=a(104),g={textTransform:"none"},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={value:a.props.defaultBpm},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"addBpm",value:function(e){var t=parseInt(this.state.value,10)+parseInt(e,10);t<0||this.setState({value:t},this.updateMetronomeBpm(t))}},{key:"updateMetronomeBpm",value:function(e){this.props.updateBpm(e)}},{key:"multiplyBpmBy",value:function(e){var t=Math.floor(parseInt(this.state.value,10)*parseFloat(e,10));t<0||this.setState({value:t},this.updateMetronomeBpm(t))}},{key:"isPositiveInteger",value:function(e){return!(isNaN(e)||e<0)}},{key:"handleInput",value:function(e){var t=e.target.value;this.isPositiveInteger(t)&&this.setState({value:t.trim()},this.updateMetronomeBpm(t))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(v.a,{container:!0,spacing:1,alignItems:"center",justify:"center",direction:"row"},i.a.createElement(v.a,{item:!0},i.a.createElement(y.a,{InputProps:{startAdornment:i.a.createElement(B.a,{position:"start"},"\u2669 = ")},id:"username",onChange:this.handleInput.bind(this),value:this.state.value,placeholder:"0",margin:"normal",label:"Enter BPM",variant:"outlined",autoFocus:!0})),i.a.createElement(v.a,{item:!0},i.a.createElement(v.a,{alignContent:"center",justify:"center",container:!0,spacing:1,direction:"row"},i.a.createElement(v.a,{item:!0},i.a.createElement(b.a,{"aria-label":"+10",onClick:this.addBpm.bind(this,"+10"),variant:"outlined"},"+10")),i.a.createElement(v.a,{item:!0},i.a.createElement(b.a,{"aria-label":"x1.5",style:g,onClick:this.multiplyBpmBy.bind(this,"1.5"),variant:"outlined"},"x1.5")),i.a.createElement(v.a,{item:!0},i.a.createElement(b.a,{"aria-label":"x2",style:g,onClick:this.multiplyBpmBy.bind(this,"2"),variant:"outlined"},"x2.0"))),i.a.createElement(v.a,{justify:"center",container:!0,alignContent:"center",spacing:1,direction:"row"},i.a.createElement(v.a,{item:!0},i.a.createElement(b.a,{"aria-label":"-10",onClick:this.addBpm.bind(this,"-10"),variant:"outlined"},"-10")),i.a.createElement(v.a,{item:!0},i.a.createElement(b.a,{"aria-label":"\xf71.5",onClick:this.multiplyBpmBy.bind(this,"0.75"),variant:"outlined"},"\xf71.5")),i.a.createElement(v.a,{item:!0},i.a.createElement(b.a,{"aria-label":"\xf72",onClick:this.multiplyBpmBy.bind(this,"0.5"),variant:"outlined"},"\xf72"))))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={beatsPerMeasure:a.props.defaultTimeSignature[0],beatUnit:a.props.defaultTimeSignature[1]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"isPositiveInteger",value:function(e){return!(isNaN(e)||e<0)}},{key:"updateBeatsPerMeasure",value:function(e){var t=e.target.value.trim();this.isPositiveInteger(t)&&(this.setState({beatsPerMeasure:t}),this.props.updateTimeSignature([t,this.state.beatUnit]))}},{key:"updateBeatUnit",value:function(e){var t=e.target.value.trim();this.isPositiveInteger(t)&&(this.setState({beatUnit:t}),this.props.updateTimeSignature([this.state.beatsPerMeasure,t]))}},{key:"render",value:function(){return i.a.createElement("div",{style:{padding:1}},i.a.createElement(v.a,{container:!0,spacing:1,justify:"center",direction:"column"},i.a.createElement(v.a,{item:!0},i.a.createElement(y.a,{variant:"standard",value:this.state.beatsPerMeasure,onChange:this.updateBeatsPerMeasure.bind(this),label:"Beats per Measure"})),i.a.createElement(v.a,{item:!0},i.a.createElement(y.a,{variant:"standard",value:this.state.beatUnit,onChange:this.updateBeatUnit.bind(this),label:"Beat Unit"}))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={beatUnitsPerMinute:a.props.defaultBpm,subdivisionsPerBeat:a.props.defaultSubdivisionsPerBeat,beatUnit:a.props.defaultBeatUnit,beatsPerMeasure:a.props.defaultBeatsPerMeasure},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.midiSounds.setEchoLevel(0),this.midiSounds.setMasterVolume(.5)}},{key:"updateBpm",value:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(this.setState({beatUnitsPerMinute:e}));case 2:this.playLoop();case 3:case"end":return t.stop()}}),null,this)}},{key:"updateTimeSignature",value:function(e){var t,a,n;return l.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=Object(o.a)(e,2),a=t[0],n=t[1],i.next=3,l.a.awrap(this.setState({beatsPerMeasure:a,beatUnit:n}));case 3:this.playLoop();case 4:case"end":return i.stop()}}),null,this)}},{key:"createBeatLoop",value:function(e,t){var a=[[205],[]],n=[[210],[]],i=[];i[0]=[[200],[]];for(var r=1;r<e*t;r++)i[r]=r%t===0?a:n;return i}},{key:"playLoop",value:function(){var e=this.createBeatLoop(this.state.beatsPerMeasure,this.state.subdivisionsPerBeat);this.midiSounds.startPlayLoop(e,this.state.beatUnitsPerMinute,1/(this.state.beatUnit*this.state.subdivisionsPerBeat))}},{key:"stopLoop",value:function(){this.midiSounds.stopPlayLoop()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{padding:20}}," ",i.a.createElement(v.a,{container:!0,spacing:2,justify:"center",direction:"column"},i.a.createElement(v.a,{item:!0},i.a.createElement(P,{defaultBpm:this.state.beatUnitsPerMinute,updateBpm:this.updateBpm.bind(this)})),i.a.createElement(v.a,{item:!0},i.a.createElement(k,{defaultTimeSignature:[this.state.beatsPerMeasure,this.state.beatUnit],updateTimeSignature:this.updateTimeSignature.bind(this)})),i.a.createElement(v.a,{item:!0},i.a.createElement(v.a,{container:!0,justify:"center",spacing:2,column:"row"},i.a.createElement(v.a,{item:!0},i.a.createElement(b.a,{variant:"contained",onClick:this.playLoop.bind(this)},"Play sound")),i.a.createElement(v.a,{item:!0},i.a.createElement(b.a,{variant:"contained",onClick:this.stopLoop.bind(this)},"Stop sound")))),i.a.createElement(E.a,{ref:function(t){return e.midiSounds=t},appElementName:"root",drums:[200,205,210]})))}}]),t}(n.Component),S=a(105),j=a(106),U=a(74);var w=function(){return i.a.createElement(S.a,{position:"static",color:"primary"},i.a.createElement(j.a,null,i.a.createElement(U.a,{variant:"h6",color:"initial"},"Metronome")))};var C=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(w,null),i.a.createElement(M,{defaultSubdivisionsPerBeat:"1",defaultBeatUnit:"4",defaultBeatsPerMeasure:"4",defaultBpm:"120"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.8d931ca7.chunk.js.map