import dieWav from '~/assets/wav/die.wav';
import setWav from '~/assets/wav/set.wav';
import tbfree from '~/assets/mp3/2bfree.mp3';

export const state = () => {
  return {
    'bgm': null
  }
}

let sounds = {
  'die': dieWav,
  'set': setWav,
  '2bfree': tbfree
}

let audioMap = {}

export const mutations = {
  playSound (state, name) {
    if (!audioMap[name]) {
      audioMap[name] = new Audio(sounds[name])
    }
    audioMap[name].play()
  },
  playBgm (state, name) {
    if (state.bgm === name) {
      return
    }
    if (!audioMap[name]) {
      audioMap[name] = new Audio(sounds[name])
      audioMap[name].loop = true
    }
    audioMap[name].play()
    state.bgm = name
  }
}
