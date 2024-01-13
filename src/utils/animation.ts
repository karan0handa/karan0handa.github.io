import Zdog from 'zdog';

console.log('yo')

let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    rotate: { x: -Zdog.TAU / 2.2, y: Zdog.TAU / 8 },
    dragRotate: true,
})

console.log(illo)

let smallGroup = new Zdog.Group({ addTo: illo })
let bigGroup = new Zdog.Group({ addTo: illo })

let smallCube = new Zdog.Box({
    addTo: smallGroup,
    width: 50,
    height: 50,
    depth: 50,
    stroke: false,
    fill: true,
    color: '#175d96'
})
smallCube.copy({
    addTo: smallGroup,
    stroke: 1,
    fill: false,
    color: '#fff'
})

let bigCube = new Zdog.Box({
    addTo: illo,
    width: 100,
    height: 100,
    depth: 100,
    stroke: false,
    fill: true,
    color: 'rgba(141, 214, 249, 0.5)'
})
bigCube.copy({
    addTo: bigCube,
    stroke: 2,
    fill: false,
    color: '#FFF'
})

function animate() {
    smallGroup.rotate.y += 0.001
    bigCube.rotate.y -= 0.003
    // Fun rotation
    // illo.rotate.z += 0.01
    illo.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()