let worldObjects = [];
function generateWorld(){
    for(let i=0;i<100;i++){
        let tree = {
            x: Math.random()*window.innerWidth*3 - window.innerWidth,
            y: Math.random()*window.innerHeight*3 - window.innerHeight,
            width:50,
            height:100,
            img:null
        };
        tree.img = new Image();
        tree.img.src = 'assets/tree.png';
        worldObjects.push(tree);
    }
}
generateWorld();
