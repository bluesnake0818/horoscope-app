import User from '../models/User'
import { renderGanIndex, renderJiIndex } from '../util/math'

const GAN = [
  'Gap', 'Eul', 'Byung', 'Jung', 'Muu', 
  'Kii', 'Kyung', 'Shin', 'Yim', 'Kye'
]

const JI = [
  'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
  'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
]

export const USERS = [
  new User(
    1, 
    'John',
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
  ),
  new User(
    2, 
    'Adam',
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
  ),
  new User(
    3, 
    'Ben',
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
  ),
  new User(
    4, 
    'Carol',
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
  ),
  new User(
    5, 
    'Mike',
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
  ),
  new User(
    6, 
    'Kelly',
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
  ),
  new User(
    7, 
    'Dan',
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
  ),
  new User(
    8, 
    'Jack',
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
  ),
  new User(
    9,
    'George',
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
  ),
  new User(
    10,
    'Mary',
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
    GAN[renderGanIndex()],
    JI[renderJiIndex()],
  ),
]