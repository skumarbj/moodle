/* YUI 3.9.0 (build 5827) Copyright 2013 Yahoo! Inc. http://yuilibrary.com/license/ */
YUI.add("axis-time",function(e,t){e.TimeAxis=e.Base.create("timeAxis",e.Axis,[e.TimeImpl],{_getLabelByIndex:function(e,t,n){var r=this.get("minimum"),i=this.get("maximum"),s,o;return t-=1,s=(i-r)/t*e,n&&n=="vertical"?o=i-s:o=r+s,o}})},"3.9.0",{requires:["axis","axis-time-base"]});
