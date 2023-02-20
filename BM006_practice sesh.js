
speed = .1


gradient(1).shift(.4).saturate(.001).rotate(.001)
.modulate(o0,2).modulateScrollY(noise(.01),2)
.blend(o0,.2).invert(.1).blend(o1,3).blend(o0)
.saturate(-1.2).mask(shape(3.3)).blend(o1).rotate(11,.2)
.modulate(1,2).add(o0).out()

gradient(2).shift(.4).saturate(.001).rotate(.001)
.modulate(o0,2).modulateScrollY(noise(.01),2)
.blend(o0,.2).invert(.1).saturate(-1.2).out(o1)

voronoi(1,.2).modulateScrollY(o0).modulate(o0,200)
.scale(3,2).modulateScrollY(noise(.1)).repeat(20,2)
.rotate(20,.1).blend(o1,.2).modulate(o1,5)
.contrast(1,20).modulateScale(osc(1),Math*33)
.sub(o1).modulateScrollY(src(o0,200),2).out()

shape(3.7,.2).modulateScrollY(o2,Math*.3).blend(o1).out(o3)

src(o0)
  .modulateHue(src(o0).scale(1.01),10)
  .layer(osc(4,0.5,-.1).mask(shape(3.2,0.3,0.001)))
  .add(o2).mult(o0).scrollY(30,.2).modulate(o3,.2).rotate(39,.1)
  .sub(o2).modulate(o2,10).scale(4).blend(o1,.5).layer(o2,.4).out(o3)



hush()

osc(0.1,.1).blend(o1,.2).out()
