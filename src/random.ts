import { Vector2D, Vector3D } from './math.js'

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

/**
 * @param characters all allowed characters in the string. Defaults to 0-9, a-z, A-Z
 */
function string(length: number, characters = [...numbers, ...uppercaseLetters, ...lowercaseLetters]) {
  let res = ''
  for (let i=0; i<length; i++) {
    res += pick(characters)
  }
  return res
}

function number(max: number, min = 0) {
  return min + Math.floor(Math.random() * (max - min))
}

function date(max = Date.now(), min = 0) {
  return new Date(number(max, min))
}

function vector2D(minX = 0, maxX = 10, minY = 0, maxY = 10) {
  return new Vector2D(
    number(maxX, minX),
    number(maxY, minY)
  )
}

function vector3D(minX = 0, maxX = 10, minY = 0, maxY = 10, minZ = 0, maxZ = 10) {
  return new Vector3D(
    number(maxX, minX),
    number(maxY, minY),
    number(maxZ, minZ)
  )
}

/**
 * @param vec the vector that should be randomized
 * @param radius randomizing (0, 0) with radius 5 => min: (-5, -5), max: (5, 5)
 */
function randomizeVector2D(vec: Vector2D, radius = 5) {
  vec.add(
    vector2D(
      vec.x - radius,
      vec.x + radius,
      vec.y - radius,
      vec.y + radius
    )
  )
}

/**
 * @param vec the vector that should be randomized
 * @param radius randomizing (0, 0, 0) with radius 5 => min: (-5, -5, -5), max: (5, 5, 5)
 */
function randomizeVector3D(vec: Vector3D, radius = 5) {
  vec.add(
    vector3D(
      vec.x - radius,
      vec.x + radius,
      vec.y - radius,
      vec.y + radius,
      vec.z - radius,
      vec.z + radius
    )
  )
}

/**
 * @returns one random entry from the passed array
 */
function pick(arr: unknown[]) {
  return arr[number(arr.length)]
}

export {
  number,
  string,
  pick,
  date,
  vector2D,
  vector3D,
  randomizeVector2D,
  randomizeVector3D
}