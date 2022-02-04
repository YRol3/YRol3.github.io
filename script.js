
const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
const record = [
    { x: 148.69921875, y: 160.5546875 },{ x: 143.484375, y: 153.84375 },{ x: 142.72265625, y: 152.69921875 },{ x: 142.06640625, y: 152.04296875 },{ x: 141.3046875, y: 150.90234375 },{ x: 140.546875, y: 149.765625 },{ x: 139.890625, y: 149.109375 },{ x: 139.12890625, y: 147.96484375 },{ x: 138.80078125, y: 147.3125 },{ x: 138.14453125, y: 146.65625 },{ x: 137.48828125, y: 146 },{ x: 136.83203125, y: 145.34375 },{ x: 136.50390625, y: 144.6875 },{ x: 135.84765625, y: 144.03125 },{ x: 135.19140625, y: 143.375 },{ x: 134.53515625, y: 142.71875 },{ x: 133.87890625, y: 142.0625 },{ x: 133.1171875, y: 140.91796875 },{ x: 132.4609375, y: 140.26171875 },{ x: 132.1328125, y: 139.60546875 },{ x: 131.4765625, y: 139.27734375 },{ x: 130.82421875, y: 138.625 },{ x: 130.49609375, y: 137.96875 },{ x: 130.21875, y: 137.69140625 },{ x: 129.5625, y: 137.36328125 },{ x: 128.90625, y: 136.70703125 },{ x: 128.25, y: 136.05078125 },{ x: 127.59375, y: 135.72265625 },{ x: 126.9375, y: 135.06640625 },{ x: 126.28125, y: 134.73828125 },{ x: 125.625, y: 134.08203125 },{ x: 124.96875, y: 133.42578125 },{ x: 123.82421875, y: 132.6640625 },{ x: 123.171875, y: 132.01171875 },{ x: 122.02734375, y: 131.25 },{ x: 121.375, y: 130.921875 },{ x: 120.23046875, y: 130.16015625 },{ x: 119.57421875, y: 129.50390625 },{ x: 118.4296875, y: 129.12109375 },{ x: 117.28515625, y: 128.359375 },{ x: 116.62890625, y: 127.703125 },{ x: 115.50390625, y: 126.953125 },{ x: 114.359375, y: 126.5703125 },{ x: 113.21484375, y: 125.80859375 },{ x: 112.5625, y: 125.48046875 },{ x: 111.41796875, y: 124.71875 },{ x: 110.29296875, y: 124.34375 },{ x: 109.1484375, y: 123.58203125 },{ x: 108.4921875, y: 123.25390625 },{ x: 107.34765625, y: 122.87109375 },{ x: 106.2265625, y: 122.125 },{ x: 105.08203125, y: 121.7421875 },{ x: 103.9375, y: 121.359375 },{ x: 102.79296875, y: 120.59765625 },{ x: 101.66015625, y: 120.21875 },{ x: 100.515625, y: 119.8359375 },{ x: 98.8046875, y: 119.40625 },{ x: 97.66015625, y: 119.40625 },{ x: 95.93359375, y: 118.97265625 },{ x: 94.7890625, y: 118.58984375 },{ x: 93.0703125, y: 118.16015625 },{ x: 91.92578125, y: 118.16015625 },{ x: 90.7890625, y: 117.78125 },{ x: 89.05078125, y: 117.78125 },{ x: 87.9296875, y: 117.78125 },{ x: 86.78515625, y: 117.3984375 },{ x: 86.1328125, y: 117.3984375 },{ x: 84.98828125, y: 117.3984375 },{ x: 84.33203125, y: 117.3984375 },{ x: 83.1875, y: 117.015625 },{ x: 82.53125, y: 117.015625 },{ x: 81.875, y: 117.015625 },{ x: 81.21875, y: 117.015625 },{ x: 80.07421875, y: 117.015625 },{ x: 79.41796875, y: 117.015625 },{ x: 78.2734375, y: 117.015625 },{ x: 77.6171875, y: 117.015625 },{ x: 76.47265625, y: 117.015625 },{ x: 75.328125, y: 117.015625 },{ x: 74.1875, y: 117.015625 },{ x: 73.53125, y: 117.33984375 },{ x: 72.39453125, y: 117.71484375 },{ x: 71.25, y: 118.09375 },{ x: 70.10546875, y: 118.47265625 },{ x: 69.453125, y: 118.796875 },{ x: 68.796875, y: 119.12109375 },{ x: 68.140625, y: 119.4453125 },{ x: 67.484375, y: 119.76953125 },{ x: 66.828125, y: 120.09375 },{ x: 66.17578125, y: 120.7421875 },{ x: 65.51953125, y: 121.06640625 },{ x: 64.8671875, y: 121.390625 },{ x: 64.5390625, y: 122.04296875 },{ x: 63.88671875, y: 122.3671875 },{ x: 63.55859375, y: 123.01953125 },{ x: 62.90625, y: 123.66796875 },{ x: 62.62890625, y: 123.94140625 },{ x: 61.97265625, y: 124.59375 },{ x: 61.21484375, y: 125.72265625 },{ x: 60.88671875, y: 126.375 },{ x: 60.55859375, y: 127.02734375 },{ x: 59.796875, y: 128.16796875 },{ x: 59.46875, y: 128.8203125 },{ x: 59.0859375, y: 129.9609375 },{ x: 58.7578125, y: 130.61328125 },{ x: 58.4296875, y: 131.265625 },{ x: 58.046875, y: 132.40625 },{ x: 58.046875, y: 133.546875 },{ x: 57.71875, y: 134.19921875 },{ x: 57.3359375, y: 135.33984375 },{ x: 56.953125, y: 136.48046875 },{ x: 56.5703125, y: 137.62109375 },{ x: 56.1875, y: 138.76171875 },{ x: 55.8046875, y: 139.8984375 },{ x: 55.3671875, y: 141.6328125 },{ x: 54.984375, y: 142.7734375 },{ x: 54.6015625, y: 143.9140625 },{ x: 54.1640625, y: 145.6484375 },{ x: 53.78125, y: 146.7890625 },{ x: 53.78125, y: 148.5234375 },{ x: 53.34375, y: 150.2578125 },{ x: 52.9609375, y: 151.3984375 },{ x: 52.9609375, y: 153.1328125 },{ x: 52.5234375, y: 154.8671875 },{ x: 52.5234375, y: 156.59375 },{ x: 52.140625, y: 157.734375 },{ x: 52.140625, y: 159.46875 },{ x: 51.703125, y: 161.203125 },{ x: 51.703125, y: 162.9375 },{ x: 51.703125, y: 164.65625 },{ x: 51.265625, y: 166.390625 },{ x: 51.265625, y: 168.79296875 },{ x: 51.265625, y: 170.52734375 },{ x: 51.265625, y: 172.26171875 },{ x: 51.265625, y: 173.99609375 },{ x: 50.83203125, y: 175.72265625 },{ x: 50.83203125, y: 177.45703125 },{ x: 50.83203125, y: 179.19140625 },{ x: 50.39453125, y: 180.92578125 },{ x: 50.39453125, y: 182.66015625 },{ x: 50.39453125, y: 184.39453125 },{ x: 50.39453125, y: 186.12890625 },{ x: 49.95703125, y: 187.86328125 },{ x: 49.95703125, y: 189.5859375 },{ x: 49.95703125, y: 191.3203125 },{ x: 49.95703125, y: 193.03515625 },{ x: 49.95703125, y: 194.76953125 },{ x: 49.95703125, y: 196.50390625 },{ x: 49.95703125, y: 198.21484375 },{ x: 49.95703125, y: 199.94921875 },{ x: 49.95703125, y: 201.68359375 },{ x: 49.95703125, y: 203.41796875 },{ x: 49.95703125, y: 205.15234375 },{ x: 49.95703125, y: 206.88671875 },{ x: 49.95703125, y: 208.62109375 },{ x: 49.95703125, y: 210.35546875 },{ x: 49.95703125, y: 212.0546875 },{ x: 49.95703125, y: 213.7890625 },{ x: 49.95703125, y: 215.5234375 },{ x: 49.95703125, y: 217.9609375 },{ x: 49.95703125, y: 219.6953125 },{ x: 49.95703125, y: 221.40625 },{ x: 49.95703125, y: 223.140625 },{ x: 49.95703125, y: 224.875 },{ x: 49.95703125, y: 226.60546875 },{ x: 50.390625, y: 228.33984375 },{ x: 50.390625, y: 230.0703125 },{ x: 50.82421875, y: 231.8046875 },{ x: 51.25, y: 233.515625 },{ x: 51.68359375, y: 235.25 },{ x: 52.16796875, y: 237.6796875 },{ x: 53.03515625, y: 239.4140625 },{ x: 53.51953125, y: 241.84765625 },{ x: 54.4921875, y: 244.28515625 },{ x: 54.921875, y: 246.00390625 },{ x: 55.89453125, y: 248.44140625 },{ x: 56.75, y: 250.15234375 },{ x: 57.234375, y: 252.58984375 },{ x: 58.20703125, y: 255.02734375 },{ x: 59.1796875, y: 257.46484375 },{ x: 60.9609375, y: 261.62890625 },{ x: 61.5, y: 264.875 },{ x: 62.9609375, y: 267.3125 },{ x: 64.04296875, y: 270.55859375 },{ x: 65.109375, y: 273.765625 },{ x: 66.73046875, y: 277.01171875 },{ x: 67.90234375, y: 281.11328125 },{ x: 68.76953125, y: 282.84765625 },{ x: 71.32421875, y: 287.9609375 },{ x: 72.19140625, y: 289.6953125 },{ x: 73.80859375, y: 292.9296875 },{ x: 75.4296875, y: 296.17578125 },{ x: 79.8046875, y: 303.5234375 },{ x: 82.34765625, y: 308.61328125 },{ x: 84.7265625, y: 312.1796875 },{ x: 86.14453125, y: 314.54296875 },{ x: 88.5234375, y: 318.109375 },{ x: 90.90234375, y: 321.67578125 },{ x: 91.76953125, y: 323.41015625 },{ x: 96.3046875, y: 329.4609375 },{ x: 98.6484375, y: 332.9765625 },{ x: 100.8125, y: 335.6796875 },{ x: 103.19140625, y: 339.24609375 },{ x: 106.1640625, y: 342.21875 },{ x: 108.54296875, y: 345.78515625 },{ x: 111.515625, y: 348.7578125 },{ x: 114.48828125, y: 352.32421875 },{ x: 116.8671875, y: 355.890625 },{ x: 119.83984375, y: 359.45703125 },{ x: 120.70703125, y: 361.19140625 },{ x: 123.6640625, y: 364.1484375 },{ x: 125.2734375, y: 367.3671875 },{ x: 127.4375, y: 370.0703125 },{ x: 128.8984375, y: 372.5078125 },{ x: 130.51953125, y: 375.75390625 },{ x: 131.98046875, y: 378.19140625 },{ x: 132.953125, y: 380.62890625 },{ x: 134.546875, y: 383.81640625 },{ x: 136.0078125, y: 386.25390625 },{ x: 137.08984375, y: 389.5 },{ x: 138.55078125, y: 391.9375 },{ x: 139.5234375, y: 394.375 },{ x: 140.9609375, y: 396.7734375 },{ x: 142.04296875, y: 400.01953125 },{ x: 143.49609375, y: 402.44140625 },{ x: 144.36328125, y: 404.17578125 },{ x: 145.8046875, y: 406.58203125 },{ x: 146.77734375, y: 409.01953125 },{ x: 147.74609375, y: 411.4453125 },{ x: 149.20703125, y: 413.39453125 },{ x: 150.06640625, y: 415.1171875 },{ x: 151.0390625, y: 417.5546875 },{ x: 151.796875, y: 418.6953125 },{ x: 152.17578125, y: 419.8359375 },{ x: 152.5, y: 420.48828125 },{ x: 152.76953125, y: 420.7578125 },{ x: 153.04296875, y: 421.03125 },{ x: 153.31640625, y: 421.3046875 },{ x: 153.58984375, y: 421.578125 },{ x: 153.58984375, y: 421.8515625 },{ x: 153.8125, y: 421.8515625 },{ x: 162.0859375, y: 176.9453125 },{ x: 167.4921875, y: 169.41796875 },{ x: 168.24609375, y: 168.28125 },{ x: 169.546875, y: 166.9765625 },{ x: 170.3046875, y: 165.83203125 },{ x: 171.4453125, y: 165.0703125 },{ x: 172.203125, y: 163.92578125 },{ x: 173.50390625, y: 162.62109375 },{ x: 174.64453125, y: 161.859375 },{ x: 175.9453125, y: 160.5546875 },{ x: 177.89453125, y: 159.08984375 },{ x: 179.62890625, y: 158.21875 },{ x: 181.53125, y: 156.7890625 },{ x: 183.48046875, y: 155.32421875 },{ x: 184.78125, y: 154.01953125 },{ x: 187.21875, y: 153.04296875 },{ x: 189.16796875, y: 151.578125 },{ x: 190.30859375, y: 150.81640625 },{ x: 192.2578125, y: 149.3515625 },{ x: 193.3984375, y: 148.58984375 },{ x: 195.125, y: 147.72265625 },{ x: 196.265625, y: 146.9609375 },{ x: 197.3984375, y: 146.203125 },{ x: 198.05078125, y: 145.546875 },{ x: 199.19140625, y: 144.78515625 },{ x: 200.328125, y: 144.40234375 },{ x: 201.46875, y: 143.640625 },{ x: 202.60546875, y: 143.2578125 },{ x: 203.734375, y: 142.50390625 },{ x: 205.46875, y: 141.6328125 },{ x: 207.203125, y: 140.76171875 },{ x: 208.34375, y: 140.37890625 },{ x: 210.78125, y: 139.40234375 },{ x: 212.515625, y: 138.53125 },{ x: 214.25, y: 138.09375 },{ x: 215.97265625, y: 137.23046875 },{ x: 217.70703125, y: 136.359375 },{ x: 220.1015625, y: 135.87890625 },{ x: 221.8359375, y: 135.0078125 },{ x: 223.5703125, y: 134.13671875 },{ x: 225.3046875, y: 133.265625 },{ x: 227.7421875, y: 132.2890625 },{ x: 229.4765625, y: 131.41796875 },{ x: 231.2109375, y: 130.546875 },{ x: 232.9453125, y: 130.109375 },{ x: 234.66796875, y: 129.24609375 },{ x: 237.10546875, y: 128.7578125 },{ x: 238.83984375, y: 128.3203125 },{ x: 240.57421875, y: 128.3203125 },{ x: 242.30859375, y: 127.8828125 },
    { x: 244.74609375, y: 127.8828125 },{ x: 247.17578125, y: 127.8828125 },{ x: 249.61328125, y: 127.8828125 },{ x: 252.04296875, y: 127.8828125 },{ x: 253.77734375, y: 127.8828125 },{ x: 256.140625, y: 127.8828125 },{ x: 257.875, y: 127.8828125 },{ x: 259.56640625, y: 127.8828125 },{ x: 261.30078125, y: 127.8828125 },{ x: 262.43359375, y: 127.8828125 },{ x: 263.57421875, y: 128.26171875 },{ x: 264.22265625, y: 128.5859375 },{ x: 264.98046875, y: 129.7265625 },{ x: 265.625, y: 130.37109375 },{ x: 266.4921875, y: 132.10546875 },{ x: 267.25, y: 133.2421875 },{ x: 267.68359375, y: 134.9765625 },{ x: 268.55078125, y: 136.7109375 },{ x: 269.03515625, y: 139.1484375 },{ x: 269.51953125, y: 141.5859375 },{ x: 270.00390625, y: 144.0234375 },{ x: 270.53515625, y: 147.23046875 },{ x: 271.18359375, y: 152.41796875 },{ x: 271.72265625, y: 155.65234375 },{ x: 272.15625, y: 157.38671875 },{ x: 272.15625, y: 161.55078125 },{ x: 272.15625, y: 166.72265625 },{ x: 272.15625, y: 169.16015625 },{ x: 272.15625, y: 172.3828125 },{ x: 272.15625, y: 175.62890625 },{ x: 272.15625, y: 178.875 },{ x: 272.15625, y: 182.11328125 },{ x: 272.15625, y: 185.359375 },{ x: 272.15625, y: 188.60546875 },{ x: 272.15625, y: 191.8515625 },{ x: 272.15625, y: 197.0390625 },{ x: 272.15625, y: 200.28515625 },{ x: 271.61328125, y: 203.53125 },{ x: 271.01953125, y: 207.68359375 },{ x: 270.58203125, y: 209.41796875 },{ x: 269.8828125, y: 215.69921875 },{ x: 269.39453125, y: 218.13671875 },{ x: 268.85546875, y: 221.35546875 },{ x: 268.3125, y: 224.6015625 },{ x: 267.77734375, y: 227.80078125 },{ x: 266.37109375, y: 234.12109375 },{ x: 265.9375, y: 235.84765625 },{ x: 265.39453125, y: 239.09375 },{ x: 264.00390625, y: 245.33203125 },{ x: 262.91796875, y: 248.578125 },{ x: 261.73828125, y: 252.703125 },{ x: 260.546875, y: 256.8671875 },{ x: 259.3828125, y: 260.9296875 },{ x: 258.08203125, y: 266.1171875 },{ x: 256.90234375, y: 270.234375 },{ x: 254.953125, y: 275.421875 },{ x: 253.03515625, y: 280.53125 },{ x: 251.0859375, y: 285.71875 },{ x: 248.5546875, y: 290.77734375 },{ x: 245.95703125, y: 295.96484375 },{ x: 242.171875, y: 302.76953125 },{ x: 240.70703125, y: 304.71875 },{ x: 237.4609375, y: 309.2578125 },{ x: 234.8828125, y: 313.76171875 },{ x: 231.90625, y: 317.328125 },{ x: 228.9296875, y: 320.30078125 },{ x: 226.7890625, y: 322.97265625 },{ x: 223.8125, y: 325.9453125 },{ x: 221.8984375, y: 327.85546875 },{ x: 218.00390625, y: 331.74609375 },{ x: 215.296875, y: 333.90625 },{ x: 212.3203125, y: 336.87890625 },{ x: 209.3984375, y: 340.3828125 },{ x: 205.828125, y: 343.35546875 },{ x: 202.86328125, y: 346.91015625 },{ x: 198.96875, y: 350.80078125 },{ x: 195.734375, y: 355.328125 },{ x: 191.83984375, y: 359.21875 },{ x: 188.93359375, y: 362.703125 },{ x: 187.46875, y: 364.65234375 },{ x: 184.4921875, y: 368.21875 },{ x: 182.109375, y: 371.78515625 },{ x: 179.94140625, y: 374.48828125 },{ x: 177.55859375, y: 378.0546875 },{ x: 175.390625, y: 380.7578125 },{ x: 173.765625, y: 384.00390625 },{ x: 172.31640625, y: 386.4140625 },{ x: 170.69140625, y: 389.66015625 },{ x: 169.2265625, y: 392.09765625 },{ x: 167.76171875, y: 394.53515625 },{ x: 166.13671875, y: 397.78125 },{ x: 165.16796875, y: 400.1953125 },{ x: 163.54296875, y: 403.44140625 },{ x: 162.59765625, y: 405.80078125 },{ x: 161.62109375, y: 408.23828125 },{ x: 160.16796875, y: 410.171875 },{ x: 159.19140625, y: 412.609375 },{ x: 158.43359375, y: 413.73828125 },{ x: 157.5625, y: 415.47265625 },{ x: 157.234375, y: 416.125 },{ x: 156.90625, y: 416.77734375 },{ x: 156.578125, y: 417.4296875 },{ x: 156.30078125, y: 417.703125 },{ x: 156.30078125, y: 417.9765625 },{ x: 156.30078125, y: 418.25 },{ x: 156.0234375, y: 418.5234375 },{ x: 156.0234375, y: 417.28125 }
]
function handleTouch(e){
    for(let j = 0; j < e.changedTouches.length; j++){
        for(let i = 0; i < 5; i++)
            particals.push(new Partical(e.changedTouches[j].clientX, e.changedTouches[j].clientY))
    }
}
const particals = []
let hue = 0
class Partical{
    constructor(x, y){
        this.x = x
        this.y = y
        this.size = 5
        this.vs = Math.random() * 3 - 1.5
        this.hs = Math.random() * 3 - 1.5
        this.color = `hsl(${hue}, 100%, 50%)`
    }
    update(){
        this.x += this.hs
        this.y += this.vs
        if(this.size > 0.2) this.size -= 0.1
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
}
canvas.addEventListener('touchstart', handleTouch)
canvas.addEventListener('touchmove', handleTouch)
function animate(){
    hue ++;
    ctx.fillStyle = "rgba(0,0,0,0.1)"
    ctx.fillRect(0,0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
    handleParticals()
}
animate()
max = record.length
total = 0
loops = 0
interval = null
function playAnimation(){
    interval = setTimeout(()=> playAnimation(), 15)
    for(let i = total;i < total + 50 && i < max; i++){
        particals.push(new Partical(record[i].x, record[i].y))
    }
    if(total >= max){
        total = 0;
        loops++;
        
    }
    total+= 5;
    if(loops > 4){
        clearInterval(interval)
        setTimeout(()=>nextAnimation(),1500)
        
    }
}
time = 0
function nextAnimation(){
    for(let i = 0; i < record.length; i++){
        particals.push(new Partical(record[i].x, record[i].y))
    }
    interval = setTimeout(()=> nextAnimation(), time+=10)
    if(time > 200)
        clearInterval(interval)
}
playAnimation()
function handleParticals(){
    for(let i = 0; i < particals.length; i++){
        particals[i].update()
        particals[i].draw()

        if(particals[i].size <= 0.2){
            particals.splice(i, 1)
            i--;
        }
    }
}
