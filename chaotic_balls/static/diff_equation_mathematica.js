g = 9.8;
tmax = 10;
reflected = ReflectionTransform[{-x[t], -y[t]}][{ x'[t], y'[t]}];
solveSystem[x0, y0] := NDSolveValue[
  {
    y''[t] == g,
    x''[t] == 0,
    x'[0] == 0,
    y'[0] == 0,
    x[0] == x0,
    y[0] == y0,
    WhenEvent[x[t]2 + y[t]2 == 1,
  {x'[t] , y'[t] } -> Evaluate[reflected]]
},
(x,y),
(t,0,tmax)
];

xf1, xf2 = solveSystem[0.01, 0.5];
xf2, yf2 = solveSystem[0.0012, 0.5];
