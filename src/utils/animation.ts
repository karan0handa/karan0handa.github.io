import Zdog from 'zdog';

console.log('yo')

let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    rotate: { x: -Zdog.TAU / 2.2, y: Zdog.TAU / 8 },
    dragRotate: true,
})

console.log(illo)

let smallGroup = new Zdog.Group({ addTo: illo })

let smallCube = new Zdog.Box({
    addTo: smallGroup,
    width: 40,
    height: 40,
    depth: 40,
    stroke: false,
    fill: false,
    color: '#075f96'
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

let bigCubeRotation = 0.2
let smallCubeRotation = 0.2

function animate() {

    if (bigCubeRotation > 0.003) {
        bigCubeRotation -= 0.001;
    }
    if (smallCubeRotation > 0.001) {
        smallCubeRotation -= 0.001;
    }

    smallGroup.rotate.y += smallCubeRotation
    bigCube.rotate.y -= bigCubeRotation

    // Fun rotation
    // illo.rotate.z += 0.01
    illo.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()