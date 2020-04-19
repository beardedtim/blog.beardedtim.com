import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import gray from 'gray-matter'

const read_file = promisify(fs.readFile)

export const readFile = async fileName => {
  const post_text = await read_file(path.resolve(fileName), 'utf8')

  const { content, data } = gray(post_text)

  return { 
    content,
    data
  }
}

export default readFile