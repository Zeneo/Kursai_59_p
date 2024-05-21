
let space_v =   60;     // Moving container height
let space_h =   930;    // Moving container width:
// ({width}[1000px]-{animal picture size}[70px])

let anim_time = 200;
let anim_speed = 10;    // Animation speed
let cp_top = 50;        // Initial position of sprite top
let cp_left = 400;      // Initial position of sprite left
let img_sprite_h = -70;  // Horuzontaly sprite changes each %px
let img_sprite_v = -74;  // Verticaly sprite changes each %px
let sprite = document.getElementById('js-sprite');
let walking;
// setInterval(function() {move('h')}, 400);    // h - Horizontal
// setInterval(function() {move('v')}, 400);    // v - vertical
move();
sprite.onmouseenter = function(){
    clearInterval(walking);
    sprite.style.backgroundPositionY = img_sprite_v+'px';
    sprite.style.backgroundPositionX = img_sprite_h+'px';
}
sprite.onmouseleave = function(){
    setTimeout(function() {
        move();
    }, 400);
}
/**
 * Move
 * cp - current position
 * np - new position
 */
function move() {
    let np = 0; // New position
    let target = rndBetween(1,4); //1-Goes top, 2-goes right, 3-goes bottom, 4-goes left
    let walkingPos = 0;
    if(target === 1) {
        np = rndBetween(0, cp_top);
        walking = setInterval(function() {
            if(cp_top >= np) {
                if(walkingPos > 7) {
                    walkingPos=0;
                }else {
                    walkingPos++;
                }
                cp_top -= anim_speed;
                sprite.style.backgroundPositionY = img_sprite_v*2+'px';
                sprite.style.backgroundPositionX = walkingPos!==0?img_sprite_h*walkingPos+'px':null;
                sprite.style.top = cp_top+'px';
            }else{
                sprite.classList.remove('smooth');
                clearInterval(walking);
                move();
            }
        }, anim_time)
    }else if(target === 2) {
        np = rndBetween(cp_left, space_h);
        walking = setInterval(function() {
            if(cp_left <= np) {
                if(walkingPos > 6) {
                    walkingPos=0;
                }else {
                    walkingPos++;
                }
                cp_left += anim_speed;
                sprite.classList.remove('spire_inv');
                sprite.classList.add('smooth');
                sprite.style.backgroundPositionY = '0';
                sprite.style.backgroundPositionX = walkingPos!==0?img_sprite_h*walkingPos+'px':walkingPos+'px';
                sprite.style.left = cp_left+'px';
            }else{
                sprite.classList.remove('smooth');
                clearInterval(walking);
                move();
            }
        }, anim_time)
    }else if(target === 3) {
        np = rndBetween(cp_top, space_v);
        walking = setInterval(function() {
            if(cp_top <= np) {
                if(walkingPos > 7) {
                    walkingPos=0;
                }else {
                    walkingPos++;
                }
                cp_top += anim_speed;
                sprite.style.backgroundPositionY = img_sprite_v+'px';
                sprite.style.backgroundPositionX = img_sprite_h*walkingPos+'px';
                sprite.style.top = cp_top+'px';
            }else{
                sprite.classList.remove('smooth');
                clearInterval(walking);
                move();
            }
        }, anim_time)
    }else {
        np = rndBetween(0, cp_left);
        sprite.classList.add('spire_inv');
        walking = setInterval(function() {
            if(cp_left >= np) {
                if(walkingPos > 6) {
                    walkingPos=0;
                }else {
                    walkingPos++;
                }
                cp_left -= anim_speed;
                sprite.style.backgroundPositionY = '0';
                sprite.style.backgroundPositionX = img_sprite_h*walkingPos+'px';
                sprite.style.left = cp_left+'px';
            }else{
                sprite.classList.remove('smooth');
                clearInterval(walking);
                move();
            }
        }, anim_time)
    }
}

function rndBetween(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}